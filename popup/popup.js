const LANGS = {
  tr: {
    _name: "Türkçe", brand_tagline: "Şifre Üretici",
    tab_btn_gen: "Şifre Üret", tab_btn_hist: "Geçmiş", tab_btn_settings: "Ayarlar",
    pwd_placeholder: "Şifre oluşturmak için Üret'e tıklayın",
    btn_copy_title: "Panoya kopyala", lbl_length: "Uzunluk",
    lbl_char_types: "Karakter Türleri", opt_uppercase: "Büyük Harf (A-Z)",
    opt_lowercase: "Küçük Harf (a-z)", opt_numbers: "Rakamlar (0-9)",
    opt_symbols: "Semboller (!@#$)", btn_generate: "Şifre Üret",
    notice_copied: "Panoya kopyalandı",
    footer_hint: "Sağ tık menüsü bu ayarları kullanır",
    strength_weak: "Zayıf", strength_fair: "Orta",
    strength_strong: "Güçlü", strength_vstrong: "Çok Güçlü",
    lbl_crack_time: "Kırılma süresi", lbl_exclude: "Hariç tut",
    exclude_ph: "Örn: 0O1lI", lbl_history_title: "Son Üretilen Şifreler",
    lbl_clear_history: "Geçmişi Temizle", history_empty: "Henüz kayıtlı bir şifre yok.",
    crack_instant: "Anlık", crack_seconds: "saniye",
    crack_minutes: "dakika", crack_hours: "saat",
    crack_days: "gün", crack_years: "yıl",
    crack_centuries: "yüzyıl+", kbd_hint: "Kısayol",
    lbl_enable_history: "Şifre Geçmişi",
    desc_enable_history: "Üretilen şifreleri yerel geçmiş listesinde sakla.",
    lbl_mask_default: "Şifreleri Varsayılan Olarak Maskele",
    desc_mask_default: "Şifreleri ekranda gizli (••••) olarak göster.",
    lbl_auto_clean: "Otomatik Geçmiş Temizleme",
    desc_auto_clean: "Belirtilen süreden eski şifreleri kendiliğinden temizler.",
    opt_clean_never: "Hiçbir zaman", opt_clean_24h: "24 saat sonra (Günlük)",
    opt_clean_7d: "7 gün sonra (Haftalık)", opt_clean_30d: "30 gün sonra (Aylık)",
    lbl_hist_limit: "Geçmiş Kapasitesi",
    desc_hist_limit: "Geçmişte tutulacak maksimum şifre sayısı.",
    lbl_show_toast: "Kopyalama Bildirimi",
    desc_show_toast: "Şifre üretildiğinde ekranın sağ altında onay kutusu göster.",
    lbl_reset_title: "Ayarları Sıfırla",
    desc_reset: "Tüm ayarları başlangıçtaki fabrika değerlerine döndür.",
    btn_reset: "Varsayılana Sıfırla",
    lbl_support: "Geliştiriciye Destek",
    desc_support: "Eklentiyi beğendiyseniz bir kahve ısmarlayabilirsiniz.",
    btn_coffee: "Kahve Ismarla",
    badge_free: "%100 Ücretsiz",
    btn_crypto: "Monero / Kripto →"
  },
  en: {
    _name: "English", brand_tagline: "Password Generator",
    tab_btn_gen: "Generator", tab_btn_hist: "History", tab_btn_settings: "Settings",
    pwd_placeholder: "Click Generate to create a password",
    btn_copy_title: "Copy to clipboard", lbl_length: "Length",
    lbl_char_types: "Character Types", opt_uppercase: "Uppercase (A-Z)",
    opt_lowercase: "Lowercase (a-z)", opt_numbers: "Numbers (0-9)",
    opt_symbols: "Symbols (!@#$)", btn_generate: "Generate Password",
    notice_copied: "Copied to clipboard",
    footer_hint: "Right-click menu uses these settings",
    strength_weak: "Weak", strength_fair: "Fair",
    strength_strong: "Strong", strength_vstrong: "Very Strong",
    lbl_crack_time: "Crack time", lbl_exclude: "Exclude characters",
    exclude_ph: "e.g. 0O1lI", lbl_history_title: "Recent Passwords",
    lbl_clear_history: "Clear History", history_empty: "No passwords generated yet.",
    crack_instant: "Instantly", crack_seconds: "seconds",
    crack_minutes: "minutes", crack_hours: "hours",
    crack_days: "days", crack_years: "years",
    crack_centuries: "centuries+", kbd_hint: "Shortcut",
    lbl_enable_history: "Password History",
    desc_enable_history: "Keep generated passwords in local history list.",
    lbl_mask_default: "Mask Passwords by Default",
    desc_mask_default: "Hide passwords on screen with dots (••••).",
    lbl_auto_clean: "Auto-clear History",
    desc_auto_clean: "Automatically remove passwords older than selected period.",
    opt_clean_never: "Never", opt_clean_24h: "After 24 hours (Daily)",
    opt_clean_7d: "After 7 days (Weekly)", opt_clean_30d: "After 30 days (Monthly)",
    lbl_hist_limit: "History Limit",
    desc_hist_limit: "Maximum number of passwords kept in history.",
    lbl_show_toast: "Confirmation Toast",
    desc_show_toast: "Display on-screen popup when password is generated.",
    lbl_reset_title: "Reset Settings",
    desc_reset: "Restore all options to their original default values.",
    btn_reset: "Reset to Defaults",
    lbl_support: "Support Developer",
    desc_support: "If you enjoy PassGen, consider buying a coffee.",
    btn_coffee: "Buy Coffee",
    badge_free: "100% Free",
    btn_crypto: "Monero / Crypto →"
  },
  es: {
    _name: "Español", brand_tagline: "Generador de Contraseñas",
    tab_btn_gen: "Generar", tab_btn_hist: "Historial", tab_btn_settings: "Ajustes",
    pwd_placeholder: "Haz clic en Generar para crear una contraseña",
    btn_copy_title: "Copiar al portapapeles", lbl_length: "Longitud",
    lbl_char_types: "Tipos de Caracteres", opt_uppercase: "Mayúsculas (A-Z)",
    opt_lowercase: "Minúsculas (a-z)", opt_numbers: "Números (0-9)",
    opt_symbols: "Símbolos (!@#$)", btn_generate: "Generar Contraseña",
    notice_copied: "Copiado al portapapeles",
    footer_hint: "El menú contextual usa esta configuración",
    strength_weak: "Débil", strength_fair: "Regular",
    strength_strong: "Fuerte", strength_vstrong: "Muy Fuerte",
    lbl_crack_time: "Tiempo de descifrado", lbl_exclude: "Excluir caracteres",
    exclude_ph: "Ej: 0O1lI", lbl_history_title: "Contraseñas Recientes",
    lbl_clear_history: "Borrar Historial", history_empty: "Aún no se han generado contraseñas.",
    crack_instant: "Instantáneo", crack_seconds: "segundos",
    crack_minutes: "minutos", crack_hours: "horas",
    crack_days: "días", crack_years: "años",
    crack_centuries: "siglos+", kbd_hint: "Atajo",
    lbl_enable_history: "Historial de Contraseñas",
    desc_enable_history: "Guardar contraseñas en el historial local.",
    lbl_mask_default: "Enmascarar por defecto",
    desc_mask_default: "Ocultar contraseñas con puntos (••••).",
    lbl_auto_clean: "Limpieza Automática",
    desc_auto_clean: "Eliminar contraseñas con antigüedad superior al período.",
    opt_clean_never: "Nunca", opt_clean_24h: "Tras 24 horas (Diario)",
    opt_clean_7d: "Tras 7 días (Semanal)", opt_clean_30d: "Tras 30 días (Mensual)",
    lbl_hist_limit: "Límite del Historial",
    desc_hist_limit: "Cantidad máxima de contraseñas guardadas.",
    lbl_show_toast: "Notificación Emergente",
    desc_show_toast: "Mostrar aviso en pantalla al generar contraseña.",
    lbl_reset_title: "Restablecer Ajustes",
    desc_reset: "Volver a los valores predeterminados de fábrica.",
    btn_reset: "Restablecer Todo",
    lbl_support: "Apoyar al Desarrollador",
    desc_support: "Si te gusta PassGen, puedes invitarme a un café.",
    btn_coffee: "Comprar Café",
    badge_free: "100% Gratis",
    btn_crypto: "Monero / Cripto →"
  },
  fr: {
    _name: "Français", brand_tagline: "Générateur de Mots de Passe",
    tab_btn_gen: "Générateur", tab_btn_hist: "Historique", tab_btn_settings: "Paramètres",
    pwd_placeholder: "Cliquez sur Générer pour créer un mot de passe",
    btn_copy_title: "Copier dans le presse-papiers", lbl_length: "Longueur",
    lbl_char_types: "Types de Caractères", opt_uppercase: "Majuscules (A-Z)",
    opt_lowercase: "Minuscules (a-z)", opt_numbers: "Chiffres (0-9)",
    opt_symbols: "Symboles (!@#$)", btn_generate: "Générer un Mot de Passe",
    notice_copied: "Copié dans le presse-papiers",
    footer_hint: "Le menu contextuel utilise ces paramètres",
    strength_weak: "Faible", strength_fair: "Moyen",
    strength_strong: "Fort", strength_vstrong: "Très Fort",
    lbl_crack_time: "Temps de déchiffrement", lbl_exclude: "Exclure des caractères",
    exclude_ph: "Ex: 0O1lI", lbl_history_title: "Mots de Passe Récents",
    lbl_clear_history: "Effacer l'historique", history_empty: "Aucun mot de passe généré.",
    crack_instant: "Instantané", crack_seconds: "secondes",
    crack_minutes: "minutes", crack_hours: "heures",
    crack_days: "jours", crack_years: "ans",
    crack_centuries: "siècles+", kbd_hint: "Raccourci",
    lbl_enable_history: "Historique des Mots de Passe",
    desc_enable_history: "Conserver les mots de passe dans l'historique.",
    lbl_mask_default: "Masquer par défaut",
    desc_mask_default: "Masquer avec des points (••••).",
    lbl_auto_clean: "Nettoyage Automatique",
    desc_auto_clean: "Supprimer automatiquement les anciens mots de passe.",
    opt_clean_never: "Jamais", opt_clean_24h: "Après 24 heures (Quotidien)",
    opt_clean_7d: "Après 7 jours (Hebdomadaire)", opt_clean_30d: "Après 30 jours (Mensuel)",
    lbl_hist_limit: "Capacité de l'historique",
    desc_hist_limit: "Nombre maximal de mots de passe conservés.",
    lbl_show_toast: "Notification à l'écran",
    desc_show_toast: "Afficher une confirmation lors de la génération.",
    lbl_reset_title: "Réinitialiser",
    desc_reset: "Restaurer les valeurs d'origine par défaut.",
    btn_reset: "Rétablir par défaut",
    lbl_support: "Soutenir le Développeur",
    desc_support: "Si vous aimez PassGen, offrez-moi un café.",
    btn_coffee: "Offrir un café",
    badge_free: "100% Gratuit",
    btn_crypto: "Monero / Crypto →"
  },
  ru: {
    _name: "Русский", brand_tagline: "Генератор паролей",
    tab_btn_gen: "Генератор", tab_btn_hist: "История", tab_btn_settings: "Настройки",
    pwd_placeholder: "Нажмите «Создать» для генерации пароля",
    btn_copy_title: "Скопировать в буфер обмена", lbl_length: "Длина",
    lbl_char_types: "Типы символов", opt_uppercase: "Заглавные (A-Z)",
    opt_lowercase: "Строчные (a-z)", opt_numbers: "Цифры (0-9)",
    opt_symbols: "Символы (!@#$)", btn_generate: "Создать пароль",
    notice_copied: "Скопировано в буфер обмена",
    footer_hint: "Контекстное меню использует эти настройки",
    strength_weak: "Слабый", strength_fair: "Средний",
    strength_strong: "Сильный", strength_vstrong: "Очень сильный",
    lbl_crack_time: "Время взлома", lbl_exclude: "Исключить символы",
    exclude_ph: "Напр: 0O1lI", lbl_history_title: "История паролей",
    lbl_clear_history: "Очистить историю", history_empty: "История пуста.",
    crack_instant: "Мгновенно", crack_seconds: "секунды",
    crack_minutes: "минуты", crack_hours: "часы",
    crack_days: "дни", crack_years: "годы",
    crack_centuries: "века+", kbd_hint: "Горячая клавиша",
    lbl_enable_history: "История паролей",
    desc_enable_history: "Сохранять пароли в локальном журнале.",
    lbl_mask_default: "Скрывать по умолчанию",
    desc_mask_default: "Скрывать символы точками (••••).",
    lbl_auto_clean: "Автоочистка истории",
    desc_auto_clean: "Автоматически удалять пароли старше выбранного срока.",
    opt_clean_never: "Никогда", opt_clean_24h: "Через 24 часа (Ежедневно)",
    opt_clean_7d: "Через 7 дней (Еженедельно)", opt_clean_30d: "Через 30 дней (Ежемесячно)",
    lbl_hist_limit: "Лимит истории",
    desc_hist_limit: "Максимальное количество паролей в списке.",
    lbl_show_toast: "Всплывающее уведомление",
    desc_show_toast: "Показывать уведомление на экране при генерации.",
    lbl_reset_title: "Сброс настроек",
    desc_reset: "Вернуть все параметры к начальным значениям.",
    btn_reset: "Сбросить настройки",
    lbl_support: "Поддержать автора",
    desc_support: "Если вам нравится PassGen, угостите меня кофе.",
    btn_coffee: "Угостить кофе",
    badge_free: "100% Бесплатно",
    btn_crypto: "Monero / Крипта →"
  },
  zh: {
    _name: "中文", brand_tagline: "密码生成器",
    tab_btn_gen: "生成器", tab_btn_hist: "历史记录", tab_btn_settings: "设置",
    pwd_placeholder: "点击\"生成\"以创建密码",
    btn_copy_title: "复制到剪贴板", lbl_length: "长度",
    lbl_char_types: "字符类型", opt_uppercase: "大写字母 (A-Z)",
    opt_lowercase: "小写字母 (a-z)", opt_numbers: "数字 (0-9)",
    opt_symbols: "符号 (!@#$)", btn_generate: "生成密码",
    notice_copied: "已复制到剪贴板",
    footer_hint: "右键菜单使用这些设置",
    strength_weak: "弱", strength_fair: "一般",
    strength_strong: "强", strength_vstrong: "非常强",
    lbl_crack_time: "破解时间", lbl_exclude: "排除字符",
    exclude_ph: "例: 0O1lI", lbl_history_title: "历史密码",
    lbl_clear_history: "清空历史", history_empty: "暂无生成的密码记录。",
    crack_instant: "瞬间", crack_seconds: "秒",
    crack_minutes: "分钟", crack_hours: "小时",
    crack_days: "天", crack_years: "年",
    crack_centuries: "世纪+", kbd_hint: "快捷键",
    lbl_enable_history: "保存历史记录",
    desc_enable_history: "在本地历史中保存生成的密码。",
    lbl_mask_default: "默认隐藏明文",
    desc_mask_default: "以圆点(••••)遮挡显示密码。",
    lbl_auto_clean: "自动清理历史",
    desc_auto_clean: "自动清除超出指定时限的历史密码。",
    opt_clean_never: "从不", opt_clean_24h: "24小时后 (每天)",
    opt_clean_7d: "7天后 (每周)", opt_clean_30d: "30天后 (每月)",
    lbl_hist_limit: "历史记录数量",
    desc_hist_limit: "保存的最多历史密码条数。",
    lbl_show_toast: "浮动提示",
    desc_show_toast: "生成并复制密码时在屏幕右下角显示提示。",
    lbl_reset_title: "重置所有设置",
    desc_reset: "将所有配置选项恢复为出厂默认值。",
    btn_reset: "恢复默认",
    lbl_support: "支持开发者",
    desc_support: "如果您喜欢 PassGen，请作者喝杯咖啡吧。",
    btn_coffee: "请喝咖啡",
    badge_free: "100% 免费",
    btn_crypto: "门罗币 / 加密货币 →"
  }
};

