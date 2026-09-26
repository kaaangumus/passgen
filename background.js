const CHARSETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};

const DEFAULT_OPTIONS = {
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  exclude: "",
  enableHistory: true
};

function getRandomInt(max) {
  if (max <= 1) return 0;
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  do {
    crypto.getRandomValues(buf);
  } while (buf[0] >= limit);
  return buf[0] % max;
}

function generatePassword(options) {
  const opts = Object.assign({}, DEFAULT_OPTIONS, options);

  const excl = new Set((opts.exclude || "").split(""));
  function clean(s) { return s.split("").filter(c => !excl.has(c)).join(""); }

  let available = "";
  const guaranteed = [];

  const U = clean(CHARSETS.uppercase);
  const L = clean(CHARSETS.lowercase);
  const N = clean(CHARSETS.numbers);
  const S = clean(CHARSETS.symbols);

  if (opts.uppercase && U) {
    available += U;
    guaranteed.push(U[getRandomInt(U.length)]);
  }
  if (opts.lowercase && L) {
    available += L;
    guaranteed.push(L[getRandomInt(L.length)]);
  }
  if (opts.numbers && N) {
    available += N;
    guaranteed.push(N[getRandomInt(N.length)]);
  }
  if (opts.symbols && S) {
    available += S;
    guaranteed.push(S[getRandomInt(S.length)]);
  }

  if (available.length === 0) {
    const fallback = clean(CHARSETS.lowercase + CHARSETS.numbers) || CHARSETS.lowercase;
    available = fallback;
    guaranteed.push(fallback[getRandomInt(fallback.length)]);
  }

  const chars = [...guaranteed];
  const targetLen = Math.max(opts.length, guaranteed.length);
  for (let i = chars.length; i < targetLen; i++) {
    chars.push(available[getRandomInt(available.length)]);
  }

  for (let i = chars.length - 1; i > 0; i--) {
    const j = getRandomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
}

// Gömülü context menu çevirileri (chrome.i18n.getMessage yerine)
const MENU_TITLES = {
  tr: "Şifre Üret",
  en: "Generate Password",
  es: "Generar Contraseña",
  fr: "Générer un Mot de Passe",
  ru: "Создать пароль",
  zh: "生成密码"
};
const TOAST_TITLES = {
  tr: "Şifre Oluşturuldu",   en: "Password Generated",
  es: "Contraseña Generada", fr: "Mot de Passe Généré",
  ru: "Пароль создан",       zh: "密码已生成"
};
const TOAST_SUBS = {
  tr: "Panoya kopyalandı.",         en: "Copied to clipboard.",
  es: "Copiado al portapapeles.",   fr: "Copié dans le presse-papiers.",
  ru: "Скопировано в буфер обмена.", zh: "已复制到剪贴板。"
};

function getLang(stored) {
  if (stored && MENU_TITLES[stored]) return stored;
  const nav = (typeof navigator !== "undefined" ? navigator.language : "en").toLowerCase();
  if (nav.startsWith("tr")) return "tr";
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("ru")) return "ru";
  if (nav.startsWith("zh")) return "zh";
  return "en";
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get({ lang: null }, ({ lang }) => {
    const l = getLang(lang);
    chrome.contextMenus.create({
      id: "passgen-generate",
      title: MENU_TITLES[l] || MENU_TITLES.en,
      contexts: ["editable"]
    });
  });
});

