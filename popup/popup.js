// ── 6 Dilli Çeviri Tablosu ──────────────────────────────────────────────────
const LANGS = {
  tr: {
    _name:"Türkçe", brand_tagline:"Şifre Üretici",
    tab_btn_gen:"Şifre Üret", tab_btn_hist:"Geçmiş", tab_btn_settings:"Ayarlar", tab_btn_priv:"Gizlilik",
    pwd_placeholder:"Şifre oluşturmak için Üret'e tıklayın",
    btn_copy_title:"Panoya kopyala", lbl_length:"Uzunluk",
    lbl_char_types:"Karakter Türleri", opt_uppercase:"Büyük Harf (A-Z)",
    opt_lowercase:"Küçük Harf (a-z)", opt_numbers:"Rakamlar (0-9)",
    opt_symbols:"Semboller (!@#$)", btn_generate:"Şifre Üret",
    notice_copied:"Panoya kopyalandı",
    footer_hint:"Sağ tık menüsü bu ayarları kullanır",
    strength_weak:"Zayıf", strength_fair:"Orta",
    strength_strong:"Güçlü", strength_vstrong:"Çok Güçlü",
    lbl_crack_time:"Kırılma süresi", lbl_exclude:"Hariç tut",
    exclude_ph:"Örn: 0O1lI", lbl_history_title:"Son Üretilen Şifreler",
    lbl_clear_history:"Geçmişi Temizle", history_empty:"Henüz kayıtlı bir şifre yok.",
    crack_instant:"Anlık", crack_seconds:"saniye",
    crack_minutes:"dakika", crack_hours:"saat",
    crack_days:"gün", crack_years:"yıl",
    crack_centuries:"yüzyıl+", kbd_hint:"Kısayol",
    lbl_auto_clean:"Otomatik Geçmiş Temizleme",
    desc_auto_clean:"Belirtilen süreden eski şifreleri kendiliğinden temizler.",
    opt_clean_never:"Hiçbir zaman", opt_clean_24h:"24 saat sonra (Günlük)",
    opt_clean_7d:"7 gün sonra (Haftalık)", opt_clean_30d:"30 gün sonra (Aylık)",
    lbl_hist_limit:"Geçmiş Kapasitesi",
    desc_hist_limit:"Geçmişte tutulacak maksimum şifre sayısı.",
    lbl_show_toast:"Kopyalama Bildirimi",
    desc_show_toast:"Şifre üretildiğinde ekranın sağ altında onay kutusu göster.",
    lbl_reset_title:"Ayarları Sıfırla",
    desc_reset:"Tüm ayarları başlangıçtaki fabrika değerlerine döndür.",
    btn_reset:"Varsayılana Sıfırla",
    priv_badge:"%100 Çevrimdışı & Güvenli",
    priv_title:"Gizlilik Politikası",
    priv_p1:"PassGen, gizliliğinize en üst düzeyde saygı duyar. Tüm şifreler yalnızca kendi tarayıcınızda üretilir.",
    priv_f1:"Sıfır veri toplama: Hiçbir bilginiz kaydedilmez veya izlenmez.",
    priv_f2:"Sunucu bağlantısı yok: Eklenti tamamen çevrimdışı çalışır.",
    priv_f3:"Kriptografik güvenlik: Tarayıcının yerel crypto motoru kullanılır.",
    priv_f4:"Yerel depolama: Geçmiş ve ayarlar yalnızca kendi cihazınızda kalır.",
    priv_note:"Bu eklenti açık kaynak kodlu ve tamamen ücretsizdir."
  },
  en: {
    _name:"English", brand_tagline:"Password Generator",
    tab_btn_gen:"Generator", tab_btn_hist:"History", tab_btn_settings:"Settings", tab_btn_priv:"Privacy",
    pwd_placeholder:"Click Generate to create a password",
    btn_copy_title:"Copy to clipboard", lbl_length:"Length",
    lbl_char_types:"Character Types", opt_uppercase:"Uppercase (A-Z)",
    opt_lowercase:"Lowercase (a-z)", opt_numbers:"Numbers (0-9)",
    opt_symbols:"Symbols (!@#$)", btn_generate:"Generate Password",
    notice_copied:"Copied to clipboard",
    footer_hint:"Right-click menu uses these settings",
    strength_weak:"Weak", strength_fair:"Fair",
    strength_strong:"Strong", strength_vstrong:"Very Strong",
    lbl_crack_time:"Crack time", lbl_exclude:"Exclude characters",
    exclude_ph:"e.g. 0O1lI", lbl_history_title:"Recent Passwords",
    lbl_clear_history:"Clear History", history_empty:"No passwords generated yet.",
    crack_instant:"Instantly", crack_seconds:"seconds",
    crack_minutes:"minutes", crack_hours:"hours",
    crack_days:"days", crack_years:"years",
    crack_centuries:"centuries+", kbd_hint:"Shortcut",
    lbl_auto_clean:"Auto-clear History",
    desc_auto_clean:"Automatically remove passwords older than selected period.",
    opt_clean_never:"Never", opt_clean_24h:"After 24 hours (Daily)",
    opt_clean_7d:"After 7 days (Weekly)", opt_clean_30d:"After 30 days (Monthly)",
    lbl_hist_limit:"History Limit",
    desc_hist_limit:"Maximum number of passwords kept in history.",
    lbl_show_toast:"Confirmation Toast",
    desc_show_toast:"Display on-screen popup when password is generated.",
    lbl_reset_title:"Reset Settings",
    desc_reset:"Restore all options to their original default values.",
    btn_reset:"Reset to Defaults",
    priv_badge:"100% Offline & Private",
    priv_title:"Privacy Policy",
    priv_p1:"PassGen is committed to your privacy. Passwords are generated exclusively on your local device.",
    priv_f1:"Zero telemetry: No tracking, no analytics, no logging.",
    priv_f2:"No server connection: Operates fully offline without external calls.",
    priv_f3:"Cryptographic engine: Powered by browser's native crypto API.",
    priv_f4:"Local-only storage: History and settings never leave your device.",
    priv_note:"This extension is free, open-source, and privacy-first."
  },
  es: {
    _name:"Español", brand_tagline:"Generador de Contraseñas",
    tab_btn_gen:"Generar", tab_btn_hist:"Historial", tab_btn_settings:"Ajustes", tab_btn_priv:"Privacidad",
    pwd_placeholder:"Haz clic en Generar para crear una contraseña",
    btn_copy_title:"Copiar al portapapeles", lbl_length:"Longitud",
    lbl_char_types:"Tipos de Caracteres", opt_uppercase:"Mayúsculas (A-Z)",
    opt_lowercase:"Minúsculas (a-z)", opt_numbers:"Números (0-9)",
    opt_symbols:"Símbolos (!@#$)", btn_generate:"Generar Contraseña",
    notice_copied:"Copiado al portapapeles",
    footer_hint:"El menú contextual usa esta configuración",
    strength_weak:"Débil", strength_fair:"Regular",
    strength_strong:"Fuerte", strength_vstrong:"Muy Fuerte",
    lbl_crack_time:"Tiempo de descifrado", lbl_exclude:"Excluir caracteres",
    exclude_ph:"Ej: 0O1lI", lbl_history_title:"Contraseñas Recientes",
    lbl_clear_history:"Borrar Historial", history_empty:"Aún no se han generado contraseñas.",
    crack_instant:"Instantáneo", crack_seconds:"segundos",
    crack_minutes:"minutos", crack_hours:"horas",
    crack_days:"días", crack_years:"años",
    crack_centuries:"siglos+", kbd_hint:"Atajo",
    lbl_auto_clean:"Limpieza Automática",
    desc_auto_clean:"Eliminar contraseñas con antigüedad superior al período.",
    opt_clean_never:"Nunca", opt_clean_24h:"Tras 24 horas (Diario)",
    opt_clean_7d:"Tras 7 días (Semanal)", opt_clean_30d:"Tras 30 días (Mensual)",
    lbl_hist_limit:"Límite del Historial",
    desc_hist_limit:"Cantidad máxima de contraseñas guardadas.",
    lbl_show_toast:"Notificación Emergente",
    desc_show_toast:"Mostrar aviso en pantalla al generar contraseña.",
    lbl_reset_title:"Restablecer Ajustes",
    desc_reset:"Volver a los valores predeterminados de fábrica.",
    btn_reset:"Restablecer Todo",
    priv_badge:"100% Fuera de Línea",
    priv_title:"Política de Privacidad",
    priv_p1:"PassGen respeta su privacidad. Todo se genera exclusivamente en su navegador.",
    priv_f1:"Cero recopilación de datos: Nada se envía ni se rastrea.",
    priv_f2:"Sin servidores externos: Funciona completamente sin conexión.",
    priv_f3:"Seguridad criptográfica nativa del navegador.",
    priv_f4:"Almacenamiento 100% local en su dispositivo.",
    priv_note:"Extensión gratuita y de código abierto."
  },
  fr: {
    _name:"Français", brand_tagline:"Générateur de Mots de Passe",
    tab_btn_gen:"Générateur", tab_btn_hist:"Historique", tab_btn_settings:"Paramètres", tab_btn_priv:"Confidentialité",
    pwd_placeholder:"Cliquez sur Générer pour créer un mot de passe",
    btn_copy_title:"Copier dans le presse-papiers", lbl_length:"Longueur",
    lbl_char_types:"Types de Caractères", opt_uppercase:"Majuscules (A-Z)",
    opt_lowercase:"Minuscules (a-z)", opt_numbers:"Chiffres (0-9)",
    opt_symbols:"Symboles (!@#$)", btn_generate:"Générer un Mot de Passe",
    notice_copied:"Copié dans le presse-papiers",
    footer_hint:"Le menu contextuel utilise ces paramètres",
    strength_weak:"Faible", strength_fair:"Moyen",
    strength_strong:"Fort", strength_vstrong:"Très Fort",
    lbl_crack_time:"Temps de déchiffrement", lbl_exclude:"Exclure des caractères",
    exclude_ph:"Ex: 0O1lI", lbl_history_title:"Mots de Passe Récents",
    lbl_clear_history:"Effacer l'historique", history_empty:"Aucun mot de passe généré.",
    crack_instant:"Instantané", crack_seconds:"secondes",
    crack_minutes:"minutes", crack_hours:"heures",
    crack_days:"jours", crack_years:"ans",
    crack_centuries:"siècles+", kbd_hint:"Raccourci",
    lbl_auto_clean:"Nettoyage Automatique",
    desc_auto_clean:"Supprimer automatiquement les anciens mots de passe.",
    opt_clean_never:"Jamais", opt_clean_24h:"Après 24 heures (Quotidien)",
    opt_clean_7d:"Après 7 jours (Hebdomadaire)", opt_clean_30d:"Après 30 jours (Mensuel)",
    lbl_hist_limit:"Capacité de l'historique",
    desc_hist_limit:"Nombre maximal de mots de passe conservés.",
    lbl_show_toast:"Notification à l'écran",
    desc_show_toast:"Afficher une confirmation lors de la génération.",
    lbl_reset_title:"Réinitialiser",
    desc_reset:"Restaurer les valeurs d'origine par défaut.",
    btn_reset:"Rétablir par défaut",
    priv_badge:"100% Hors Ligne & Privé",
    priv_title:"Politique de Confidentialité",
    priv_p1:"PassGen protège votre vie privée. Tout est généré localement sur votre appareil.",
    priv_f1:"Zéro collecte de données et aucun suivi.",
    priv_f2:"Aucune connexion à un serveur distant.",
    priv_f3:"Chiffrement cryptographique natif et sécurisé.",
    priv_f4:"Données stockées uniquement sur votre appareil.",
    priv_note:"Extension gratuite et open-source."
  },
  ru: {
    _name:"Русский", brand_tagline:"Генератор паролей",
    tab_btn_gen:"Генератор", tab_btn_hist:"История", tab_btn_settings:"Настройки", tab_btn_priv:"Конфиденциальность",
    pwd_placeholder:"Нажмите «Создать» для генерации пароля",
    btn_copy_title:"Скопировать в буфер обмена", lbl_length:"Длина",
    lbl_char_types:"Типы символов", opt_uppercase:"Заглавные (A-Z)",
    opt_lowercase:"Строчные (a-z)", opt_numbers:"Цифры (0-9)",
    opt_symbols:"Символы (!@#$)", btn_generate:"Создать пароль",
    notice_copied:"Скопировано в буфер обмена",
    footer_hint:"Контекстное меню использует эти настройки",
    strength_weak:"Слабый", strength_fair:"Средний",
    strength_strong:"Сильный", strength_vstrong:"Очень сильный",
    lbl_crack_time:"Время взлома", lbl_exclude:"Исключить символы",
    exclude_ph:"Напр: 0O1lI", lbl_history_title:"История паролей",
    lbl_clear_history:"Очистить историю", history_empty:"История пуста.",
    crack_instant:"Мгновенно", crack_seconds:"секунды",
    crack_minutes:"минуты", crack_hours:"часы",
    crack_days:"дни", crack_years:"годы",
    crack_centuries:"века+", kbd_hint:"Горячая клавиша",
    lbl_auto_clean:"Автоочистка истории",
    desc_auto_clean:"Автоматически удалять пароли старше выбранного срока.",
    opt_clean_never:"Никогда", opt_clean_24h:"Через 24 часа (Ежедневно)",
    opt_clean_7d:"Через 7 дней (Еженедельно)", opt_clean_30d:"Через 30 дней (Ежемесячно)",
    lbl_hist_limit:"Лимит истории",
    desc_hist_limit:"Максимальное количество паролей в списке.",
    lbl_show_toast:"Всплывающее уведомление",
    desc_show_toast:"Показывать уведомление на экране при генерации.",
    lbl_reset_title:"Сброс настроек",
    desc_reset:"Вернуть все параметры к начальным значениям.",
    btn_reset:"Сбросить настройки",
    priv_badge:"100% Офлайн и безопасно",
    priv_title:"Политика конфиденциальности",
    priv_p1:"PassGen уважает вашу конфиденциальность. Пароли генерируются локально.",
    priv_f1:"Сбор данных отключен: мы ничего не отслеживаем.",
    priv_f2:"Никаких внешних серверов: полная работа офлайн.",
    priv_f3:"Криптографическая безопасность встроенного API.",
    priv_f4:"История хранится только на вашем устройстве.",
    priv_note:"Бесплатное расширение с открытым исходным кодом."
  },
  zh: {
    _name:"中文", brand_tagline:"密码生成器",
    tab_btn_gen:"生成器", tab_btn_hist:"历史记录", tab_btn_settings:"设置", tab_btn_priv:"隐私政策",
    pwd_placeholder:"点击\"生成\"以创建密码",
    btn_copy_title:"复制到剪贴板", lbl_length:"长度",
    lbl_char_types:"字符类型", opt_uppercase:"大写字母 (A-Z)",
    opt_lowercase:"小写字母 (a-z)", opt_numbers:"数字 (0-9)",
    opt_symbols:"符号 (!@#$)", btn_generate:"生成密码",
    notice_copied:"已复制到剪贴板",
    footer_hint:"右键菜单使用这些设置",
    strength_weak:"弱", strength_fair:"一般",
    strength_strong:"强", strength_vstrong:"非常强",
    lbl_crack_time:"破解时间", lbl_exclude:"排除字符",
    exclude_ph:"例: 0O1lI", lbl_history_title:"历史密码",
    lbl_clear_history:"清空历史", history_empty:"暂无生成的密码记录。",
    crack_instant:"瞬间", crack_seconds:"秒",
    crack_minutes:"分钟", crack_hours:"小时",
    crack_days:"天", crack_years:"年",
    crack_centuries:"世纪+", kbd_hint:"快捷键",
    lbl_auto_clean:"自动清理历史",
    desc_auto_clean:"自动清除超出指定时限的历史密码。",
    opt_clean_never:"从不", opt_clean_24h:"24小时后 (每天)",
    opt_clean_7d:"7天后 (每周)", opt_clean_30d:"30天后 (每月)",
    lbl_hist_limit:"历史记录数量",
    desc_hist_limit:"保存的最多历史密码条数。",
    lbl_show_toast:"浮动提示",
    desc_show_toast:"生成并复制密码时在屏幕右下角显示提示。",
    lbl_reset_title:"重置所有设置",
    desc_reset:"将所有配置选项恢复为出厂默认值。",
    btn_reset:"恢复默认",
    priv_badge:"100% 离线与隐私保护",
    priv_title:"隐私政策",
    priv_p1:"PassGen 高度重视您的隐私。所有密码均仅在本地浏览器端生成。",
    priv_f1:"零数据收集：无追踪、无分析、无日志。",
    priv_f2:"无需网络：全离线运行，不连接外部服务器。",
    priv_f3:"原生安全密码学随机算法。",
    priv_f4:"所有配置与历史记录仅保存在本地设备上。",
    priv_note:"本扩展完全免费且开源。"
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
function t(key) { return (LANGS[currentLang]||{})[key] || (LANGS.en[key]) || key; }

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const ids = [
    "brand_tagline", "tab_btn_gen", "tab_btn_hist", "tab_btn_settings", "tab_btn_priv",
    "lbl_length", "lbl_char_types", "opt_uppercase", "opt_lowercase",
    "opt_numbers", "opt_symbols", "btn_generate", "notice_copied", "footer_hint",
    "lbl_crack_time", "lbl_exclude", "lbl_history_title",
    "lbl_auto_clean", "desc_auto_clean", "opt_clean_never", "opt_clean_24h", "opt_clean_7d", "opt_clean_30d",
    "lbl_hist_limit", "desc_hist_limit", "lbl_show_toast", "desc_show_toast",
    "lbl_reset_title", "desc_reset",
    "priv_badge", "priv_title", "priv_p1",
    "priv_f1", "priv_f2", "priv_f3", "priv_f4", "priv_note"
  ];
  ids.forEach(k => {
    const el = document.getElementById(k);
    if (el) el.textContent = t(k);
  });

  const clearBtn = document.getElementById("clearHistoryBtn");
  if (clearBtn) clearBtn.textContent = t("lbl_clear_history");

  const resetBtn = document.getElementById("resetSettingsBtn");
  if (resetBtn) resetBtn.textContent = t("btn_reset");

  if (elGenBtn) elGenBtn.textContent = t("btn_generate");

  elExclude.placeholder = t("exclude_ph");
  elCopyBtn.title = t("btn_copy_title");
  elPasswordBox.title = t("btn_copy_title");
  if (elDisplay.classList.contains("empty")) elDisplay.textContent = t("pwd_placeholder");
  if (currentPassword) renderStrength(currentPassword);
  elLangSelect.value = lang;

  const kbdHint = document.getElementById("kbdHint");
  if (kbdHint) kbdHint.innerHTML = t("kbd_hint") + ': <kbd class="kbd">Alt+Shift+G</kbd>';

  renderHistory();
  chrome.storage.sync.set({ lang });
  chrome.runtime.sendMessage({ type: "passgen_lang", lang }).catch(()=>{});
}

// ── Şifre Üretici Motoru ────────────────────────────────────────────────────
const CHARSETS = {
  uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase:"abcdefghijklmnopqrstuvwxyz",
  numbers:"0123456789",
  symbols:"!@#$%^&*()_+-=[]{}|;:,.<>?"
};
const DEFAULTS = {
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  exclude: "",
  lang: null,
  autoClean: "never",
  histLimit: 10,
  showToast: true
};

function rand(max) {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return a[0] % max;
}

function generate(opts) {
  const excl = new Set((opts.exclude||"").split(""));
  function clean(s) { return s.split("").filter(c=>!excl.has(c)).join(""); }
  let pool="", must=[];
  const U=clean(CHARSETS.uppercase), L=clean(CHARSETS.lowercase),
        N=clean(CHARSETS.numbers),   S=clean(CHARSETS.symbols);
  if (opts.uppercase && U) { pool+=U; must.push(U[rand(U.length)]); }
  if (opts.lowercase && L) { pool+=L; must.push(L[rand(L.length)]); }
  if (opts.numbers   && N) { pool+=N; must.push(N[rand(N.length)]); }
  if (opts.symbols   && S) { pool+=S; must.push(S[rand(S.length)]); }
  
  if (!pool) {
    const fallback = clean(CHARSETS.lowercase + CHARSETS.numbers) || CHARSETS.lowercase;
    pool = fallback;
    must.push(fallback[rand(fallback.length)]);
  }
  const arr=[...must];
  const len=Math.max(opts.length, must.length);
  for (let i=arr.length;i<len;i++) arr.push(pool[rand(pool.length)]);
  for (let i=arr.length-1;i>0;i--) { const j=rand(i+1); [arr[i],arr[j]]=[arr[j],arr[i]]; }
  return arr.join("");
}

// ── Kırılma Süresi Hesaplama ────────────────────────────────────────────────
function calcCrackTime(pwd, opts) {
  let pool=0;
  if (opts.uppercase) pool+=26;
  if (opts.lowercase) pool+=26;
  if (opts.numbers)   pool+=10;
  if (opts.symbols)   pool+=30;
  if (pool===0) pool=26;
  const guesses = Math.pow(pool, pwd.length);
  const seconds = guesses / 1e10;
  if (seconds < 1)      return t("crack_instant");
  if (seconds < 60)     return Math.round(seconds) + " " + t("crack_seconds");
  if (seconds < 3600)   return Math.round(seconds/60) + " " + t("crack_minutes");
  if (seconds < 86400)  return Math.round(seconds/3600) + " " + t("crack_hours");
  if (seconds < 3.15e7) return Math.round(seconds/86400) + " " + t("crack_days");
  if (seconds < 3.15e9) return Math.round(seconds/3.15e7) + " " + t("crack_years");
  return t("crack_centuries");
}

function strengthInfo(pwd) {
  let s=0;
  if (pwd.length>=8)  s++; if (pwd.length>=12) s++;
  if (pwd.length>=16) s++; if (pwd.length>=24) s++;
  if (/[A-Z]/.test(pwd)) s++; if (/[a-z]/.test(pwd)) s++;
  if (/[0-9]/.test(pwd)) s++; if (/[^A-Za-z0-9]/.test(pwd)) s+=2;
  if (s<=3) return {key:"strength_weak",   pct:20, color:"#ef4444"};
  if (s<=5) return {key:"strength_fair",   pct:50, color:"#f59e0b"};
  if (s<=7) return {key:"strength_strong", pct:75, color:"#10b981"};
  return     {key:"strength_vstrong",pct:100,color:"#10b981"};
}

// ── Gelişmiş Geçmiş Yönetimi (Zaman Bazlı Otomatik Temizleme) ───────────────
let history = []; // Elemanlar: { pwd: "...", time: 17264... }

function cleanExpiredHistory(items, autoCleanSetting) {
  if (!Array.isArray(items)) return [];
  // Geriye dönük uyumluluk: Eğer düz string dizisi ise objeye çevir
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
  const limit = parseInt(elHistLimit.value) || 10;
  const newItem = { pwd, time: Date.now() };
  history = [newItem, ...history.filter(p => p.pwd !== pwd)].slice(0, limit);
  chrome.storage.local.set({ passgen_history: history });
  renderHistory();
}

function renderHistory() {
  const list  = document.getElementById("historyList");
  const empty = document.getElementById("historyEmpty");
  const clearBtn = document.getElementById("clearHistoryBtn");
  if (!list || !empty) return;

  // Otomatik temizleme filtresinden geçir
  history = cleanExpiredHistory(history, elAutoClean.value);

  if (!history.length) {
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
    li.title = t("btn_copy_title");

    const spanPwd = document.createElement("span");
    spanPwd.className = "history-pwd";
    spanPwd.textContent = pwd;

    const spanCopy = document.createElement("span");
    spanCopy.className = "history-copy";
    spanCopy.textContent = "\u2398";

    li.appendChild(spanPwd);
    li.appendChild(spanCopy);

    li.addEventListener("click", () => {
      navigator.clipboard.writeText(pwd).then(() => showNotice());
    });
    list.appendChild(li);
  });
}