// ── i18n & Dil Algılama ─────────────────────────────────────────────────────
function detectBrowserLang() {
  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("tr")) return "tr";
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("ru")) return "ru";
  if (nav.startsWith("zh")) return "zh";
  return "en";
}

let currentLang = "en";
let history = [];
function t(key) { return (LANGS[currentLang] || {})[key] || (LANGS.en[key]) || key; }

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const ids = [
    "brand_tagline", "tab_btn_gen", "tab_btn_hist", "tab_btn_settings",
    "lbl_length", "lbl_char_types", "opt_uppercase", "opt_lowercase",
    "opt_numbers", "opt_symbols", "notice_copied", "footer_hint",
    "lbl_crack_time", "lbl_exclude", "lbl_history_title",
    "lbl_enable_history", "desc_enable_history",
    "lbl_mask_default", "desc_mask_default",
    "lbl_auto_clean", "desc_auto_clean", "opt_clean_never", "opt_clean_24h", "opt_clean_7d", "opt_clean_30d",
    "lbl_hist_limit", "desc_hist_limit", "lbl_show_toast", "desc_show_toast",
    "lbl_reset_title", "desc_reset",
    "lbl_support", "desc_support",
    "badge_free", "btn_crypto"
  ];
  ids.forEach(k => {
    const el = document.getElementById(k);
    if (el) el.textContent = t(k);
  });

  const clearBtn = document.getElementById("clearHistoryBtn");
  if (clearBtn) clearBtn.textContent = t("lbl_clear_history");

  const resetBtn = document.getElementById("resetSettingsBtn");
  if (resetBtn) resetBtn.textContent = t("btn_reset");

  const coffeeBtn = document.getElementById("btnCoffee");
  if (coffeeBtn) coffeeBtn.textContent = t("btn_coffee");

  if (elGenBtn) elGenBtn.textContent = t("btn_generate");

  elExclude.placeholder = t("exclude_ph");
  elCopyBtn.title = t("btn_copy_title");
  elPasswordBox.title = t("btn_copy_title");
  elToggleMask.title = t("lbl_mask_default");

  if (elDisplay.classList.contains("empty")) elDisplay.textContent = t("pwd_placeholder");
  if (currentPassword) renderStrength(currentPassword);
  elLangSelect.value = lang;

  const kbdHint = document.getElementById("kbdHint");
  if (kbdHint) kbdHint.innerHTML = t("kbd_hint") + ': <kbd class="kbd">Alt+Shift+G</kbd>';

  renderHistory();
  chrome.storage.sync.set({ lang });
  chrome.runtime.sendMessage({ type: "passgen_lang", lang }).catch(() => {});
}

