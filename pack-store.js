const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { minify } = require("terser");
const CleanCSS = require("clean-css");

const SRC = __dirname;
const STORE_DIR = path.join(SRC, "store_package");
const ZIP_OUTPUT = path.join(SRC, "passgen_store.zip");

async function buildStorePackage() {
  console.log("=== PassGen Store Package Builder (Minified & Mangled) ===");

  // 1. Temiz store_package klasörü hazırla
  if (fs.existsSync(STORE_DIR)) {
    fs.rmSync(STORE_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(STORE_DIR, { recursive: true });

  function ensureDir(p) {
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
  }

  function copyRecursive(src, dest) {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      ensureDir(dest);
      for (const file of fs.readdirSync(src)) {
        copyRecursive(path.join(src, file), path.join(dest, file));
      }
    } else {
      ensureDir(path.dirname(dest));
      fs.copyFileSync(src, dest);
    }
  }

  // 2. Statik varlıkları kopyala
  console.log("[1/5] Copying static assets (manifest, icons, _locales, popup.html)...");
  copyRecursive(path.join(SRC, "manifest.json"), path.join(STORE_DIR, "manifest.json"));
  copyRecursive(path.join(SRC, "icons"), path.join(STORE_DIR, "icons"));
  copyRecursive(path.join(SRC, "_locales"), path.join(STORE_DIR, "_locales"));
  copyRecursive(path.join(SRC, "popup", "popup.html"), path.join(STORE_DIR, "popup", "popup.html"));

  // 3. JavaScript dosyalarını Mangle & Minify et (Okunamaz harf karmaşasına dönüştür)
  console.log("[2/5] Mangle & Minifying JavaScript (Store-Safe)...");
  const terserOpts = {
    ecma: 2020,
    compress: {
      passes: 3,
      dead_code: true,
      drop_console: true,
      loops: true,
      unused: true,
      conditionals: true,
      if_return: true,
      join_vars: true,
      collapse_vars: true,
      reduce_vars: true
    },
    mangle: {
      toplevel: true
    },
    format: {
      comments: false,
      ascii_only: true
    }
  };

  // background.js
  const bgRaw = fs.readFileSync(path.join(SRC, "background.js"), "utf8");
  const bgMin = await minify(bgRaw, terserOpts);
  fs.writeFileSync(path.join(STORE_DIR, "background.js"), bgMin.code, "utf8");
  console.log(`  - background.js: ${bgRaw.length}b -> ${bgMin.code.length}b (mangled)`);

  // popup/popup.js
  ensureDir(path.join(STORE_DIR, "popup"));
  const popRaw = fs.readFileSync(path.join(SRC, "popup", "popup.js"), "utf8");
  const popMin = await minify(popRaw, terserOpts);
  fs.writeFileSync(path.join(STORE_DIR, "popup", "popup.js"), popMin.code, "utf8");
  console.log(`  - popup/popup.js: ${popRaw.length}b -> ${popMin.code.length}b (mangled)`);

  // 4. CSS Minify
  console.log("[3/5] Minifying CSS...");
  const cssRaw = fs.readFileSync(path.join(SRC, "popup", "popup.css"), "utf8");
  const cssMin = new CleanCSS({ level: 2 }).minify(cssRaw);
  fs.writeFileSync(path.join(STORE_DIR, "popup", "popup.css"), cssMin.styles, "utf8");
  console.log(`  - popup/popup.css: ${cssRaw.length}b -> ${cssMin.styles.length}b`);

  // 5. ZIP Paketi Oluştur
  console.log("[4/5] Compressing to passgen_store.zip...");
  if (fs.existsSync(ZIP_OUTPUT)) {
    fs.unlinkSync(ZIP_OUTPUT);
  }

  try {
    const cmd = `powershell -Command "Compress-Archive -Path '${STORE_DIR}\\*' -DestinationPath '${ZIP_OUTPUT}' -Force"`;
    execSync(cmd, { stdio: "inherit" });
    const stat = fs.statSync(ZIP_OUTPUT);
    console.log(`\n✅ Store package ZIP created: passgen_store.zip (${(stat.size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error("ZIP creation failed:", err);
  }

  // 6. Temizlik
  console.log("[5/5] Cleaning temporary artifacts...");
  fs.rmSync(STORE_DIR, { recursive: true, force: true });
  console.log("All done!");
}

buildStorePackage().catch(console.error);