// popup'tan gelen dil değişikliğini anında uygula
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "passgen_lang") {
    const title = MENU_TITLES[msg.lang] || MENU_TITLES.en;
    chrome.contextMenus.update("passgen-generate", { title });
  }
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId !== "passgen-generate") return;
  if (!tab || !tab.id) return;

  const result = await chrome.storage.sync.get(Object.assign({ lang: null }, DEFAULT_OPTIONS));
  const opts = {
    length:        result.length        || DEFAULT_OPTIONS.length,
    uppercase:     result.uppercase !== undefined ? result.uppercase : DEFAULT_OPTIONS.uppercase,
    lowercase:     result.lowercase !== undefined ? result.lowercase : DEFAULT_OPTIONS.lowercase,
    numbers:       result.numbers   !== undefined ? result.numbers   : DEFAULT_OPTIONS.numbers,
    symbols:       result.symbols   !== undefined ? result.symbols   : DEFAULT_OPTIONS.symbols,
    exclude:       result.exclude       || "",
    lang:          result.lang
  };

  const password   = generatePassword(opts);
  const l          = getLang(result.lang);
  const toastTitle = TOAST_TITLES[l] || TOAST_TITLES.en;
  const toastSub   = TOAST_SUBS[l]   || TOAST_SUBS.en;

  const showToast  = result.showToast !== undefined ? result.showToast : true;
  const histLimit  = parseInt(result.histLimit) || 10;
  const canSaveHist = result.enableHistory !== undefined ? result.enableHistory : true;

  // Üretilen şifreyi zaman damgasıyla geçmişe kaydet (yalnızca izin verilmişse)
  if (canSaveHist) {
    chrome.storage.local.get({ passgen_history: [] }, local => {
      const raw = (local.passgen_history || []).map(item => typeof item === "string" ? { pwd: item, time: Date.now() } : item);
      const history = [{ pwd: password, time: Date.now() }, ...raw.filter(p => p.pwd !== password)].slice(0, histLimit);
      chrome.storage.local.set({ passgen_history: history });
    });
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (pwd, title, sub, canToast) => {
        let el = document.activeElement;
        if (el && !el.matches("input, textarea, [contenteditable]")) {
          el = el.closest("input, textarea") || el.querySelector("input[type='password']") || el.querySelector("input, textarea") || document.activeElement;
        }
        if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) {
          el.focus();
          const proto = el.tagName === "INPUT" ? window.HTMLInputElement.prototype : window.HTMLTextAreaElement.prototype;
          const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value");
          if (nativeSetter) {
            nativeSetter.set.call(el, pwd);
          } else {
            el.value = pwd;
          }
          // Tarayıcı şifre yöneticilerini ve frameworkleri (React, Vue, Angular) eksiksiz tetikle
          el.dispatchEvent(new Event("input", { bubbles: true }));
          el.dispatchEvent(new Event("change", { bubbles: true }));
          el.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }));
          el.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
          el.blur();
          el.focus();
        }
        navigator.clipboard.writeText(pwd).catch(() => {});
        if (canToast) {
          let toast = document.getElementById("passgen-toast");
          if (!toast) {
            const style = document.createElement("style");
            style.textContent = "#passgen-toast{position:fixed;bottom:24px;right:24px;z-index:2147483647;background:#111827;color:#f9fafb;border:1px solid #374151;border-left:3px solid #10b981;border-radius:8px;padding:10px 16px;min-width:220px;max-width:320px;box-shadow:0 10px 25px rgba(0,0,0,0.4);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;display:flex;align-items:center;gap:10px;opacity:0;transform:translateX(110%);transition:opacity .25s ease,transform .3s cubic-bezier(0.34,1.56,0.64,1);pointer-events:none;}#passgen-toast.show{opacity:1;transform:translateX(0);}#passgen-toast svg{flex-shrink:0;width:20px;height:20px;color:#10b981;}#passgen-toast .pg-title{font-weight:600;color:#f9fafb;font-size:13px;}#passgen-toast .pg-sub{font-size:11px;color:#9ca3af;margin-top:2px;}";
            document.documentElement.appendChild(style);
            toast = document.createElement("div");
            toast.id = "passgen-toast";
            toast.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><div class="pg-body"><div class="pg-title"></div><div class="pg-sub"></div></div>';
            document.documentElement.appendChild(toast);
          }
          toast.querySelector(".pg-title").textContent = title || "Password Generated";
          toast.querySelector(".pg-sub").textContent = sub || "Copied to clipboard.";
          toast.classList.remove("show");
          void toast.offsetWidth;
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 2600);
        }
      },
      args: [password, toastTitle, toastSub, showToast]
    });
  } catch (_) {
    // Korumalı sistem sayfalarında sessizce başarısız ol
  }
});