// ── Şifre Üretici Motoru (CSPRNG Rejection Sampling) ──────────────────────
const CHARSETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};

const DEFAULTS = {
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  exclude: "",
  enableHistory: true,
  maskDefault: false,
  autoClean: "never",
  histLimit: 10,
  showToast: true,
  lang: null
};

function rand(max) {
  if (max <= 1) return 0;
  const limit = Math.floor(0x100000000 / max) * max;
  const a = new Uint32Array(1);
  do {
    crypto.getRandomValues(a);
  } while (a[0] >= limit);
  return a[0] % max;
}

function generate(opts) {
  const excl = new Set((opts.exclude || "").split(""));
  function clean(s) { return s.split("").filter(c => !excl.has(c)).join(""); }
  let pool = "", must = [];
  const U = clean(CHARSETS.uppercase), L = clean(CHARSETS.lowercase),
        N = clean(CHARSETS.numbers),   S = clean(CHARSETS.symbols);
  if (opts.uppercase && U) { pool += U; must.push(U[rand(U.length)]); }
  if (opts.lowercase && L) { pool += L; must.push(L[rand(L.length)]); }
  if (opts.numbers   && N) { pool += N; must.push(N[rand(N.length)]); }
  if (opts.symbols   && S) { pool += S; must.push(S[rand(S.length)]); }

  if (!pool) {
    const fallback = clean(CHARSETS.lowercase + CHARSETS.numbers) || CHARSETS.lowercase;
    pool = fallback;
    must.push(fallback[rand(fallback.length)]);
  }
  const arr = [...must];
  const len = Math.max(opts.length, must.length);
  for (let i = arr.length; i < len; i++) arr.push(pool[rand(pool.length)]);
  for (let i = arr.length - 1; i > 0; i--) { const j = rand(i + 1); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr.join("");
}

function calcCrackTime(pwd, opts) {
  let pool = 0;
  if (opts.uppercase) pool += 26;
  if (opts.lowercase) pool += 26;
  if (opts.numbers)   pool += 10;
  if (opts.symbols)   pool += 30;
  if (pool === 0) pool = 26;
  const guesses = Math.pow(pool, pwd.length);
  const seconds = guesses / 1e10;

  if (seconds < 1)      return t("crack_instant");
  if (seconds < 60)     return Math.round(seconds) + " " + t("crack_seconds");
  if (seconds < 3600)   return Math.round(seconds / 60) + " " + t("crack_minutes");
  if (seconds < 86400)  return Math.round(seconds / 3600) + " " + t("crack_hours");
  if (seconds < 3.15e7) return Math.round(seconds / 86400) + " " + t("crack_days");
  if (seconds < 3.15e9) return Math.round(seconds / 3.15e7) + " " + t("crack_years");
  return t("crack_centuries");
}

function strengthInfo(pwd) {
  let s = 0;
  if (pwd.length >= 8)  s++; if (pwd.length >= 12) s++;
  if (pwd.length >= 16) s++; if (pwd.length >= 24) s++;
  if (/[A-Z]/.test(pwd)) s++; if (/[a-z]/.test(pwd)) s++;
  if (/[0-9]/.test(pwd)) s++; if (/[^A-Za-z0-9]/.test(pwd)) s += 2;
  if (s <= 3) return { key: "strength_weak",   pct: 20,  color: "#ef4444" };
  if (s <= 5) return { key: "strength_fair",   pct: 50,  color: "#f59e0b" };
  if (s <= 7) return { key: "strength_strong", pct: 75,  color: "#10b981" };
  return             { key: "strength_vstrong", pct: 100, color: "#10b981" };
}

// ── Geçmiş Yönetimi (Zaman ve Aç/Kapa Korumalı) ─────────────────────────────
function cleanExpiredHistory(items, autoCleanSetting) {
  if (!Array.isArray(items)) return [];
  const normalized = items.map(item => typeof item === "string" ? { pwd: item, time: Date.now() } : item);
  if (!autoCleanSetting || autoCleanSetting === "never") return normalized;

  const now = Date.now();
  let maxAge = Infinity;
  if (autoCleanSetting === "24h") maxAge = 24 * 3600 * 1000;
  else if (autoCleanSetting === "7d")  maxAge = 7 * 24 * 3600 * 1000;
  else if (autoCleanSetting === "30d") maxAge = 30 * 24 * 3600 * 1000;

  return normalized.filter(item => (now - item.time) <= maxAge);
}

function saveHistory(pwd) {
  if (!elEnableHist.checked) return;

  const limit = parseInt(elHistLimit.value) || 10;
  const newItem = { pwd, time: Date.now() };
  history = [newItem, ...history.filter(p => p.pwd !== pwd)].slice(0, limit);
  chrome.storage.local.set({ passgen_history: history });
  renderHistory();
}

const SVG_EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
const SVG_EYE_SLASH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
const SVG_COPY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';

function renderHistory() {
  const list  = document.getElementById("historyList");
  const empty = document.getElementById("historyEmpty");
  const clearBtn = document.getElementById("clearHistoryBtn");
  if (!list || !empty) return;

  history = cleanExpiredHistory(history, elAutoClean.value);

  if (!history.length || !elEnableHist.checked) {
    empty.style.display = "block";
    empty.textContent = t("history_empty");
    list.style.display = "none";
    if (clearBtn) clearBtn.style.display = "none";
    return;
  }

  empty.style.display = "none";
  list.style.display = "flex";
  if (clearBtn) clearBtn.style.display = "block";
  list.textContent = "";

  history.forEach(item => {
    const pwd = typeof item === "string" ? item : item.pwd;
    const li = document.createElement("li");
    li.className = "history-item";

    const spanPwd = document.createElement("span");
    spanPwd.className = "history-pwd";
    let isRowMasked = elMaskDefault.checked;
    spanPwd.textContent = isRowMasked ? "•".repeat(Math.min(pwd.length, 14)) : pwd;

    const actions = document.createElement("div");
    actions.className = "history-actions";

    const btnEye = document.createElement("button");
    btnEye.className = "history-btn";
    btnEye.title = "Göster/Gizle";
    btnEye.innerHTML = isRowMasked ? SVG_EYE : SVG_EYE_SLASH;
    btnEye.addEventListener("click", (e) => {
      e.stopPropagation();
      isRowMasked = !isRowMasked;
      spanPwd.textContent = isRowMasked ? "•".repeat(Math.min(pwd.length, 14)) : pwd;
      btnEye.innerHTML = isRowMasked ? SVG_EYE : SVG_EYE_SLASH;
    });

    const btnCopy = document.createElement("button");
    btnCopy.className = "history-btn";
    btnCopy.title = t("btn_copy_title");
    btnCopy.innerHTML = SVG_COPY;
    btnCopy.addEventListener("click", (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(pwd).then(() => showNotice());
    });

    actions.appendChild(btnEye);
    actions.appendChild(btnCopy);

    li.appendChild(spanPwd);
    li.appendChild(actions);

    li.addEventListener("click", () => {
      navigator.clipboard.writeText(pwd).then(() => showNotice());
    });
    list.appendChild(li);
  });
}

function showNotice() {
  elNotice.classList.add("visible");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => elNotice.classList.remove("visible"), 2000);
}

