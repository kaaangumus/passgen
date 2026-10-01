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

// Gömülü context menu çevirileri
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
const TOAST_SUBS_BOTH = {
  tr: "Şifre ve onay alanı dolduruldu.",         en: "Password & confirmation filled.",
  es: "Contraseña y confirmación rellenadas.",   fr: "Mot de passe et confirmation remplis.",
  ru: "Пароль и подтверждение заполнены.",       zh: "密码与确认密码已填充。"
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

// Web sayfalarında Şifre ve Şifreyi Onayla alanlarını akıllıca dolduran fonksiyon
function fillPageFields(pwd, toastTitle, toastSubSingle, toastSubBoth, canToast) {
  function setVal(input, val) {
    if (!input) return;
    try {
      input.focus();
      const proto = window.HTMLInputElement.prototype;
      const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
      if (nativeSetter) {
        nativeSetter.call(input, val);
      } else {
        input.value = val;
      }
      if (input._valueTracker) {
        input._valueTracker.setValue("");
      }
      input.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      input.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      input.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "a" }));
      input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true, key: "a" }));
      input.blur();
    } catch (_) {}
  }

  function isConfirm(inp) {
    if (!inp) return false;
    const s = `${inp.name || ""} ${inp.id || ""} ${inp.getAttribute("placeholder") || ""} ${inp.getAttribute("aria-label") || ""} ${inp.getAttribute("autocomplete") || ""}`.toLowerCase();
    return /confirm|tekrar|onay|repeat|reenter|re_enter|retype|re_type|pass2|pwd2|verify|check|match|wiederhol|repetir|confir/i.test(s);
  }

  function isOldPassword(inp) {
    if (!inp) return false;
    const s = `${inp.name || ""} ${inp.id || ""} ${inp.getAttribute("placeholder") || ""} ${inp.getAttribute("aria-label") || ""} ${inp.getAttribute("autocomplete") || ""}`.toLowerCase();
    return /old|current|eski|mevcut|anterior|actuel/i.test(s) && !isConfirm(inp);
  }

  function isVisible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return false;
    const style = window.getComputedStyle(el);
    return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0";
  }

  // 1. Aktif / odaklanmış elemanı bul
  let active = document.activeElement;
  while (active && active.shadowRoot && active.shadowRoot.activeElement) {
    active = active.shadowRoot.activeElement;
  }

  let primary = null;
  if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) {
    primary = active;
  }

  // Kapsam (form, container veya document)
  const form = (primary && primary.form) ||
               (primary && primary.closest('form, [role="form"], [role="dialog"], [class*="modal"], [class*="dialog"], [class*="popup"]')) ||
               document;

  const allInputs = Array.from(form.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([disabled])'))
    .filter(isVisible);

  const pwdInputs = allInputs.filter(inp => inp.type === "password" || inp.getAttribute("autocomplete") === "new-password" || isConfirm(inp));

  if (!primary) {
    primary = pwdInputs.find(inp => !isOldPassword(inp)) || pwdInputs[0] || allInputs[0];
  }

  const targets = new Set();
  if (primary) targets.add(primary);

  // 2. Onay (Confirm Password) alanını akıllı tespit et
  if (primary && pwdInputs.length > 0) {
    const explicitConfirm = pwdInputs.find(inp => inp !== primary && isConfirm(inp));
    if (explicitConfirm) {
      targets.add(explicitConfirm);
    } else if (isConfirm(primary)) {
      const prevPwd = pwdInputs.slice(0, pwdInputs.indexOf(primary)).reverse().find(inp => !isOldPassword(inp));
      if (prevPwd) targets.add(prevPwd);
    } else {
      const nonOld = pwdInputs.filter(inp => !isOldPassword(inp));
      if (nonOld.length === 2) {
        nonOld.forEach(inp => targets.add(inp));
      } else {
        const idx = pwdInputs.indexOf(primary);
        if (idx !== -1 && idx + 1 < pwdInputs.length && !isOldPassword(pwdInputs[idx + 1])) {
          targets.add(pwdInputs[idx + 1]);
        }
      }
    }
  }

  if (targets.size === 0) return false;

  // 3. Hedeflerin hepsini doldur (Şifre + Onay)
  targets.forEach(inp => setVal(inp, pwd));

  // 4. Panoya kopyala
  navigator.clipboard.writeText(pwd).catch(() => {});

  // 5. Toast bildirimi göster
  if (canToast) {
    const isBoth = targets.size > 1;
    const subText = isBoth ? (toastSubBoth || toastSubSingle) : toastSubSingle;

    let toast = document.getElementById("passgen-toast");
    if (!toast) {
      const style = document.createElement("style");
      style.textContent = "#passgen-toast{position:fixed;bottom:24px;right:24px;z-index:2147483647;background:#111827;color:#f9fafb;border:1px solid #374151;border-left:3px solid #10b981;border-radius:8px;padding:10px 16px;min-width:240px;max-width:340px;box-shadow:0 10px 25px rgba(0,0,0,0.4);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;display:flex;align-items:center;gap:10px;opacity:0;transform:translateX(110%);transition:opacity .25s ease,transform .3s cubic-bezier(0.34,1.56,0.64,1);pointer-events:none;}#passgen-toast.show{opacity:1;transform:translateX(0);}#passgen-toast svg{flex-shrink:0;width:20px;height:20px;color:#10b981;}#passgen-toast .pg-title{font-weight:600;color:#f9fafb;font-size:13px;}#passgen-toast .pg-sub{font-size:11px;color:#9ca3af;margin-top:2px;}";
      document.documentElement.appendChild(style);
      toast = document.createElement("div");
      toast.id = "passgen-toast";
      toast.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><div class="pg-body"><div class="pg-title"></div><div class="pg-sub"></div></div>';
      document.documentElement.appendChild(toast);
    }
    toast.querySelector(".pg-title").textContent = toastTitle || "Password Generated";
    toast.querySelector(".pg-sub").textContent = subText || "Copied to clipboard.";
    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }
  return true;
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

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "passgen_lang") {
    const title = MENU_TITLES[msg.lang] || MENU_TITLES.en;
    chrome.contextMenus.update("passgen-generate", { title });
  } else if (msg.type === "fill_active_tab") {
    chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
      if (!tab || !tab.id) {
        sendResponse({ success: false });
        return;
      }
      const l = getLang(msg.lang);
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        func: fillPageFields,
        args: [
          msg.password,
          TOAST_TITLES[l] || TOAST_TITLES.en,
          TOAST_SUBS[l] || TOAST_SUBS.en,
          TOAST_SUBS_BOTH[l] || TOAST_SUBS_BOTH.en,
          msg.showToast !== false
        ]
      }).then(() => sendResponse({ success: true }))
        .catch(() => sendResponse({ success: false }));
    });
    return true; // async sendResponse
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

  const password    = generatePassword(opts);
  const l           = getLang(result.lang);
  const toastTitle  = TOAST_TITLES[l] || TOAST_TITLES.en;
  const toastSub    = TOAST_SUBS[l]   || TOAST_SUBS.en;
  const toastSubBoth= TOAST_SUBS_BOTH[l] || TOAST_SUBS_BOTH.en;

  const showToast   = result.showToast !== undefined ? result.showToast : true;
  const histLimit   = parseInt(result.histLimit) || 10;
  const canSaveHist = result.enableHistory !== undefined ? result.enableHistory : true;

  if (canSaveHist) {
    chrome.storage.local.get({ passgen_history: [] }, local => {
      const raw = (local.passgen_history || []).map(item => typeof item === "string" ? { pwd: item, time: Date.now() } : item);
      const history = [{ pwd: password, time: Date.now() }, ...raw.filter(p => p.pwd !== password)].slice(0, histLimit);
      chrome.storage.local.set({ passgen_history: history });
    });
  }

  try {
    const target = (typeof info.frameId === "number")
      ? { tabId: tab.id, frameIds: [info.frameId] }
      : { tabId: tab.id, allFrames: true };

    await chrome.scripting.executeScript({
      target,
      func: fillPageFields,
      args: [password, toastTitle, toastSub, toastSubBoth, showToast]
    });
  } catch (_) {}
});