function showNotice() {
  elNotice.classList.add("visible");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(()=>elNotice.classList.remove("visible"), 2000);
}

// ── DOM Elemanları ──────────────────────────────────────────────────────────
const $       = id => document.getElementById(id);
const elDisplay     = $("passwordDisplay");
const elCopyBtn     = $("copyBtn");
const elGenBtn      = $("generateBtn");
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

// Ayarlar sekmesi elemanları
const elAutoClean   = $("autoCleanSelect");
const elHistLimit   = $("histLimitSelect");
const elShowToast   = $("showToastToggle");
const elResetBtn    = $("resetSettingsBtn");

let currentPassword = "";
let noticeTimer = null;
let currentOpts = {};

function getOpts() {
  return {
    length:    parseInt(elSlider.value),
    uppercase: elOptU.checked,
    lowercase: elOptL.checked,
    numbers:   elOptN.checked,
    symbols:   elOptS.checked,
    exclude:   elExclude.value,
    autoClean: elAutoClean.value,
    histLimit: parseInt(elHistLimit.value) || 10,
    showToast: elShowToast.checked
  };
}

function saveOpts(opts) {
  chrome.storage.sync.set(opts);
}

function renderStrength(pwd) {
  if (!pwd) {
    elStrFill.style.width="0"; elStrText.textContent="\u2014";
    elStrText.style.color=""; elCrackRow.style.display="none"; return;
  }
  const s=strengthInfo(pwd);
  elStrFill.style.width=s.pct+"%"; elStrFill.style.background=s.color;
  elStrText.textContent=t(s.key); elStrText.style.color=s.color;
  elCrackRow.style.display="flex";
  elCrackVal.textContent=calcCrackTime(pwd, currentOpts);
}