// ── DOM Elemanları ──────────────────────────────────────────────────────────
const $       = id => document.getElementById(id);
const elDisplay     = $("passwordDisplay");
const elCopyBtn     = $("copyBtn");
const elGenBtn      = $("generateBtn");
const elToggleMask  = $("toggleMaskBtn");
const elEyeIcon     = $("eyeIcon");
const elSlider      = $("lengthSlider");
const elLenVal      = $("lengthValue");
const elStrFill     = $("strengthFill");
const elStrText     = $("strengthText");
const elCrackRow    = $("crackRow");
const elCrackVal    = $("crackValue");
const elNotice      = $("copyNotice");
const elOptU        = $("opt-uppercase");
const elOptL        = $("opt-lowercase");
const elOptN        = $("opt-numbers");
const elOptS        = $("opt-symbols");
const elLangSelect  = $("langSelect");
const elPasswordBox = $("passwordBox");
const elExclude     = $("excludeInput");

const elEnableHist  = $("enableHistoryToggle");
const elMaskDefault = $("maskDefaultToggle");
const elAutoClean   = $("autoCleanSelect");
const elHistLimit   = $("histLimitSelect");
const elShowToast   = $("showToastToggle");
const elResetBtn    = $("resetSettingsBtn");

let currentPassword = "";
let isMainMasked    = false;
let noticeTimer     = null;
let currentOpts     = {};

