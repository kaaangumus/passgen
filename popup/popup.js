const WORDS_EN = [
  "falcon","sunset","river","orbit","galaxy","breeze","summit","echo","timber",
  "shadow","spark","frost","crystal","island","anchor","meadow","harbor","beacon",
  "thunder","glacier","velvet","voyage","lantern","prairie","silver","canyon",
  "compass","horizon","zenith","quantum","phoenix","nebula","aurora","cascade"
];
const WORDS_TR = [
  "kartal","ruzgar","nehir","gunes","yildiz","orman","zirve","bulut","deniz",
  "toprak","simsek","kristal","ada","liman","fener","vadi","bahar","yagmur",
  "pusula","ufuk","ates","golge","dalga","kaplan","geyik","kus"
];

const LANGS = {
  tr: {
    _name:"Türkçe", brand_tagline:"Şifre Üretici",
    tab_btn_gen:"Şifre Üret", tab_btn_hist:"Geçmiş", tab_btn_settings:"Ayarlar", tab_btn_priv:"Gizlilik",
    mode_random:"Rastgele", mode_passphrase:"Kelime", mode_pin:"PIN",
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
    lbl_words_count:"Kelime Sayısı", lbl_separator:"Ayırıcı Karakter",
    opt_titlecase:"Kelimelerin ilk harfini büyüt (TitleCase)",
    lbl_pin_digits:"PIN Basamak Sayısı",
    lbl_enable_history:"Şifre Geçmişi",
    desc_enable_history:"Üretilen şifreleri yerel geçmiş listesinde sakla.",
    lbl_mask_default:"Şifreleri Varsayılan Olarak Maskele",
    desc_mask_default:"Şifreleri ekranda gizli (••••) olarak göster.",
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
    priv_note:"Bu eklenti açık kaynak kodlu ve tamamen ücretsizdir.",
    mode_token:"Token 👑",
    lbl_token_format:"Format",
    desc_token_locked:"👑 Bu format PassGen PRO geliştirici özelliğidir.",
    btn_unlock_pro:"PRO ile Aç",
    desc_pro:"Geliştirici araçları (UUID, Hex Token, Base64) ve öncelikli özellikler.",
    btn_get_pro:"PRO Al ($4.99)",
    lbl_cloud_sync:"🔐 Bulut Şifre Yöneticisi",
    desc_cloud_sync:"Şifrelerinizi telefon ve PC'lerinizde güvenle senkronize edin.",
    btn_partner:"Önerilenler →",
    lbl_support:"☕ Geliştiriciye Destek",
    desc_support:"Eklentiyi beğendiyseniz bir kahve ısmarlayabilirsiniz.",
    btn_coffee:"Kahve Ismarla",
    pro_key_ph:"Lisans Anahtarı (örn: PG-PRO-...)",
    btn_activate_pro:"Aktif Et",
    pro_invalid_key:"Geçersiz lisans anahtarı. Lütfen kontrol edin."
  },
  en: {
    _name:"English", brand_tagline:"Password Generator",
    tab_btn_gen:"Generator", tab_btn_hist:"History", tab_btn_settings:"Settings", tab_btn_priv:"Privacy",
    mode_random:"Random", mode_passphrase:"Passphrase", mode_pin:"PIN",
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
    lbl_words_count:"Word Count", lbl_separator:"Separator",
    opt_titlecase:"Capitalize words (TitleCase)",
    lbl_pin_digits:"PIN Digits",
    lbl_enable_history:"Password History",
    desc_enable_history:"Keep generated passwords in local history list.",
    lbl_mask_default:"Mask Passwords by Default",
    desc_mask_default:"Hide passwords on screen with dots (••••).",
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
    priv_note:"This extension is free, open-source, and privacy-first.",
    mode_token:"Token 👑",
    lbl_token_format:"Format",
    desc_token_locked:"👑 This format is a PassGen PRO feature.",
    btn_unlock_pro:"Unlock with PRO",
    desc_pro:"Developer tools (UUID, Hex Token, Base64) & priority features.",
    btn_get_pro:"Get PRO ($4.99)",
    lbl_cloud_sync:"🔐 Cloud Password Sync",
    desc_cloud_sync:"Securely sync your passwords across phones & computers.",
    btn_partner:"Explore →",
    lbl_support:"☕ Support Developer",
    desc_support:"If you enjoy PassGen, consider buying a coffee.",
    btn_coffee:"Buy Coffee",
    pro_key_ph:"License Key (e.g. PG-PRO-...)",
    btn_activate_pro:"Activate",
    pro_invalid_key:"Invalid license key. Please check your key."
  },
  es: {
    _name:"Español", brand_tagline:"Generador de Contraseñas",
    tab_btn_gen:"Generar", tab_btn_hist:"Historial", tab_btn_settings:"Ajustes", tab_btn_priv:"Privacidad",
    mode_random:"Aleatorio", mode_passphrase:"Frase", mode_pin:"PIN",
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
    lbl_words_count:"Número de Palabras", lbl_separator:"Separador",
    opt_titlecase:"Mayúscula inicial en palabras",
    lbl_pin_digits:"Dígitos del PIN",
    lbl_enable_history:"Historial de Contraseñas",
    desc_enable_history:"Guardar contraseñas en el historial local.",
    lbl_mask_default:"Enmascarar por defecto",
    desc_mask_default:"Ocultar contraseñas con puntos (••••).",
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
    priv_note:"Extensión gratuita y de código abierto.",
    mode_token:"Token 👑",
    lbl_token_format:"Formato",
    desc_token_locked:"👑 Función de PassGen PRO.",
    btn_unlock_pro:"Desbloquear con PRO",
    desc_pro:"Herramientas para desarrolladores (UUID, Hex, Base64).",
    btn_get_pro:"Obtener PRO ($4.99)",
    lbl_cloud_sync:"🔐 Sincronización en la Nube",
    desc_cloud_sync:"Guarde contraseñas de forma segura en todos sus dispositivos.",
    btn_partner:"Explorar →",
    lbl_support:"☕ Apoyar al Desarrollador",
    desc_support:"Si te gusta PassGen, puedes invitarme a un café.",
    btn_coffee:"Comprar Café",
    pro_key_ph:"Clave de licencia (ej: PG-PRO-...)",
    btn_activate_pro:"Activar",
    pro_invalid_key:"Clave de licencia no válida."
  },
  fr: {
    _name:"Français", brand_tagline:"Générateur de Mots de Passe",
    tab_btn_gen:"Générateur", tab_btn_hist:"Historique", tab_btn_settings:"Paramètres", tab_btn_priv:"Confidentialité",
    mode_random:"Aléatoire", mode_passphrase:"Phrase", mode_pin:"PIN",
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
    lbl_words_count:"Nombre de Mots", lbl_separator:"Séparateur",
    opt_titlecase:"Première lettre en majuscule",
    lbl_pin_digits:"Chiffres du PIN",
    lbl_enable_history:"Historique des Mots de Passe",
    desc_enable_history:"Conserver les mots de passe dans l'historique.",
    lbl_mask_default:"Masquer par défaut",
    desc_mask_default:"Masquer avec des points (••••).",
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
    priv_note:"Extension gratuite et open-source.",
    mode_token:"Token 👑",
    lbl_token_format:"Format",
    desc_token_locked:"👑 Fonctionnalité PassGen PRO.",
    btn_unlock_pro:"Débloquer avec PRO",
    desc_pro:"Outils de développement (UUID, Hex Token, Base64).",
    btn_get_pro:"Obtenir PRO (4.99$)",
    lbl_cloud_sync:"🔐 Gestionnaire Cloud",
    desc_cloud_sync:"Synchronisez vos mots de passe en toute sécurité.",
    btn_partner:"Découvrir →",
    lbl_support:"☕ Soutenir le Développeur",
    desc_support:"Si vous aimez PassGen, offrez-moi un café.",
    btn_coffee:"Offrir un café",
    pro_key_ph:"Clé de licence (ex: PG-PRO-...)",
    btn_activate_pro:"Activer",
    pro_invalid_key:"Clé de licence invalide."
  },
  ru: {
    _name:"Русский", brand_tagline:"Генератор паролей",
    tab_btn_gen:"Генератор", tab_btn_hist:"История", tab_btn_settings:"Настройки", tab_btn_priv:"Конфиденциальность",
    mode_random:"Случайный", mode_passphrase:"Фраза", mode_pin:"PIN",
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
    lbl_words_count:"Количество слов", lbl_separator:"Разделитель",
    opt_titlecase:"Слова с заглавной буквы",
    lbl_pin_digits:"Цифр в PIN-коде",
    lbl_enable_history:"История паролей",
    desc_enable_history:"Сохранять пароли в локальном журнале.",
    lbl_mask_default:"Скрывать по умолчанию",
    desc_mask_default:"Скрывать символы точками (••••).",
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
    priv_note:"Бесплатное расширение с открытым исходным кодом.",
    mode_token:"Токен 👑",
    lbl_token_format:"Формат",
    desc_token_locked:"👑 Функция PassGen PRO.",
    btn_unlock_pro:"Разблокировать PRO",
    desc_pro:"Инструменты разработчика (UUID, Hex, Base64).",
    btn_get_pro:"Купить PRO ($4.99)",
    lbl_cloud_sync:"🔐 Облачный менеджер",
    desc_cloud_sync:"Безопасная синхронизация паролей на всех устройствах.",
    btn_partner:"Подробнее →",
    lbl_support:"☕ Поддержать автора",
    desc_support:"Если вам нравится PassGen, угостите меня кофе.",
    btn_coffee:"Угостить кофе",
    pro_key_ph:"Лицензионный ключ (напр: PG-PRO-...)",
    btn_activate_pro:"Активировать",
    pro_invalid_key:"Неверный лицензионный ключ."
  },
  zh: {
    _name:"中文", brand_tagline:"密码生成器",
    tab_btn_gen:"生成器", tab_btn_hist:"历史记录", tab_btn_settings:"设置", tab_btn_priv:"隐私政策",
    mode_random:"随机密码", mode_passphrase:"短语密码", mode_pin:"PIN码",
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
    lbl_words_count:"单词数量", lbl_separator:"分隔符",
    opt_titlecase:"首字母大写",
    lbl_pin_digits:"PIN位数",
    lbl_enable_history:"保存历史记录",
    desc_enable_history:"在本地历史中保存生成的密码。",
    lbl_mask_default:"默认隐藏明文",
    desc_mask_default:"以圆点(••••)遮挡显示密码。",
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
    priv_note:"本扩展完全免费且开源。",
    mode_token:"令牌 👑",
    lbl_token_format:"格式",
    desc_token_locked:"👑 此格式属于 PassGen PRO 专业版功能。",
    btn_unlock_pro:"解锁 PRO",
    desc_pro:"开发者工具（UUID、Hex密钥、Base64）及专属特性。",
    btn_get_pro:"获取 PRO ($4.99)",
    lbl_cloud_sync:"🔐 云端密码管理器",
    desc_cloud_sync:"在手机与电脑间安全同步您的密码。",
    btn_partner:"查看推荐 →",
    lbl_support:"☕ 支持开发者",
    desc_support:"如果您喜欢 PassGen，请作者喝杯咖啡吧。",
    btn_coffee:"请喝咖啡",
    pro_key_ph:"授权密钥（例如：PG-PRO-...）",
    btn_activate_pro:"激活",
    pro_invalid_key:"授权密钥无效，请核对后重试。"
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
function t(key) { return (LANGS[currentLang]||{})[key] || (LANGS.en[key]) || key; }

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const ids = [
    "brand_tagline", "tab_btn_gen", "tab_btn_hist", "tab_btn_settings", "tab_btn_priv",
    "mode_random", "mode_passphrase", "mode_pin",
    "lbl_length", "lbl_char_types", "opt_uppercase", "opt_lowercase",
    "opt_numbers", "opt_symbols", "notice_copied", "footer_hint",
    "lbl_crack_time", "lbl_exclude", "lbl_history_title",
    "lbl_words_count", "lbl_separator", "opt_titlecase", "lbl_pin_digits",
    "lbl_enable_history", "desc_enable_history",
    "lbl_mask_default", "desc_mask_default",
    "lbl_auto_clean", "desc_auto_clean", "opt_clean_never", "opt_clean_24h", "opt_clean_7d", "opt_clean_30d",
    "lbl_hist_limit", "desc_hist_limit", "lbl_show_toast", "desc_show_toast",
    "lbl_reset_title", "desc_reset",
    "priv_badge", "priv_title", "priv_p1",
    "priv_f1", "priv_f2", "priv_f3", "priv_f4", "priv_note",
    "mode_token", "lbl_token_format", "desc_token_locked",
    "desc_pro", "lbl_cloud_sync", "desc_cloud_sync", "lbl_support", "desc_support"
  ];
  ids.forEach(k => {
    const el = document.getElementById(k);
    if (el) el.textContent = t(k);
  });

  const clearBtn = document.getElementById("clearHistoryBtn");
  if (clearBtn) clearBtn.textContent = t("lbl_clear_history");

  const resetBtn = document.getElementById("resetSettingsBtn");
  if (resetBtn) resetBtn.textContent = t("btn_reset");

  const getProBtn = document.getElementById("btnGetPro");
  if (getProBtn) getProBtn.textContent = t("btn_get_pro");

  const partnerBtn = document.getElementById("btnPartner");
  if (partnerBtn) partnerBtn.textContent = t("btn_partner");

  const coffeeBtn = document.getElementById("btnCoffee");
  if (coffeeBtn) coffeeBtn.textContent = t("btn_coffee");

  const actBtn = document.getElementById("btnActivatePro");
  if (actBtn) actBtn.textContent = t("btn_activate_pro");

  const unlockBtn = document.getElementById("btnUnlockPro");
  if (unlockBtn) unlockBtn.textContent = t("btn_unlock_pro");

  const proInput = document.getElementById("proKeyInput");
  if (proInput) proInput.placeholder = t("pro_key_ph");

  updateProUI();

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
  chrome.runtime.sendMessage({ type: "passgen_lang", lang }).catch(()=>{});
}

// ── Şifre Üretici Motoru (Random / Passphrase / PIN) ────────────────────────
const CHARSETS = {
  uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase:"abcdefghijklmnopqrstuvwxyz",
  numbers:"0123456789",
  symbols:"!@#$%^&*()_+-=[]{}|;:,.<>?"
};
const DEFAULTS = {
  mode: "random",
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  exclude: "",
  wordsCount: 4,
  separator: "-",
  titleCase: true,
  pinDigits: 6,
  tokenFormat: "uuid",
  enableHistory: true,
  maskDefault: false,
  autoClean: "never",
  histLimit: 10,
  showToast: true,
  lang: null,
  isPro: false,
  proKey: ""
};

function rand(max) {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return a[0] % max;
}

function generate(opts) {
  if (opts.mode === "token") {
    const fmt = opts.tokenFormat || "uuid";
    if (fmt === "uuid") {
      return typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            const r = rand(16);
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
          });
    }
    if (fmt === "hex64") {
      const bytes = new Uint8Array(32);
      crypto.getRandomValues(bytes);
      return Array.from(bytes, b => b.toString(16).padStart(2, "0")).join("");
    }
    if (fmt === "base64") {
      const bytes = new Uint8Array(24);
      crypto.getRandomValues(bytes);
      return btoa(String.fromCharCode.apply(null, bytes));
    }
  }

  if (opts.mode === "pin") {
    const digits = Math.max(4, Math.min(12, opts.pinDigits || 6));
    let res = "";
    for (let i = 0; i < digits; i++) res += rand(10);
    return res;
  }

  if (opts.mode === "passphrase") {
    const pool = (currentLang === "tr") ? WORDS_TR : WORDS_EN;
    const count = Math.max(3, Math.min(7, opts.wordsCount || 4));
    const sep = opts.separator !== undefined ? opts.separator : "-";
    const words = [];
    for (let i = 0; i < count; i++) {
      let w = pool[rand(pool.length)];
      if (opts.titleCase) {
        w = w.charAt(0).toUpperCase() + w.slice(1);
      }
      words.push(w);
    }
    return words.join(sep);
  }

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

