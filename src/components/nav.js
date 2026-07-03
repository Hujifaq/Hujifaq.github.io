// Primary hero nav (inside the hero <main>)
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav data-hero-nav
          class="flex items-center justify-between md:py-6 md:px-10 md:pt-2 bg-black/50 backdrop-blur-md rounded-2xl m-5 p-0 md:bg-transparent md:backdrop-blur-none md:m-0 md:rounded-none"
          id="primary-nav">
        <a href="index.html" class="flex items-center pl-5 md:pl-0">
          <img src="assests/1.svg" alt="Trace Logo" class="h-16 w-auto object-full block md:h-20 lg:h-24">
        </a>
        <ul class="items-center gap-2 text-sm font-semibold md:gap-8 md:text-base hidden md:flex">
          <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-white/20" href="about.html">About</a></li>
          <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-white/20" href="brands.html">Brands</a></li>
          <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-white/20" href="community.html">Community</a></li>
          <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-white/20" href="store.html">Store</a></li>
        </ul>
        <button class="md:hidden pr-4 cursor-pointer" id="toggle-menu-button">Menu +</button>
      </nav>
    `;
  }
}

// second nav 
class SiteSecondNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="second-nav"
          class="fixed top-4 left-0 z-50 w-full px-4 transition-all duration-100 md:duration-150 ease-in-out -translate-y-full opacity-0 pointer-events-none">

        <div class="flex items-center justify-between w-full md:hidden pointer-events-auto">
          <a href="index.html"
              class="flex items-center justify-center w-11 h-11 bg-black/80 backdrop-blur-md text-white rounded-2xl shadow-md transition-transform active:scale-95">
            <img class="w-5 h-5 object-contain" src="assests/2.svg" alt="logo">
          </a>
          <button
              class="flex items-center gap-2 bg-black/80 backdrop-blur-md text-white px-5 py-2.5 rounded-full shadow-md font-semibold text-[15px] transition-transform active:scale-95 hover:scale-102 cursor-pointer"
              id="toggle-menu-button">
            <span>Menu +</span>
          </button>
        </div>

        <div class="hidden md:flex justify-center w-full pointer-events-auto">
          <div class="flex items-center gap-6 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-lg">
            <a href="index.html" class="flex items-center">
              <img class="w-6 h-6 object-contain" src="assests/2.svg" alt="logo">
            </a>
            <ul class="items-center gap-2 text-sm font-semibold md:gap-8 md:text-base hidden md:flex">
              <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-white/20" href="about.html">About</a></li>
              <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-white/20" href="brands.html">Brands</a></li>
              <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-white/20" href="community.html">Community</a></li>
              <li><a class="block rounded-xl px-2 py-1 transition-all duration-150 ease-in-out hover:bg-white/20" href="store.html">Store</a></li>
            </ul>
          </div>
        </div>

      </nav>
    `;
  }
}

// Mobile menu overlay
class SiteMobileMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="fixed inset-2 z-100 flex flex-col bg-black/92 backdrop-blur-lg font-sans text-white shadow-2xl transition-all duration-300 ease-out opacity-0 pointer-events-none rounded-2xl"
          id="mobile-menu">

        <button id="close-menu-button"
            class="absolute right-5 top-5 text-gray-400 transition-colors duration-50 cursor-pointer hover:text-white hover:scale-105 hover:bg-white/10 rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="mb-14 mt-20 flex justify-center">
          <a href="index.html">
            <img src="assests/2.svg" alt="Trace Logo" class="h-18 w-18">
          </a>
        </div>

        <nav class="w-full px-8">
          <ul class="flex w-full flex-col">
            <li class="border-b border-white/20">
              <a href="about.html" class="block py-4 text-xl font-bold tracking-tight hover:text-gray-300">About</a>
            </li>
            <li class="border-b border-white/20">
              <a href="brands.html" class="block py-4 text-xl font-bold tracking-tight hover:text-gray-300">Brands</a>
            </li>
            <li class="border-b border-white/20">
              <a href="community.html" class="block py-4 text-xl font-bold tracking-tight hover:text-gray-300">Community</a>
            </li>
            <li class="border-b border-white/20">
              <a href="store.html" class="flex items-center justify-between py-4 text-xl font-bold tracking-tight hover:text-gray-300">Store</a>
            </li>
          </ul>
        </nav>

      </div>
    `;
  }
}

customElements.define('site-nav', SiteNav);
customElements.define('site-second-nav', SiteSecondNav);
customElements.define('site-mobile-menu', SiteMobileMenu);
