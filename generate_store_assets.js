const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const ASSETS_DIR = path.join(__dirname, "store_assets");

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// ── HTML Template Builder ────────────────────────────────────────────────────
function wrapHtml(content, width = 1280, height = 800) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: ${width}px;
    height: ${height}px;
    background: radial-gradient(circle at 80% 20%, #1e293b 0%, #0b0f17 60%, #030712 100%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #f3f4f6;
    overflow: hidden;
    display: flex;
    position: relative;
  }
  .grid-bg {
    position: absolute;
    inset: 0;
    background-size: 40px 40px;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    pointer-events: none;
  }
  .glow-circle {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
    top: 50%;
    right: 15%;
    transform: translateY(-50%);
    pointer-events: none;
    filter: blur(40px);
  }
</style>
</head>
<body>
<div class="grid-bg"></div>
<div class="glow-circle"></div>
${content}
</body>
</html>`;
}

// ── Screenshot 1: 3 Generation Modes ─────────────────────────────────────────
const html1 = wrapHtml(`
  <div style="flex: 1; padding: 70px 60px; display: flex; flex-direction: column; justify-content: center; z-index: 2;">
    <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.4); border-radius: 20px; padding: 6px 14px; color: #10b981; font-weight: 700; font-size: 13px; letter-spacing: 1px; width: fit-content; margin-bottom: 20px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      3 GENERATION MODES
    </div>
    <h1 style="font-size: 46px; font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 20px; color: #ffffff;">
      Random, Passphrase &<br><span style="background: linear-gradient(135deg, #10b981, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Numeric PIN Modes</span>
    </h1>
    <p style="font-size: 18px; color: #94a3b8; line-height: 1.6; margin-bottom: 34px; max-width: 520px;">
      Generate uncrackable passwords, memorable word-based passphrases, or secure banking PINs in a single click.
    </p>
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: #e2e8f0;">
        <span style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #10b981; color: #000; font-weight: 800; font-size: 14px;">✓</span>
        <span><strong>Live Entropy & Crack Time:</strong> Visual brute-force difficulty calculation</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: #e2e8f0;">
        <span style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #10b981; color: #000; font-weight: 800; font-size: 14px;">✓</span>
        <span><strong>Eye Toggle Masking:</strong> Protect passwords against shoulder-surfers</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: #e2e8f0;">
        <span style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #10b981; color: #000; font-weight: 800; font-size: 14px;">✓</span>
        <span><strong>Exclude Ambiguous Characters:</strong> Filter out confusing chars (e.g. 0O1lI)</span>
      </div>
    </div>
  </div>

  <div style="width: 500px; display: flex; align-items: center; justify-content: center; padding-right: 60px; z-index: 2;">
    <!-- Mocked Popup Window -->
    <div style="width: 370px; background: #111827; border: 1px solid #374151; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); overflow: hidden;">
      <div style="padding: 18px 20px; border-bottom: 1px solid #1f2937; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 32px; height: 32px; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #10b981;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <div>
            <div style="font-weight: 700; font-size: 15px; color: #f9fafb;">PassGen</div>
            <div style="font-size: 11px; color: #9ca3af;">Password Generator</div>
          </div>
        </div>
        <div style="background: #1f2937; padding: 4px 10px; border-radius: 6px; font-size: 11px; color: #9ca3af; border: 1px solid #374151;">English</div>
      </div>

      <!-- Mode pills -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; padding: 14px 20px 0;">
        <div style="padding: 7px; text-align: center; border-radius: 6px; background: #10b981; color: #064e3b; font-weight: 700; font-size: 12px;">Random</div>
        <div style="padding: 7px; text-align: center; border-radius: 6px; background: #1f2937; color: #9ca3af; font-weight: 500; font-size: 12px; border: 1px solid #374151;">Passphrase</div>
        <div style="padding: 7px; text-align: center; border-radius: 6px; background: #1f2937; color: #9ca3af; font-weight: 500; font-size: 12px; border: 1px solid #374151;">PIN</div>
      </div>

      <!-- Password box -->
      <div style="padding: 16px 20px;">
        <div style="background: #1f2937; border: 1px solid #374151; border-radius: 10px; padding: 14px; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-family: monospace; font-size: 16px; font-weight: 700; color: #10b981; letter-spacing: 1px;">K8#mQ9$vL2!xR5@w</span>
          <div style="display: flex; gap: 8px;">
            <div style="width: 28px; height: 28px; border-radius: 6px; background: #374151; display: flex; align-items: center; justify-content: center; color: #9ca3af;">👁</div>
            <div style="width: 28px; height: 28px; border-radius: 6px; background: #10b981; display: flex; align-items: center; justify-content: center; color: #064e3b; font-weight: bold;">📋</div>
          </div>
        </div>

        <div style="margin-top: 10px; height: 4px; background: #374151; border-radius: 2px; overflow: hidden;">
          <div style="width: 100%; height: 100%; background: #10b981;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 11px;">
          <span style="color: #10b981; font-weight: 600;">Very Strong (128-bit)</span>
          <span style="color: #9ca3af;">Crack: ~34 million centuries</span>
        </div>

        <!-- Controls -->
        <div style="margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; font-size: 12px; color: #d1d5db; margin-bottom: 6px;">
            <span>Length:</span>
            <span style="font-weight: 700; color: #10b981;">16</span>
          </div>
          <div style="height: 6px; background: #374151; border-radius: 3px; position: relative;">
            <div style="width: 35%; height: 100%; background: #10b981; border-radius: 3px;"></div>
            <div style="position: absolute; left: 35%; top: -5px; width: 16px; height: 16px; border-radius: 50%; background: #ffffff; box-shadow: 0 2px 5px rgba(0,0,0,0.5);"></div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 16px; font-size: 12px; color: #d1d5db;">
          <div style="display: flex; align-items: center; gap: 6px;"><span style="color:#10b981;">☑</span> Uppercase (A-Z)</div>
          <div style="display: flex; align-items: center; gap: 6px;"><span style="color:#10b981;">☑</span> Lowercase (a-z)</div>
          <div style="display: flex; align-items: center; gap: 6px;"><span style="color:#10b981;">☑</span> Numbers (0-9)</div>
          <div style="display: flex; align-items: center; gap: 6px;"><span style="color:#10b981;">☑</span> Symbols (!@#$)</div>
        </div>

        <div style="margin-top: 18px;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; text-align: center; font-weight: 700; font-size: 14px; padding: 12px; border-radius: 8px; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">
            ⚡ Generate Password
          </div>
        </div>
      </div>
    </div>
  </div>
`);

// ── Screenshot 2: Context Menu & Autofill ─────────────────────────────────────
const html2 = wrapHtml(`
  <div style="flex: 1; padding: 70px 60px; display: flex; flex-direction: column; justify-content: center; z-index: 2;">
    <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.4); border-radius: 20px; padding: 6px 14px; color: #3b82f6; font-weight: 700; font-size: 13px; letter-spacing: 1px; width: fit-content; margin-bottom: 20px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
      RIGHT-CLICK AUTOFILL & SHORTCUT
    </div>
    <h1 style="font-size: 46px; font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 20px; color: #ffffff;">
      Right-Click to Generate &<br><span style="background: linear-gradient(135deg, #3b82f6, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Autofill Instantly</span>
    </h1>
    <p style="font-size: 18px; color: #94a3b8; line-height: 1.6; margin-bottom: 34px; max-width: 520px;">
      Never leave your registration or login form. Right-click on any password input field or press <code style="background:#1f2937; padding:3px 8px; border-radius:4px; color:#10b981; border:1px solid #374151;">Alt+Shift+G</code>.
    </p>
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: #e2e8f0;">
        <span style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #3b82f6; color: #fff; font-weight: 800; font-size: 14px;">✓</span>
        <span><strong>Browser Password Manager Sync:</strong> Triggers Chrome/Brave's native save prompt</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: #e2e8f0;">
        <span style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #3b82f6; color: #fff; font-weight: 800; font-size: 14px;">✓</span>
        <span><strong>Modern Web Compatibility:</strong> Dispatches full synthetic events for React/Vue</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: #e2e8f0;">
        <span style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #3b82f6; color: #fff; font-weight: 800; font-size: 14px;">✓</span>
        <span><strong>Zero-Permission Footprint:</strong> Injected strictly on-demand without invasive tracking</span>
      </div>
    </div>
  </div>

  <div style="width: 540px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding-right: 50px; z-index: 2; position: relative;">
    <!-- Mocked Web Form -->
    <div style="width: 440px; background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
      <div style="font-size: 18px; font-weight: 700; color: #f8fafc; margin-bottom: 4px;">Create New Account</div>
      <div style="font-size: 13px; color: #94a3b8; margin-bottom: 20px;">Join millions of secure developers</div>
      
      <div style="margin-bottom: 14px;">
        <label style="display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 6px;">Email Address</label>
        <div style="background: #0f172a; border: 1px solid #334155; border-radius: 6px; padding: 10px 12px; font-size: 14px; color: #94a3b8;">user@domain.com</div>
      </div>

      <div style="position: relative;">
        <label style="display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 6px;">Choose Password</label>
        <div style="background: #0f172a; border: 2px solid #10b981; border-radius: 6px; padding: 10px 12px; font-size: 14px; color: #10b981; font-family: monospace; font-weight: bold;">
          ••••••••••••••••
        </div>

        <!-- Simulated Context Menu -->
        <div style="position: absolute; top: 35px; right: -40px; width: 230px; background: #0f172a; border: 1px solid #334155; border-radius: 8px; box-shadow: 0 15px 30px rgba(0,0,0,0.8); z-index: 10; padding: 6px 0; font-size: 13px;">
          <div style="padding: 6px 14px; color: #94a3b8; display: flex; align-items: center; gap: 8px;">Cut</div>
          <div style="padding: 6px 14px; color: #94a3b8; display: flex; align-items: center; gap: 8px;">Copy</div>
          <div style="padding: 6px 14px; color: #94a3b8; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #1e293b;">Paste</div>
          <div style="padding: 8px 14px; background: #1e293b; color: #10b981; font-weight: 600; display: flex; align-items: center; gap: 8px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Generate Password
          </div>
        </div>
      </div>
    </div>

    <!-- Simulated Toast -->
    <div style="margin-top: 24px; width: 340px; background: #111827; border: 1px solid #374151; border-left: 4px solid #10b981; border-radius: 8px; padding: 12px 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
      <div style="color: #10b981;">
        <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
      </div>
      <div>
        <div style="font-weight: 600; color: #f9fafb; font-size: 13px;">Password Generated</div>
        <div style="font-size: 11px; color: #9ca3af;">Copied to clipboard & pasted to field.</div>
      </div>
    </div>
  </div>