// ── Klavye Kısayolu: Alt+Shift+G ─────────────────────────────────────────────
chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "generate-password") return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.id) return;

  const stored = await chrome.storage.sync.get(Object.assign({ lang: null }, DEFAULT_OPTIONS));
  const opts = {
    length:        stored.length        || DEFAULT_OPTIONS.length,
    uppercase:     stored.uppercase !== undefined ? stored.uppercase : DEFAULT_OPTIONS.uppercase,
    lowercase:     stored.lowercase !== undefined ? stored.lowercase : DEFAULT_OPTIONS.lowercase,
    numbers:       stored.numbers   !== undefined ? stored.numbers   : DEFAULT_OPTIONS.numbers,
    symbols:       stored.symbols   !== undefined ? stored.symbols   : DEFAULT_OPTIONS.symbols,
    exclude:       stored.exclude       || "",
    lang:          stored.lang
  };
  const l           = getLang(stored.lang);
  const showToast   = stored.showToast !== undefined ? stored.showToast : true;
  const histLimit   = parseInt(stored.histLimit) || 10;
  const canSaveHist = stored.enableHistory !== undefined ? stored.enableHistory : true;

  const password    = generatePassword(opts);
  const toastTitle  = TOAST_TITLES[l] || TOAST_TITLES.en;
  const toastSub    = TOAST_SUBS[l]   || TOAST_SUBS.en;
  const toastSubBoth= TOAST_SUBS_BOTH[l] || TOAST_SUBS_BOTH.en;

  if (canSaveHist) {
    chrome.storage.local.get({ passgen_history: [] }, local => {
      const raw = (local.passgen_history || []).map(item => typeof item === "string" ? { pwd: item, time: Date.now() } : item);
      const history = [{ pwd: password, time: Date.now() }, ...raw.filter(p => p.pwd !== password)].slice(0, histLimit);
      chrome.storage.local.set({ passgen_history: history });
    });
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      func: fillPageFields,
      args: [password, toastTitle, toastSub, toastSubBoth, showToast]
    });
  } catch (_) {}
});