function getOpts() {
  return {
    length:        parseInt(elSlider.value),
    uppercase:     elOptU.checked,
    lowercase:     elOptL.checked,
    numbers:       elOptN.checked,
    symbols:       elOptS.checked,
    exclude:       elExclude.value,
    enableHistory: elEnableHist.checked,
    maskDefault:   elMaskDefault.checked,
    autoClean:     elAutoClean.value,
    histLimit:     parseInt(elHistLimit.value) || 10,
    showToast:     elShowToast.checked
  };
}

function saveOpts(opts) {
  chrome.storage.sync.set(opts);
}

function updateDisplayMask() {
  if (!currentPassword) return;
  if (isMainMasked) {
    elDisplay.textContent = "•".repeat(Math.min(currentPassword.length, 20));
    elEyeIcon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
  } else {
    elDisplay.textContent = currentPassword;
    elEyeIcon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
  }
}

function renderStrength(pwd) {
  if (!pwd) {
    elStrFill.style.width = "0"; elStrText.textContent = "\u2014";
    elStrText.style.color = ""; elCrackRow.style.display = "none"; return;
  }
  const s = strengthInfo(pwd);
  elStrFill.style.width = s.pct + "%";
  elStrFill.style.background = s.color;
  elStrText.textContent = t(s.key);
  elStrText.style.color = s.color;
  elCrackRow.style.display = "flex";
  elCrackVal.textContent = calcCrackTime(pwd, currentOpts);
}

