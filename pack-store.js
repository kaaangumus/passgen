const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const SRC = __dirname;
const STORE_DIR = path.join(SRC, "store_package");
const ZIP_OUTPUT = path.join(SRC, "passgen_store.zip");

// 1. Temiz store_package klasörü hazırla
if (fs.existsSync(STORE_DIR)) {
  fs.rmSync(STORE_DIR, { recursive: true, force: true });
}
fs.mkdirSync(STORE_DIR, { recursive: true });

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Dahil edilecek dosyalar:
const includeFiles = [
  "manifest.json",
  "background.js",
  "content.js",
  "popup",
  "icons",
  "_locales"
];

for (const item of includeFiles) {
  const itemPath = path.join(SRC, item);
  if (fs.existsSync(itemPath)) {
    copyRecursive(itemPath, path.join(STORE_DIR, item));
    console.log("Included: " + item);
  }
}

// 2. PowerShell ile standart zip oluştur
if (fs.existsSync(ZIP_OUTPUT)) {
  fs.unlinkSync(ZIP_OUTPUT);
}

try {
  const cmd = `powershell -Command "Compress-Archive -Path '${STORE_DIR}\\*' -DestinationPath '${ZIP_OUTPUT}' -Force"`;
  execSync(cmd, { stdio: "inherit" });
  const stat = fs.statSync(ZIP_OUTPUT);
  console.log(`\nStore package ZIP created: passgen_store.zip (${(stat.size / 1024).toFixed(1)} KB)`);
} catch (err) {
  console.error("ZIP creation failed:", err);
}

// Temizlik
fs.rmSync(STORE_DIR, { recursive: true, force: true });