// ── Klavye Kısayolu: Alt+Shift+G ─────────────────────────────────────────────
chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "generate-password") return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.id) return;

  const stored = await chrome.storage.sync.get(Object.assign({ lang: null }, DEFAULT_OPTIONS));
  const opts   = {
    length:        stored.length        || DEFAULT_OPTIONS.length,
    uppercase:     stored.uppercase !== undefined ? stored.uppercase : DEFAULT_OPTIONS.uppercase,
    lowercase:     stored.lowercase !== undefined ? stored.lowercase : DEFAULT_OPTIONS.lowercase,
    numbers:       stored.numbers   !== undefined ? stored.numbers   : DEFAULT_OPTIONS.numbers,
    symbols:       stored.symbols   !== undefined ? stored.symbols   : DEFAULT_OPTIONS.symbols,
    exclude:       stored.exclude       || "",
    lang:          stored.lang
  };
  const l          = getLang(stored.lang);
  const showToast  = stored.showToast !== undefined ? stored.showToast : true;
  const histLimit  = parseInt(stored.histLimit) || 10;
  const canSaveHist = stored.enableHistory !== undefined ? stored.enableHistory : true;

  const password   = generatePassword(opts);
  const toastTitle = TOAST_TITLES[l] || TOAST_TITLES.en;
  const toastSub   = TOAST_SUBS[l]   || TOAST_SUBS.en;

  if (canSaveHist) {
    chrome.storage.local.get({ passgen_history: [] }, local => {
      const raw = (local.passgen_history || []).map(item => typeof item === "string" ? { pwd: item, time: Date.now() } : item);
      const history = [{ pwd: password, time: Date.now() }, ...raw.filter(p => p.pwd !== password)].slice(0, histLimit);
      chrome.storage.local.set({ passgen_history: history });
    });
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (pwd, title, sub, canToast) => {
        let el = document.activeElement;
        if (el && !el.matches("input, textarea, [contenteditable]")) {
          el = el.closest("input, textarea") || el.querySelector("input[type='password']") || el.querySelector("input, textarea");
        }
        if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) {
          el.focus();
          const proto = el.tagName === "INPUT" ? window.HTMLInputElement.prototype : window.HTMLTextAreaElement.prototype;
          const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value");
          if (nativeSetter) nativeSetter.set.call(el, pwd); else el.value = pwd;
          el.dispatchEvent(new Event("input", { bubbles: true }));
          el.dispatchEvent(new Event("change", { bubbles: true }));
          el.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }));
          el.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
          el.blur();
          el.focus();
        }
        navigator.clipboard.writeText(pwd).catch(() => {});
        if (canToast) {
          let toast = document.getElementById("passgen-toast");
          if (!toast) {
            const style = document.createElement("style");
            style.textContent = "#passgen-toast{position:fixed;bottom:24px;right:24px;z-index:2147483647;background:#111827;color:#f9fafb;border:1px solid #374151;border-left:3px solid #10b981;border-radius:8px;padding:10px 16px;min-width:220px;max-width:320px;box-shadow:0 10px 25px rgba(0,0,0,0.4);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;display:flex;align-items:center;gap:10px;opacity:0;transform:translateX(110%);transition:opacity .25s ease,transform .3s cubic-bezier(0.34,1.56,0.64,1);pointer-events:none;}#passgen-toast.show{opacity:1;transform:translateX(0);}#passgen-toast svg{flex-shrink:0;width:20px;height:20px;color:#10b981;}#passgen-toast .pg-title{font-weight:600;color:#f9fafb;font-size:13px;}#passgen-toast .pg-sub{font-size:11px;color:#9ca3af;margin-top:2px;}";
            document.documentElement.appendChild(style);
            toast = document.createElement("div");
            toast.id = "passgen-toast";
            toast.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><div class="pg-body"><div class="pg-title"></div><div class="pg-sub"></div></div>';
            document.documentElement.appendChild(toast);
          }
          toast.querySelector(".pg-title").textContent = title || "Password Generated";
          toast.querySelector(".pg-sub").textContent = sub || "Copied to clipboard.";
          toast.classList.remove("show");
          void toast.offsetWidth;
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 2600);
        }
      },
      args: [password, toastTitle, toastSub, showToast]
    });
  } catch (_) {
    // Korumalı sayfalarda sessiz kal
  }
});