function render(pwd) {
  currentPassword = pwd;
  elDisplay.classList.remove("empty");
  updateDisplayMask();
  renderStrength(pwd);
}

function copyPwd() {
  if (!currentPassword) return;
  navigator.clipboard.writeText(currentPassword).then(() => {
    showNotice();
    if (elPasswordBox) {
      elPasswordBox.classList.add("copied");
      setTimeout(() => elPasswordBox.classList.remove("copied"), 400);
    }
  });
}

function previewGenerate() {
  currentOpts = getOpts();
  const pwd = generate(currentOpts);
  render(pwd);
}

function doGenerate() {
  currentOpts = getOpts();
  const pwd = generate(currentOpts);
  render(pwd);
  saveOpts(currentOpts);
  saveHistory(pwd);
}

// ── Tab Navigasyonu ─────────────────────────────────────────────────────────
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    const targetId = btn.getAttribute("data-tab");
    const targetPane = document.getElementById(targetId);
    if (targetPane) targetPane.classList.add("active");
  });
});

// ── Olay Dinleyicileri ──────────────────────────────────────────────────────
elGenBtn.addEventListener("click", doGenerate);
elDisplay.addEventListener("click", copyPwd);
elCopyBtn.addEventListener("click", copyPwd);

elToggleMask.addEventListener("click", (e) => {
  e.stopPropagation();
  isMainMasked = !isMainMasked;
  updateDisplayMask();
});

