(function () {
  if (document.getElementById("passgen-toast-style")) return;

  const style = document.createElement("style");
  style.id = "passgen-toast-style";
  style.textContent = `
    #passgen-toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 2147483647;
      background: #111827;
      color: #f9fafb;
      border: 1px solid #374151;
      border-left: 3px solid #10b981;
      border-radius: 8px;
      padding: 10px 16px;
      min-width: 220px;
      max-width: 320px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 10px;
      opacity: 0;
      transform: translateX(110%);
      transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      pointer-events: none;
    }
    #passgen-toast.show { opacity: 1; transform: translateX(0); }
    #passgen-toast .pg-icon { flex-shrink:0; width:20px; height:20px; color:#10b981; }
    #passgen-toast .pg-title { font-weight:600; color:#f9fafb; font-size:13px; }
    #passgen-toast .pg-sub { font-size:11px; color:#9ca3af; margin-top:2px; }
  `;
  document.documentElement.appendChild(style);

  const SVG = `<svg class="pg-icon" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
  </svg>`;

  function getToast() {
    let t = document.getElementById("passgen-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "passgen-toast";
      t.innerHTML = SVG + '<div class="pg-body"></div>';
      document.documentElement.appendChild(t);
    }
    return t;
  }

  let timer = null;

  // title and sub are passed from background.js (şifre gizlilik gereği ekranda gösterilmez)
  window.__passgenToast = function (_password, title, sub) {
    const toast = getToast();
    const body  = toast.querySelector(".pg-body");
    
    body.textContent = "";
    
    const divTitle = document.createElement("div");
    divTitle.className = "pg-title";
    divTitle.textContent = title || "Password Generated";

    const divSub = document.createElement("div");
    divSub.className = "pg-sub";
    divSub.textContent = sub || "Copied to clipboard.";

    body.appendChild(divTitle);
    body.appendChild(divSub);

    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove("show"), 2600);
  };

  // Sağ tıklanan hedefi sakla (odaklanma kaçsa bile tam o kutuya yazabilmek için)
  document.addEventListener("contextmenu", function (e) {
    window.__passgenLastTarget = e.target;
  }, true);
})();