function calcCrackTime(pwd, opts) {
  if (opts.mode === "token") return t("crack_centuries");
  let pool = 26;
  if (opts.mode === "pin") {
    pool = 10;
  } else if (opts.mode === "passphrase") {
    pool = 5000;
  } else {
    pool = 0;
    if (opts.uppercase) pool += 26;
    if (opts.lowercase) pool += 26;
    if (opts.numbers)   pool += 10;
    if (opts.symbols)   pool += 30;
    if (pool === 0) pool = 26;
  }
  const length = (opts.mode === "passphrase") ? (opts.wordsCount || 4) : pwd.length;
  const guesses = Math.pow(pool, length);
  const seconds = guesses / 1e10;

  if (seconds < 1)      return t("crack_instant");
  if (seconds < 60)     return Math.round(seconds) + " " + t("crack_seconds");
  if (seconds < 3600)   return Math.round(seconds/60) + " " + t("crack_minutes");
  if (seconds < 86400)  return Math.round(seconds/3600) + " " + t("crack_hours");
  if (seconds < 3.15e7) return Math.round(seconds/86400) + " " + t("crack_days");
  if (seconds < 3.15e9) return Math.round(seconds/3.15e7) + " " + t("crack_years");
  return t("crack_centuries");
}

function strengthInfo(pwd, mode) {
  if (mode === "token") {
    return { key:"strength_vstrong", pct:100, color:"#10b981" };
  }
  if (mode === "pin") {
    if (pwd.length <= 4) return { key:"strength_weak",   pct:25,  color:"#ef4444" };
    if (pwd.length <= 6) return { key:"strength_fair",   pct:50,  color:"#f59e0b" };
    if (pwd.length <= 8) return { key:"strength_strong", pct:80,  color:"#10b981" };
    return { key:"strength_vstrong", pct:100, color:"#10b981" };
  }
  if (mode === "passphrase") {
    const words = pwd.split(/[-_.\s]/);
    if (words.length <= 3) return { key:"strength_fair",   pct:50,  color:"#f59e0b" };
    if (words.length <= 4) return { key:"strength_strong", pct:85,  color:"#10b981" };
    return { key:"strength_vstrong", pct:100, color:"#10b981" };
  }

  let s = 0;
  if (pwd.length >= 8)  s++; if (pwd.length >= 12) s++;
  if (pwd.length >= 16) s++; if (pwd.length >= 24) s++;
  if (/[A-Z]/.test(pwd)) s++; if (/[a-z]/.test(pwd)) s++;
  if (/[0-9]/.test(pwd)) s++; if (/[^A-Za-z0-9]/.test(pwd)) s += 2;
  if (s <= 3) return { key:"strength_weak",   pct:20,  color:"#ef4444" };
  if (s <= 5) return { key:"strength_fair",   pct:50,  color:"#f59e0b" };
  if (s <= 7) return { key:"strength_strong", pct:75,  color:"#10b981" };
  return     { key:"strength_vstrong", pct:100, color:"#10b981" };
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
    btnEye.textContent = isRowMasked ? "👁" : "🔒";
    btnEye.addEventListener("click", (e) => {
      e.stopPropagation();
      isRowMasked = !isRowMasked;
      spanPwd.textContent = isRowMasked ? "•".repeat(Math.min(pwd.length, 14)) : pwd;
      btnEye.textContent = isRowMasked ? "👁" : "🔒";
    });

    const btnCopy = document.createElement("button");
    btnCopy.className = "history-btn";
    btnCopy.title = t("btn_copy_title");
    btnCopy.textContent = "📋";
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
  noticeTimer = setTimeout(()=>elNotice.classList.remove("visible"), 2000);
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

const elWordsSlider = $("wordsSlider");
const elWordsVal    = $("wordsValue");
const elTitleCase   = $("opt-titlecase");
const elPinSlider   = $("pinSlider");
const elPinVal      = $("pinValue");

const elEnableHist  = $("enableHistoryToggle");
const elMaskDefault = $("maskDefaultToggle");
const elAutoClean   = $("autoCleanSelect");
const elHistLimit   = $("histLimitSelect");
const elShowToast   = $("showToastToggle");
const elResetBtn    = $("resetSettingsBtn");

let currentPassword = "";
let isMainMasked    = false;
let currentMode     = "random";
let currentSep      = "-";
let noticeTimer     = null;
let currentOpts     = {};
let isPro           = false;
let currentTokenFmt = "uuid";

function updateProUI() {
  const badge = $("proBadge");
  const banner = $("tokenLockedBanner");
  const proRow = $("proInputRow");
  const getProBtn = $("btnGetPro");
  if (badge) {
    if (isPro) {
      badge.textContent = "PRO ✓";
      badge.classList.add("active");
      if (proRow) proRow.style.display = "none";
      if (getProBtn) getProBtn.style.display = "none";
      if (banner) banner.style.display = "none";
    } else {
      badge.textContent = "Free";
      badge.classList.remove("active");
      if (proRow) proRow.style.display = "flex";
      if (getProBtn) getProBtn.style.display = "inline-block";
      if (banner && currentMode === "token") banner.style.display = "block";
    }
  }
}

function getOpts() {
  return {
    mode:          currentMode,
    length:        parseInt(elSlider.value),
    uppercase:     elOptU.checked,
    lowercase:     elOptL.checked,
    numbers:       elOptN.checked,
    symbols:       elOptS.checked,
    exclude:       elExclude.value,
    wordsCount:    parseInt(elWordsSlider.value),
    separator:     currentSep,
    titleCase:     elTitleCase.checked,
    pinDigits:     parseInt(elPinSlider.value),
    tokenFormat:   currentTokenFmt,
    enableHistory: elEnableHist.checked,
    maskDefault:   elMaskDefault.checked,
    autoClean:     elAutoClean.value,
    histLimit:     parseInt(elHistLimit.value) || 10,
    showToast:     elShowToast.checked,
    isPro:         isPro
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
    elStrFill.style.width="0"; elStrText.textContent="\u2014";
    elStrText.style.color=""; elCrackRow.style.display="none"; return;
  }
  const s = strengthInfo(pwd, currentMode);
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
  navigator.clipboard.writeText(currentPassword).then(showNotice);
}

function doGenerate() {
  currentOpts = getOpts();
  if (currentMode === "token" && !isPro) {
    render("PRO-PREVIEW-••••••••");
    return;
  }
  const pwd = generate(currentOpts);
  render(pwd);
  saveOpts(currentOpts);
  saveHistory(pwd);
}

// ── Mod Değiştirme (Pills) ──────────────────────────────────────────────────
document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentMode = btn.getAttribute("data-mode");

    $("panel-random").style.display      = (currentMode === "random") ? "block" : "none";
    $("panel-passphrase").style.display  = (currentMode === "passphrase") ? "block" : "none";
    $("panel-pin").style.display         = (currentMode === "pin") ? "block" : "none";
    $("panel-token").style.display       = (currentMode === "token") ? "block" : "none";

    const banner = $("tokenLockedBanner");
    if (banner) {
      banner.style.display = (currentMode === "token" && !isPro) ? "block" : "none";
    }

    doGenerate();
  });
});