`);

// ── Screenshot 3: Privacy & History ──────────────────────────────────────────
const html3 = wrapHtml(`
  <div style="flex: 1; padding: 70px 60px; display: flex; flex-direction: column; justify-content: center; z-index: 2;">
    <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(168,85,247,0.15); border: 1px solid rgba(168,85,247,0.4); border-radius: 20px; padding: 6px 14px; color: #a855f7; font-weight: 700; font-size: 13px; letter-spacing: 1px; width: fit-content; margin-bottom: 20px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      100% OFFLINE & PRIVATE
    </div>
    <h1 style="font-size: 46px; font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 20px; color: #ffffff;">
      Zero Tracking, Zero Telemetry,<br><span style="background: linear-gradient(135deg, #a855f7, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Local Encrypted Storage</span>
    </h1>
    <p style="font-size: 18px; color: #94a3b8; line-height: 1.6; margin-bottom: 34px; max-width: 520px;">
      Everything runs strictly inside your local browser instance. No accounts, no external servers, no cloud storage.
    </p>
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: #e2e8f0;">
        <span style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #a855f7; color: #fff; font-weight: 800; font-size: 14px;">✓</span>
        <span><strong>Configurable Auto-Clean:</strong> Automatically wipe history daily, weekly, or monthly</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: #e2e8f0;">
        <span style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #a855f7; color: #fff; font-weight: 800; font-size: 14px;">✓</span>
        <span><strong>6 Languages Supported:</strong> English, Turkish, Spanish, French, Russian, Chinese</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: #e2e8f0;">
        <span style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #a855f7; color: #fff; font-weight: 800; font-size: 14px;">✓</span>
        <span><strong>Completely Open Source:</strong> Auditable, transparent, and developer-verified</span>
      </div>
    </div>
  </div>

  <div style="width: 500px; display: flex; align-items: center; justify-content: center; padding-right: 60px; z-index: 2;">
    <!-- Mocked Popup History Window -->
    <div style="width: 370px; background: #111827; border: 1px solid #374151; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); overflow: hidden;">
      <div style="padding: 16px 20px; border-bottom: 1px solid #1f2937; display: flex; align-items: center; justify-content: space-between;">
        <div style="font-weight: 700; font-size: 15px; color: #f9fafb;">Password History</div>
        <div style="color: #ef4444; font-size: 12px; font-weight: 600; cursor: pointer;">Clear All</div>
      </div>

      <div style="padding: 16px 20px; display: flex; flex-direction: column; gap: 10px;">
        <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-family: monospace; font-size: 13px; color: #9ca3af;">••••••••••••••••</span>
          <div style="display: flex; gap: 8px;">
            <span style="font-size: 12px; color: #9ca3af;">👁</span>
            <span style="font-size: 12px; color: #10b981;">📋</span>
          </div>
        </div>
        <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-family: monospace; font-size: 13px; color: #9ca3af;">••••••••••••••••</span>
          <div style="display: flex; gap: 8px;">
            <span style="font-size: 12px; color: #9ca3af;">👁</span>
            <span style="font-size: 12px; color: #10b981;">📋</span>
          </div>
        </div>
        <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-family: monospace; font-size: 13px; color: #9ca3af;">••••••••••••••••</span>
          <div style="display: flex; gap: 8px;">
            <span style="font-size: 12px; color: #9ca3af;">👁</span>
            <span style="font-size: 12px; color: #10b981;">📋</span>
          </div>
        </div>
      </div>

      <div style="padding: 0 20px 20px;">
        <div style="background: rgba(16,185,129,0.05); border: 1px dashed rgba(16,185,129,0.3); border-radius: 10px; padding: 14px;">
          <div style="font-weight: 600; font-size: 13px; color: #10b981; margin-bottom: 4px;">Security Audit</div>
          <div style="font-size: 11px; color: #94a3b8; line-height: 1.5;">
            Zero analytics trackers detected. All entries stay strictly in local storage.
          </div>
        </div>
      </div>
    </div>
  </div>