elSlider.addEventListener("input", () => {
  elLenVal.textContent = elSlider.value;
  if (currentPassword) previewGenerate();
});
elSlider.addEventListener("change", () => {
  if (currentPassword) doGenerate();
});

[elOptU, elOptL, elOptN, elOptS].forEach(el => {
  if (el) el.addEventListener("change", () => { if (currentPassword) doGenerate(); });
});
elLangSelect.addEventListener("change", () => applyLang(elLangSelect.value));

let excludeDebounce = null;
elExclude.addEventListener("input", () => {
  if (currentPassword) {
    previewGenerate();
    clearTimeout(excludeDebounce);
    excludeDebounce = setTimeout(() => {
      saveOpts(getOpts());
    }, 300);
  }
});

elAutoClean.addEventListener("change", () => {
  saveOpts(getOpts());
  renderHistory();
});
elHistLimit.addEventListener("change", () => {
  const limit = parseInt(elHistLimit.value) || 10;
  history = history.slice(0, limit);
  chrome.storage.local.set({ passgen_history: history });
  saveOpts(getOpts());
  renderHistory();
});
elShowToast.addEventListener("change", () => saveOpts(getOpts()));
elEnableHist.addEventListener("change", () => {
  if (!elEnableHist.checked) {
    history = [];
    chrome.storage.local.remove("passgen_history");
  }
  saveOpts(getOpts());
  renderHistory();
});
elMaskDefault.addEventListener("change", () => {
  isMainMasked = elMaskDefault.checked;
  updateDisplayMask();
  saveOpts(getOpts());
  renderHistory();
});