document.querySelectorAll(".pill-btn:not(.token-pill)").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pill-btn:not(.token-pill)").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentSep = btn.getAttribute("data-sep");
    doGenerate();
  });
});

document.querySelectorAll(".token-pill").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".token-pill").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTokenFmt = btn.getAttribute("data-token");
    doGenerate();
  });
});

$("btnActivatePro")?.addEventListener("click", () => {
  const inp = $("proKeyInput");
  const key = (inp?.value || "").trim().toUpperCase();
  if (key.startsWith("PG-PRO-") || key.startsWith("PRO-") || key === "PASSGENPRO" || key.length >= 8) {
    isPro = true;
    chrome.storage.sync.set({ isPro: true, proKey: key });
    updateProUI();
    showNotice();
    if (currentMode === "token") doGenerate();
  } else {
    alert(t("pro_invalid_key"));
  }
});

$("btnUnlockPro")?.addEventListener("click", () => {
  document.querySelector("[data-tab='tab-settings']")?.click();
  $("proKeyInput")?.focus();
});

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

elSlider.addEventListener("input", ()=>{ elLenVal.textContent=elSlider.value; if(currentPassword) doGenerate(); });
elWordsSlider.addEventListener("input", ()=>{ elWordsVal.textContent=elWordsSlider.value; if(currentPassword) doGenerate(); });
elPinSlider.addEventListener("input", ()=>{ elPinVal.textContent=elPinSlider.value; if(currentPassword) doGenerate(); });