`);

// ── Promo Tile: 440x280 ───────────────────────────────────────────────────────
const htmlPromo = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 440px;
    height: 280px;
    background: radial-gradient(circle at center, #111827 0%, #030712 100%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #f3f4f6;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
  }
  .grid-bg {
    position: absolute;
    inset: 0;
    background-size: 24px 24px;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    pointer-events: none;
  }
</style>
</head>
<body>
<div class="grid-bg"></div>
<div style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center;">
  <div style="width: 72px; height: 72px; background: rgba(16,185,129,0.15); border: 2px solid #10b981; border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #10b981; margin-bottom: 14px; box-shadow: 0 10px 25px rgba(16,185,129,0.3);">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
  </div>
  <div style="font-size: 32px; font-weight: 800; color: #f9fafb; letter-spacing: -0.5px; margin-bottom: 4px;">PassGen</div>
  <div style="font-size: 14px; font-weight: 600; color: #10b981; margin-bottom: 12px;">Secure Password Generator</div>
  <div style="font-size: 12px; color: #94a3b8; display: flex; align-items: center; gap: 8px;">
    <span>Right-Click Autofill</span>
    <span style="color: #10b981;">•</span>
    <span>3 Modes</span>
    <span style="color: #10b981;">•</span>
    <span>100% Offline</span>
  </div>
</div>
</body>
</html>`;

