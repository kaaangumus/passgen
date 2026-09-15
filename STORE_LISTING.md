# PassGen - Chrome Web Store Mağaza Bilgileri

Chrome Web Store Developer Console'a (`https://chromewebstore.google.com/devconsole`) girdiğinizde bu bilgileri ilgili kutucuklara kopyalayıp yapıştırabilirsiniz.

---

## 1. Genel Bilgiler

- **Uzantı Adı (Title):** PassGen - Password Generator
- **Kısa Açıklama (Summary - maks 132 karakter):**
  - *İngilizce:* Secure, instant password generator with right-click auto-fill, strength analysis, and customizable character rules.
  - *Türkçe:* Şifre alanına sağ tıkla anında güçlü şifre üret, formları otomatik doldur ve kopyala. Çevrimdışı ve güvenli.
- **Kategori:** Productivity (Üretkenlik)
- **Fiyat:** Free (Ücretsiz)

---

## 2. Detaylı Açıklama (Full Description)

### İngilizce (Primary):
```text
PassGen is a fast, lightweight, and cryptographically secure password generator designed for Chromium-based browsers (Chrome, Brave, Edge, Opera, Vivaldi).

Generate ultra-strong passwords with a single right-click or use the popup panel to customize your security preferences.

KEY FEATURES:

✓ Instant Right-Click Generation: Right-click on any password field and select "Generate Password". It automatically fills the field, copies to your clipboard, and confirms with an elegant notification toast.
✓ Smart Context Filter: The right-click menu only appears on actual password fields, keeping your context menus clean and clutter-free.
✓ Cryptographically Secure: Uses your browser's native crypto.getRandomValues() engine. Passwords are never pseudo-random and never predictable.
✓ 100% Private & Offline: Operates entirely client-side on your device. Zero external network requests, zero telemetry, zero trackers.
✓ Real-Time Strength & Crack Time: Visual password strength meter and estimated brute-force crack time calculator.
✓ Custom Rules & Exclusion: Choose length (8–64 chars), uppercase, lowercase, numbers, symbols, and easily exclude confusing characters (e.g. 0O1lI).
✓ Recent Password History: Access your last 5 generated passwords right inside the popup in case you closed a tab accidentally.
✓ Global Keyboard Shortcut: Press Alt+Shift+G anytime to instantly generate and copy a strong password.
✓ Multi-Language Support: Available in English, Turkish, Spanish, French, Russian, and Simplified Chinese.

PERMISSIONS EXPLAINED:
- contextMenus: Adds the "Generate Password" option to the right-click menu.
- activeTab & scripting: Inserts the generated password into the active password input and displays the toast notification.
- storage: Saves your generation preferences and recent history locally on your device.
- clipboardWrite: Automatically copies the generated password to your clipboard.

Keep your online accounts safe with truly random, uncrackable passwords!
```

### Türkçe Açıklama:
```text
PassGen; Chrome, Brave, Edge ve tüm Chromium tabanlı tarayıcılar için geliştirilmiş, hızlı, hafif ve kriptografik olarak güvenli bir şifre üreticisidir.

Şifre kutularına sağ tıklayarak tek tıkla şifre üretebilir veya açılır menüden tüm güvenlik kurallarını özelleştirebilirsiniz.

ÖNE ÇIKAN ÖZELLİKLER:

✓ Sağ Tık ile Otomatik Doldurma: Herhangi bir şifre alanına sağ tıklayıp "Şifre Üret" demeniz yeterlidir. Şifre hem alana otomatik yazılır hem panoya kopyalanır.
✓ Akıllı Filtreleme: Sağ tık menüsü yalnızca şifre alanlarında görünür; normal metinlerde, bağlantılarda veya sayfa boşluklarında menünüzü kalabalıklaştırmaz.
✓ Kriptografik Güvenlik: Tarayıcının yerel crypto.getRandomValues() altyapısını kullanır. En yüksek rastgelelik ve tahmin edilemezlik standardındadır.
✓ %100 Çevrimdışı ve Gizli: Hiçbir sunucuya bağlanmaz. Telemetri, analiz aracı veya takip kodu barındırmaz. Şifreleriniz cihazınızdan asla dışarı çıkmaz.
✓ Kırılma Süresi & Güç Analizi: Anlık şifre gücü göstergesi ve tahmini kaba kuvvet (brute-force) kırılma süresi hesaplayıcı.
✓ Karakter Hariç Tutma: Şifre uzunluğunu (8-64 karakter) ayarlayabilir ve karışıklık yaratan karakterleri (örn: 0, O, 1, l, I) hariç tutabilirsiniz.
✓ Son Üretilenler Geçmişi: Sekmeyi yanlışlıkla kapatsanız bile son 5 şifrenize eklenti menüsünden kolayca erişebilirsiniz.
✓ Klavye Kısayolu: Alt+Shift+G kısayoluna basarak istediğiniz an şifre üretebilirsiniz.
✓ 6 Dil Desteği: Türkçe, İngilizce, İspanyolca, Fransızca, Rusça ve Çince.
```

---

## 3. Privacy & Practices (Gizlilik Bildirimi Soruları)

Store Console'da "Privacy" sekmesinde sorulacak sorulara verilecek yanıtlar:

- **Single purpose:** "Secure password generator that generates and auto-fills cryptographically secure passwords locally on the user's browser."
- **Permissions justification:**
  - *contextMenus:* "Used to provide a right-click option on password input fields to generate and fill passwords directly."
  - *activeTab & scripting:* "Used to insert the generated password into the selected input field and display the on-screen confirmation toast."
  - *storage:* "Used to save user preferences (length, character sets, excluded characters) and local password history."
  - *clipboardWrite:* "Used to copy the generated password to the clipboard for user convenience."
- **Data Usage:**
  - "Do you collect user data?": **NO** (Tüm veri toplama kutucukları işaretlenmeyecek - No data collected).
- **Privacy Policy URL:**
  - `privacy-policy.html` dosyasını GitHub Pages veya kişisel sitenize yükleyip o linki vereceksiniz (Örn: `https://kullaniciadiniz.github.io/passgen/privacy-policy.html`).

---

## 4. Yüklenecek Görseller & Dosyalar

1. **Eklenti Paketi:** `passgen_store.zip`
2. **Tanıtım Görseli (Small Promo Tile):** `promo_tile_440x280.png` (440x280 piksel)
3. **Ekran Görüntüleri:** En az 1 adet 1280x800 veya 640x400 ekran görüntüsü (Eklenti popup'ının ve sağ tık menüsünün görüntüsü).
