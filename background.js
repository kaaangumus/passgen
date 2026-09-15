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
  exclude: ""
};

function getRandomInt(max) {
  const buf = new Uint32Array(1);
  crypto.getRandomValues(buf);
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
    length:    result.length    || DEFAULT_OPTIONS.length,
    uppercase: result.uppercase !== undefined ? result.uppercase : DEFAULT_OPTIONS.uppercase,
    lowercase: result.lowercase !== undefined ? result.lowercase : DEFAULT_OPTIONS.lowercase,
    numbers:   result.numbers   !== undefined ? result.numbers   : DEFAULT_OPTIONS.numbers,
    symbols:   result.symbols   !== undefined ? result.symbols   : DEFAULT_OPTIONS.symbols,
    exclude:   result.exclude   || ""
  };

  const password   = generatePassword(opts);
  const l          = getLang(result.lang);
  const toastTitle = TOAST_TITLES[l] || TOAST_TITLES.en;
  const toastSub   = TOAST_SUBS[l]   || TOAST_SUBS.en;

  const showToast  = result.showToast !== undefined ? result.showToast : true;
  const histLimit  = parseInt(result.histLimit) || 10;

  // Üretilen şifreyi zaman damgasıyla geçmişe kaydet
  chrome.storage.local.get({ passgen_history: [] }, local => {
    const raw = (local.passgen_history || []).map(item => typeof item === "string" ? { pwd: item, time: Date.now() } : item);
    const history = [{ pwd: password, time: Date.now() }, ...raw.filter(p => p.pwd !== password)].slice(0, histLimit);
    chrome.storage.local.set({ passgen_history: history });
  });

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (pwd, title, sub, canToast) => {
        let el = window.__passgenLastTarget || document.activeElement;
        if (el && !el.matches("input, textarea, [contenteditable]")) {
          el = el.closest("input, textarea") || el.querySelector("input, textarea") || document.activeElement;
        }
        if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) {
          const proto = el.tagName === "INPUT"
            ? window.HTMLInputElement.prototype
            : window.HTMLTextAreaElement.prototype;
          const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value");
          if (nativeSetter) {
            nativeSetter.set.call(el, pwd);
          } else {
            el.value = pwd;
          }
          el.dispatchEvent(new Event("input", { bubbles: true }));
          el.dispatchEvent(new Event("change", { bubbles: true }));
        }
        navigator.clipboard.writeText(pwd).catch(() => {});
        if (canToast && window.__passgenToast) {
          window.__passgenToast(pwd, title, sub);
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
    length:    stored.length    || DEFAULT_OPTIONS.length,
    uppercase: stored.uppercase !== undefined ? stored.uppercase : DEFAULT_OPTIONS.uppercase,
    lowercase: stored.lowercase !== undefined ? stored.lowercase : DEFAULT_OPTIONS.lowercase,
    numbers:   stored.numbers   !== undefined ? stored.numbers   : DEFAULT_OPTIONS.numbers,
    symbols:   stored.symbols   !== undefined ? stored.symbols   : DEFAULT_OPTIONS.symbols,
    exclude:   stored.exclude   || ""
  };
  const l          = getLang(stored.lang);
  const showToast  = stored.showToast !== undefined ? stored.showToast : true;
  const histLimit  = parseInt(stored.histLimit) || 10;

  const password   = generatePassword(opts);
  const toastTitle = TOAST_TITLES[l] || TOAST_TITLES.en;
  const toastSub   = TOAST_SUBS[l]   || TOAST_SUBS.en;

  // Üretilen şifreyi zaman damgasıyla geçmişe kaydet
  chrome.storage.local.get({ passgen_history: [] }, local => {
    const raw = (local.passgen_history || []).map(item => typeof item === "string" ? { pwd: item, time: Date.now() } : item);
    const history = [{ pwd: password, time: Date.now() }, ...raw.filter(p => p.pwd !== password)].slice(0, histLimit);
    chrome.storage.local.set({ passgen_history: history });
  });

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (pwd, title, sub, canToast) => {
        let el = document.activeElement;
        if (el && !el.matches("input, textarea, [contenteditable]")) {
          el = el.closest("input, textarea") || el.querySelector("input[type='password']") || el.querySelector("input, textarea");
        }
        if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) {
          const proto     = el.tagName === "INPUT" ? window.HTMLInputElement.prototype : window.HTMLTextAreaElement.prototype;
          const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value");
          if (nativeSetter) nativeSetter.set.call(el, pwd); else el.value = pwd;
          el.dispatchEvent(new Event("input",  { bubbles: true }));
          el.dispatchEvent(new Event("change", { bubbles: true }));
        }
        navigator.clipboard.writeText(pwd).catch(() => {});
        if (canToast && window.__passgenToast) {
          window.__passgenToast(pwd, title, sub);
        }
      },
      args: [password, toastTitle, toastSub, showToast]
    });
  } catch (_) {
    // Korumalı sayfalarda sessiz kal
  }
});
