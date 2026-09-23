# PassGen – Secure Password Generator Extension

[![Chrome Web Store](https://img.shields.io/badge/Chrome_Web_Store-PassGen-blue?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/passgen-password-generato/nlalmnenadnigpacmfgbpljfiiemnddl)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy_Me_A_Coffee-Donate-yellow.svg?logo=buymeacoffee)](https://buymeacoffee.com/kaangumus)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

PassGen is a fast, lightweight, and cryptographically secure password generator extension for Chromium-based browsers (Chrome, Brave, Edge, Opera, Vivaldi).

**[🌐 Official Website](https://kaangumus.ninja/passgen/)** · **[🛒 Chrome Web Store](https://chromewebstore.google.com/detail/passgen-password-generato/nlalmnenadnigpacmfgbpljfiiemnddl)** · **[👑 PassGen PRO](https://kaangumus.ninja/passgen/pro.html)** · **[☕ Buy Me a Coffee](https://buymeacoffee.com/kaangumus)**

Generate strong passwords with a single right-click on any password input field or use the popup panel to customize your preferences.

## 🚀 Features

- **3 Generation Modes**:
  - **Random**: Custom length (8-64), uppercase, lowercase, numbers, symbols, and custom character exclusion (e.g. `0O1lI`).
  - **Passphrase**: Diceware-style memorable multi-word passphrases (e.g. `Falcon-Sunset-River-Echo`) with customizable word count, separators (`-`, `_`, `.`, space), and TitleCase toggle.
  - **PIN**: Numeric passcode generation (4-12 digits) for banking, locks, and device PINs.
- **Password Masking (Eye Toggle)**: Show/hide eye toggle on both the main generator display and every item in your history list to prevent shoulder-surfing.
- **Browser Password Manager Integration**: Automatically triggers Chrome, Brave, and Edge's native "Save password?" prompt via full synthetic event dispatch (`focus`, `input`, `change`, `keydown`, `keyup`, `blur`).
- **Minimal Permissions (Least Privilege MV3)**: No broad `<all_urls>` content scripts! Only requests `activeTab` on demand, ensuring zero invasive browser security warnings upon installation.
- **Instant Right-Click Generation**: Right-click on any password field and select "Generate Password".
- **Cryptographically Secure**: Powered exclusively by browser native `crypto.getRandomValues()`.
- **100% Offline & Private**: Zero telemetry, zero analytics, zero external network requests.
- **Strength & Brute-force Crack Time**: Real-time visual entropy feedback and estimated crack time for all 3 modes.
- **Password History & Auto-clean**: Keep track of recently generated passwords with options to disable history completely or auto-clean after 24 hours, 7 days, or 30 days.
- **Global Keyboard Shortcut**: Press `Alt+Shift+G` to generate and copy a password instantly.
- **6-Language Internationalization (i18n)**: English, Turkish, Spanish, French, Russian, and Simplified Chinese.

## 🛡️ Privacy Policy

PassGen does not collect, transmit, or store any personal data. Everything is processed strictly on your local device.
- Read full Privacy Policy: [https://kaangumus.ninja/passgen/](https://kaangumus.ninja/passgen/) (or [https://kaaangumus.github.io/passgen/](https://kaaangumus.github.io/passgen/))

## 📦 Installation (Developer Mode)

1. Clone or download this repository.
2. Open your browser and navigate to `chrome://extensions` or `brave://extensions`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the `passgen` folder.

## 📄 License

MIT License. Free to use, modify, and distribute.