// ── Render & Screenshot Execution ────────────────────────────────────────────
function capture(htmlContent, filename, w = 1280, h = 800) {
  const tempHtml = path.join(ASSETS_DIR, `temp_${path.parse(filename).name}.html`);
  const outPng = path.join(ASSETS_DIR, filename);
  
  fs.writeFileSync(tempHtml, htmlContent, "utf8");
  
  const cmd = `"${CHROME}" --headless --disable-gpu --window-size=${w},${h} --screenshot="${outPng}" "file:///${tempHtml.replace(/\\/g, "/")}"`;
  execSync(cmd, { stdio: "ignore" });
  
  if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
  console.log(`Generated: ${filename} (${w}x${h})`);
}

console.log("Generating Chrome Web Store visual assets...");
capture(html1, "screenshot1_modes_1280x800.png", 1280, 800);
capture(html2, "screenshot2_context_menu_1280x800.png", 1280, 800);
capture(html3, "screenshot3_privacy_history_1280x800.png", 1280, 800);
capture(htmlPromo, "promo_tile_440x280.png", 440, 280);

// Also copy icon128.png to store_assets for easy 1-folder convenience
fs.copyFileSync(path.join(__dirname, "icons", "icon128.png"), path.join(ASSETS_DIR, "icon_128x128.png"));
console.log("Copied: icon_128x128.png");

console.log("All visual store assets generated successfully!");