elResetBtn.addEventListener("click", () => {
  elSlider.value = DEFAULTS.length;
  elLenVal.textContent = DEFAULTS.length;
  elOptU.checked = DEFAULTS.uppercase;
  elOptL.checked = DEFAULTS.lowercase;
  elOptN.checked = DEFAULTS.numbers;
  elOptS.checked = DEFAULTS.symbols;
  elExclude.value = DEFAULTS.exclude;
  elEnableHist.checked = DEFAULTS.enableHistory;
  elMaskDefault.checked = DEFAULTS.maskDefault;
  elAutoClean.value = DEFAULTS.autoClean;
  elHistLimit.value = DEFAULTS.histLimit;
  elShowToast.checked = DEFAULTS.showToast;
  isMainMasked = DEFAULTS.maskDefault;

  saveOpts(getOpts());
  doGenerate();
});

$("clearHistoryBtn").addEventListener("click", () => {
  history = [];
  chrome.storage.local.remove("passgen_history");
  renderHistory();
});

// Popup Klavye Kısayolları (Space/Enter: Yeniden Üret, C: Kopyala)
document.addEventListener("keydown", (e) => {
  const tag = e.target ? e.target.tagName : "";
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    doGenerate();
  } else if (e.key === "c" || e.key === "C") {
    e.preventDefault();
    copyPwd();
  }
});

(function addKbdHint() {
  const hint = document.createElement("div");
  hint.className = "kbd-hint";
  hint.id = "kbdHint";
  const actionSection = document.querySelector(".action-section");
  if (actionSection) actionSection.parentNode.insertBefore(hint, actionSection);
})();

// ── Başlatma ─────────────────────────────────────────────────────────────────
chrome.storage.sync.get(DEFAULTS, stored => {
  const lang = stored.lang || detectBrowserLang();

  elSlider.value = stored.length;
  elLenVal.textContent = stored.length;

  elOptU.checked = stored.uppercase;
  elOptL.checked = stored.lowercase;
  elOptN.checked = stored.numbers;
  elOptS.checked = stored.symbols;
  elExclude.value = stored.exclude || "";

  elEnableHist.checked = stored.enableHistory !== undefined ? stored.enableHistory : true;
  elMaskDefault.checked = stored.maskDefault !== undefined ? stored.maskDefault : false;
  isMainMasked = elMaskDefault.checked;

  elAutoClean.value = stored.autoClean || "never";
  elHistLimit.value = stored.histLimit || 10;
  elShowToast.checked = stored.showToast !== undefined ? stored.showToast : true;

  applyLang(lang);
  elDisplay.textContent = t("pwd_placeholder");
  elDisplay.classList.add("empty");

  if (elEnableHist.checked) {
    chrome.storage.local.get({ passgen_history: [] }, local => {
      history = cleanExpiredHistory(local.passgen_history || [], stored.autoClean);
      chrome.storage.local.set({ passgen_history: history });
      renderHistory();
    });
  } else {
    renderHistory();
  }

  doGenerate();
});