function render(pwd) {
  currentPassword=pwd;
  elDisplay.textContent=pwd; elDisplay.classList.remove("empty");
  renderStrength(pwd);
}

function copyPwd() {
  if (!currentPassword) return;
  navigator.clipboard.writeText(currentPassword).then(showNotice);
}

function doGenerate() {
  currentOpts=getOpts();
  const pwd=generate(currentOpts);
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
elSlider.addEventListener("input", ()=>{ elLenVal.textContent=elSlider.value; if(currentPassword) doGenerate(); });
[elOptU,elOptL,elOptN,elOptS].forEach(el=>el.addEventListener("change",()=>{ if(currentPassword) doGenerate(); }));
elLangSelect.addEventListener("change", ()=>applyLang(elLangSelect.value));
elExclude.addEventListener("input", ()=>{ if(currentPassword) doGenerate(); });

// Ayarlar sekmesi olayları
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
elShowToast.addEventListener("change", () => {
  saveOpts(getOpts());
});

// Sıfırlama Butonu
elResetBtn.addEventListener("click", () => {
  elSlider.value = DEFAULTS.length;
  elLenVal.textContent = DEFAULTS.length;
  elOptU.checked = DEFAULTS.uppercase;
  elOptL.checked = DEFAULTS.lowercase;
  elOptN.checked = DEFAULTS.numbers;
  elOptS.checked = DEFAULTS.symbols;
  elExclude.value = DEFAULTS.exclude;
  elAutoClean.value = DEFAULTS.autoClean;
  elHistLimit.value = DEFAULTS.histLimit;
  elShowToast.checked = DEFAULTS.showToast;
  
  saveOpts(getOpts());
  doGenerate();
});

$("clearHistoryBtn").addEventListener("click", ()=>{
  history=[];
  chrome.storage.local.remove("passgen_history");
  renderHistory();
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
  elAutoClean.value = stored.autoClean || "never";
  elHistLimit.value = stored.histLimit || 10;
  elShowToast.checked = stored.showToast !== undefined ? stored.showToast : true;

  applyLang(lang);
  elDisplay.textContent = t("pwd_placeholder");
  elDisplay.classList.add("empty");

  chrome.storage.local.get({ passgen_history:[] }, local => {
    history = cleanExpiredHistory(local.passgen_history || [], stored.autoClean);
    chrome.storage.local.set({ passgen_history: history });
    renderHistory();
  });

  doGenerate();
});