const fs   = require("fs");
const path = require("path");
const { execSync }  = require("child_process");
const { minify }    = require("terser");
const JavaScriptObfuscator = require("javascript-obfuscator");
const CleanCSS      = require("clean-css");

const SRC  = __dirname;
const DIST = path.join(__dirname, "dist");

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function copy(src, dest) { ensureDir(path.dirname(dest)); fs.copyFileSync(src, dest); }

function copyDir(src, dest) {
  ensureDir(dest);
  fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else { copy(s, d); console.log("  [CPY] " + path.relative(SRC, s)); }
  });
}

async function processJS(src, dest) {
  ensureDir(path.dirname(dest));
  const code = fs.readFileSync(src, "utf8");
  const minResult = await minify(code, { compress: { passes: 2 }, mangle: true, format: { comments: false } });
  const obfResult = JavaScriptObfuscator.obfuscate(minResult.code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.4,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    splitStringsChunkLength: 6,
    stringArray: true,
    stringArrayEncoding: ["rc4"],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayThreshold: 0.75,
    unicodeEscapeSequence: false,
    renameGlobals: false,
    identifierNamesGenerator: "hexadecimal",
    selfDefending: false,
    log: false
  });
  const output = obfResult.getObfuscatedCode();
  fs.writeFileSync(dest, output, "utf8");
  const s1 = Buffer.byteLength(code, "utf8"), s2 = Buffer.byteLength(output, "utf8");
  console.log("  [JS ] " + path.relative(SRC, src).padEnd(36) + s1 + "b -> " + s2 + "b");
}

function processCSS(src, dest) {
  ensureDir(path.dirname(dest));
  const code = fs.readFileSync(src, "utf8");
  const result = new CleanCSS({ level: 2 }).minify(code);
  fs.writeFileSync(dest, result.styles, "utf8");
  const s1 = Buffer.byteLength(code, "utf8"), s2 = Buffer.byteLength(result.styles, "utf8");
  console.log("  [CSS] " + path.relative(SRC, src).padEnd(36) + s1 + "b -> " + s2 + "b");
}

(async () => {
  console.log("\nPassGen Build  v1.0\n" + "=".repeat(52));

  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true, force: true });
  ensureDir(DIST);

  // manifest
  copy(path.join(SRC, "manifest.json"), path.join(DIST, "manifest.json"));
  console.log("  [CPY] manifest.json");

  // JS (minify + obfuscate)
  await processJS(path.join(SRC, "background.js"),    path.join(DIST, "background.js"));
  await processJS(path.join(SRC, "content.js"),        path.join(DIST, "content.js"));
  await processJS(path.join(SRC, "popup", "popup.js"), path.join(DIST, "popup", "popup.js"));

  // CSS (minify)
  processCSS(path.join(SRC, "popup", "popup.css"), path.join(DIST, "popup", "popup.css"));

  // HTML (copy)
  copy(path.join(SRC, "popup", "popup.html"), path.join(DIST, "popup", "popup.html"));
  console.log("  [CPY] popup/popup.html");

  // Icons
  ensureDir(path.join(DIST, "icons"));
  ["icon16.png","icon48.png","icon128.png"].forEach(f => {
    copy(path.join(SRC, "icons", f), path.join(DIST, "icons", f));
    console.log("  [CPY] icons/" + f);
  });

  // _locales (copy as-is, JSON must remain readable for browser i18n API)
  console.log("  [I18N] Copying locales...");
  copyDir(path.join(SRC, "_locales"), path.join(DIST, "_locales"));

  console.log("\n  Build -> dist/  done.\n");

  // Pack CRX
  console.log("  Packing CRX3...");
  const keyPath = path.join(SRC, "..", "passgen_private_key.pem");
  execSync(`npx crx3 -p "${keyPath}" -o passgen.crx dist`, { cwd: SRC, stdio: "inherit" });

  const crxSize = (fs.statSync(path.join(SRC, "passgen.crx")).size / 1024).toFixed(1);
  console.log("\n" + "=".repeat(52));
  console.log("  passgen.crx  " + crxSize + " KB");
  console.log("  passgen.pem  (private key - store securely)");
  console.log("=".repeat(52));
  console.log("\nInstall in Brave:");
  console.log("  brave://extensions -> Developer Mode ON");
  console.log("  Drag & drop  passgen.crx  onto the page\n");
})();