[elOptU,elOptL,elOptN,elOptS,elTitleCase].forEach(el=>{
  if (el) el.addEventListener("change",()=>{ if(currentPassword) doGenerate(); });
});
elLangSelect.addEventListener("change", ()=>applyLang(elLangSelect.value));
elExclude.addEventListener("input", ()=>{ if(currentPassword) doGenerate(); });

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
  currentMode = DEFAULTS.mode;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-mode") === "random"));
  $("panel-random").style.display = "block";
  $("panel-passphrase").style.display = "none";
  $("panel-pin").style.display = "none";

  elSlider.value = DEFAULTS.length;
  elLenVal.textContent = DEFAULTS.length;
  elWordsSlider.value = DEFAULTS.wordsCount;
  elWordsVal.textContent = DEFAULTS.wordsCount;
  elPinSlider.value = DEFAULTS.pinDigits;
  elPinVal.textContent = DEFAULTS.pinDigits;
  elOptU.checked = DEFAULTS.uppercase;
  elOptL.checked = DEFAULTS.lowercase;
  elOptN.checked = DEFAULTS.numbers;
  elOptS.checked = DEFAULTS.symbols;
  elTitleCase.checked = DEFAULTS.titleCase;
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

  currentMode = stored.mode || "random";
  isPro = stored.isPro || false;
  currentTokenFmt = stored.tokenFormat || "uuid";
  document.querySelectorAll(".token-pill").forEach(b => b.classList.toggle("active", b.getAttribute("data-token") === currentTokenFmt));
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-mode") === currentMode));
  $("panel-random").style.display      = (currentMode === "random") ? "block" : "none";
  $("panel-passphrase").style.display  = (currentMode === "passphrase") ? "block" : "none";
  $("panel-pin").style.display         = (currentMode === "pin") ? "block" : "none";
  $("panel-token").style.display       = (currentMode === "token") ? "block" : "none";
  if ($("proKeyInput") && stored.proKey) $("proKeyInput").value = stored.proKey;
  updateProUI();

  currentSep = stored.separator || "-";
  document.querySelectorAll(".pill-btn:not(.token-pill)").forEach(b => b.classList.toggle("active", b.getAttribute("data-sep") === currentSep));

  elSlider.value = stored.length;
  elLenVal.textContent = stored.length;
  elWordsSlider.value = stored.wordsCount || 4;
  elWordsVal.textContent = stored.wordsCount || 4;
  elPinSlider.value = stored.pinDigits || 6;
  elPinVal.textContent = stored.pinDigits || 6;

  elOptU.checked = stored.uppercase;
  elOptL.checked = stored.lowercase;
  elOptN.checked = stored.numbers;
  elOptS.checked = stored.symbols;
  elTitleCase.checked = stored.titleCase !== undefined ? stored.titleCase : true;
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
    chrome.storage.local.get({ passgen_history:[] }, local => {
      history = cleanExpiredHistory(local.passgen_history || [], stored.autoClean);
      chrome.storage.local.set({ passgen_history: history });
      renderHistory();
    });
  } else {
    renderHistory();
  }

  doGenerate();
});
