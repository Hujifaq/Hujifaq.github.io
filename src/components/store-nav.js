// ─── Store-only Navigation ──────────────────────────────────────────
// Includes: promotion marquee bar, white navbar with black logo,
// daisyUI megamenu for "Shop", search overlay, account & cart icons.

class StoreNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Promotion -->
      <div class="bg-black text-white overflow-hidden whitespace-nowrap select-none" id="promo-bar">
        <div class="inline-flex animate-marquee gap-16 py-2 text-xs font-semibold tracking-wide">
          <span>Free shipping on orders over $150 ✦</span>
          <span>Every day is day one. You are not bound by yesterday — you get to decide who you are ✦</span>
          <span>New arrivals: Performance Windbreaker now available ✦</span>
          <span>Free shipping on orders over $150 ✦</span>
          <span>Every day is day one. You are not bound by yesterday — you get to decide who you are ✦</span>
          <span>New arrivals: Performance Windbreaker now available ✦</span>
        </div>
      </div>

      <!-- Main navbar -->
      <nav class="sticky backdrop-blur-sm top-0 z-50 bg-base-200/50" id="store-main-nav">
        <div class="flex items-center justify-between px-6 md:px-10 py-2">

         
          <div class="flex items-center gap-12">
            <a href="index.html" class="shrink-0">
              <img src="assests/black_logo.png" alt="Trace" class="h-16 md:h-16 w-auto">
            </a>

            <ul class="items-center gap-2 text-sm font-semibold md:gap-8 md:text-base hidden md:flex text-black">
              <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-black/10" href="about.html">About</a></li>
              <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-black/10" href="brands.html">Brands</a></li>
              <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-black/10" href="community.html">Community</a></li>
              <li>
                <button class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-black/10 flex items-center cursor-pointer" popovertarget="store-megamenu">
                  Store
                  <svg class="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
              </li>
            </ul>
          </div>

          <!-- Right icons -->
          <div class="flex items-center gap-2">
            <!-- Language dropdown -->
            <button class="btn btn-ghost font-medium text-sm hover:bg-transparent px-2 hidden sm:flex">
                English
                <svg class="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            
            <!-- Search toggle -->
            <button class="btn btn-ghost btn-circle btn-sm" id="store-search-toggle" aria-label="Search">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path stroke-linecap="round" d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <!-- Account -->
            <a href="#" class="btn btn-ghost btn-circle btn-sm" aria-label="Account">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"/>
              </svg>
            </a>
            <!-- Cart -->
            <a href="#" class="btn btn-ghost btn-circle btn-sm" aria-label="Cart">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"/>
              </svg>
            </a>
            <!-- Mobile menu toggle -->
            <button class="btn btn-ghost btn-circle btn-sm sm:hidden" id="store-mobile-toggle" aria-label="Menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            </button>
          </div>

        </div>
      </nav>

      <!-- Megamenu popover (daisyUI) -->
      <div class="megamenu max-sm:megamenu-vertical megamenu-wide p-2 border border-base-300 bg-base-100 rounded-box" id="store-megamenu" popover>
        <span class="megamenu-active"></span>



        <button popovertarget="mega-apparel">Apparel</button>
        <div id="mega-apparel" popover>
          <div class="flex max-sm:flex-col items-start">
            <ul class="menu w-full md:menu-horizontal">
              <li>
                <a class="font-bold">Jackets</a>
                <ul>
                  <li><a href="#" data-filter="Apparel">Windbreakers</a></li>
                  <li><a href="#" data-filter="Apparel">Shell Jackets</a></li>
                  <li><a href="#" data-filter="Apparel">Insulated</a></li>
                </ul>
              </li>
              <li>
                <a class="font-bold">Base Layers</a>
                <ul>
                  <li><a href="#" data-filter="Apparel">Merino Wool</a></li>
                  <li><a href="#" data-filter="Apparel">Synthetic</a></li>
                  <li><a href="#" data-filter="Apparel">T-Shirts</a></li>
                  <li><a href="#" data-filter="Apparel">Tights & Shorts</a></li>
                </ul>
              </li>
            </ul>
            <img src="assests/dummy5.jpg" class="md:max-w-xs max-md:w-auto rounded-lg object-cover aspect-video" alt="Trace Apparel">
          </div>
        </div>

        <button popovertarget="mega-accessories">Accessories</button>
        <div id="mega-accessories" popover>
          <div class="flex max-sm:flex-col items-start">
            <ul class="menu w-full md:menu-horizontal">
              <li>
                <ul>
                  <li class="menu-title">Packs & Hydration</li>
                  <li><a href="#" data-filter="Accessories">Running Vests</a></li>
                  <li><a href="#" data-filter="Accessories">Hydration Flasks</a></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li class="menu-title">Headwear & Gloves</li>
                  <li><a href="#" data-filter="Accessories">Caps</a></li>
                  <li><a href="#" data-filter="Accessories">Beanies</a></li>
                  <li><a href="#" data-filter="Accessories">Running Gloves</a></li>
                </ul>
              </li>
            </ul>
            <img src="assests/Dummy3.jpg" class="md:max-w-xs max-md:w-auto rounded-lg object-cover aspect-video" alt="Trace Accessories">
          </div>
        </div>
      </div>

      <!-- Search overlay modal -->
      <div class="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 flex items-start justify-center pt-24 px-4" id="store-search-overlay">
        <div class="bg-white w-full max-w-2xl p-8 rounded-2xl transform scale-95 opacity-0 transition-all duration-300 shadow-2xl relative" id="store-search-panel">
          
          <div class="flex items-center border-b-2 border-black pb-2">
            <input type="text" id="store-search-input" placeholder="Search for..."
                   class="w-full text-2xl font-medium focus:outline-none bg-transparent placeholder:text-gray-400 text-black border-none focus:ring-0 px-0"
                   autocomplete="off">
            <button class="btn btn-ghost btn-circle btn-sm ml-4 text-black hover:bg-black/10" id="store-search-close" aria-label="Close search">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <!-- Live search results -->
          <div class="mt-4 max-h-[50vh] overflow-y-auto pr-2" id="store-search-results"></div>
        </div>
      </div>

      <!-- Mobile menu overlay -->
      <div class="fixed inset-2 z-[100] flex flex-col bg-black/92 backdrop-blur-lg font-sans text-white shadow-2xl transition-all duration-300 ease-out opacity-0 pointer-events-none rounded-2xl sm:hidden" id="store-mobile-overlay">
        <button id="store-mobile-close" class="absolute right-5 top-5 text-gray-400 transition-colors duration-50 cursor-pointer hover:text-white hover:scale-105 hover:bg-white/10 rounded-full p-2" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="mb-14 mt-20 flex justify-center">
          <a href="index.html">
            <img src="assests/2.svg" alt="Trace Logo" class="h-18 w-18">
          </a>
        </div>
        <nav class="w-full px-4 mt-8">
          <ul class="menu w-full rounded-box text-white">
            <!-- First Dropdown: Nav Bar -->
            <li>
              <details open>
                <summary class="text-2xl font-bold py-4 hover:bg-white/10 rounded-xl">Menu</summary>
                <ul class="pl-4 border-l border-white/20 ml-2 mt-2">
                  <li><a href="about.html" class="text-xl py-3 hover:bg-white/10 rounded-xl">About</a></li>
                  <li><a href="brands.html" class="text-xl py-3 hover:bg-white/10 rounded-xl">Brands</a></li>
                  <li><a href="community.html" class="text-xl py-3 hover:bg-white/10 rounded-xl">Community</a></li>
                  <li><a href="store.html" class="text-xl py-3 hover:bg-white/10 rounded-xl">Store</a></li>
                </ul>
              </details>
            </li>
            
            <!-- Second Dropdown: Filter Products -->
            <li>
              <details>
                <summary class="text-2xl font-bold py-4 mt-2 hover:bg-white/10 rounded-xl">Filter Products</summary>
                <ul class="pl-4 border-l border-white/20 ml-2 mt-2">
                  <li><a href="#" onclick="document.querySelector('#store-mobile-close').click();" data-mobile-filter="All" class="text-xl py-3 hover:bg-white/10 rounded-xl">All Products</a></li>
                  <li><a href="#" onclick="document.querySelector('#store-mobile-close').click();" data-mobile-filter="Apparel" class="text-xl py-3 hover:bg-white/10 rounded-xl">Apparel</a></li>
                  <li><a href="#" onclick="document.querySelector('#store-mobile-close').click();" data-mobile-filter="Accessories" class="text-xl py-3 hover:bg-white/10 rounded-xl">Accessories</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </div>
    `;

    this._initSearch();
    this._initMobileMenu();
  }

  // ── Search overlay logic ──────────────────────────────────────────
  _initSearch() {
    const toggle = this.querySelector("#store-search-toggle");
    const overlay = this.querySelector("#store-search-overlay");
    const panel = this.querySelector("#store-search-panel");
    const close = this.querySelector("#store-search-close");
    const input = this.querySelector("#store-search-input");
    const resultsContainer = this.querySelector("#store-search-results");

    const open = () => {
      overlay.classList.remove("opacity-0", "pointer-events-none");
      overlay.classList.add("opacity-100", "pointer-events-auto");
      panel.classList.remove("scale-95", "opacity-0");
      panel.classList.add("scale-100", "opacity-100");
      input.focus();
    };
    const shut = () => {
      overlay.classList.add("opacity-0", "pointer-events-none");
      overlay.classList.remove("opacity-100", "pointer-events-auto");
      panel.classList.add("scale-95", "opacity-0");
      panel.classList.remove("scale-100", "opacity-100");
      input.value = "";
      resultsContainer.innerHTML = "";
    };

    toggle.addEventListener("click", open);
    close.addEventListener("click", shut);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) shut(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") shut(); });

    // Live search
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { resultsContainer.innerHTML = ""; return; }
      if (typeof PRODUCTS === "undefined") return;

      const matches = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = '<p class="py-4 text-base-content/50 text-center">No products found.</p>';
        return;
      }

      resultsContainer.innerHTML = matches
        .map(
          (p) => `
        <a href="product.html?id=${p.id}" class="flex items-center gap-4 p-3 rounded-lg hover:bg-base-200 transition-colors" onclick="document.querySelector('#store-search-close').click();">
          <img src="${p.images[0]}" alt="${p.name}" class="w-14 h-14 rounded-lg object-cover shrink-0" style="mix-blend-mode: multiply;">
          <div class="flex-1 min-w-0">
            <p class="font-semibold truncate">${p.name}</p>
            <p class="text-sm text-base-content/50">${p.category}</p>
          </div>
          <p class="font-semibold shrink-0">€${p.price},90</p>
        </a>`
        )
        .join("");
    });
  }

  // ── Mobile slide menu ─────────────────────────────────────────────
  _initMobileMenu() {
    const toggle = this.querySelector("#store-mobile-toggle");
    const overlay = this.querySelector("#store-mobile-overlay");
    const close = this.querySelector("#store-mobile-close");

    if (!toggle || !overlay) return;

    const open = () => {
      overlay.classList.remove("opacity-0", "pointer-events-none");
      overlay.classList.add("opacity-100", "pointer-events-auto");
    };
    const shut = () => {
      overlay.classList.add("opacity-0", "pointer-events-none");
      overlay.classList.remove("opacity-100", "pointer-events-auto");
    };

    toggle.addEventListener("click", open);
    close.addEventListener("click", shut);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) shut(); });
  }
}

customElements.define("store-nav", StoreNav);
