
// Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// AOS
AOS.init();

// Sticky second-nav
const secondNav = document.getElementById("second-nav");
const HIDE_SECOND_NAV_SCROLL_THRESHOLD = 80;

lenis.on("scroll", ({ scroll }) => {
  if (scroll > HIDE_SECOND_NAV_SCROLL_THRESHOLD) {
    secondNav.classList.remove("-translate-y-full", "opacity-0", "pointer-events-none");
    secondNav.classList.add("translate-y-0", "opacity-100", "pointer-events-auto");
  } else {
    secondNav.classList.remove("translate-y-0", "opacity-100", "pointer-events-auto");
    secondNav.classList.add("-translate-y-full", "opacity-0", "pointer-events-none");
  }
});

// Mobile menu 
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuButton = document.getElementById("close-menu-button");
const toggleMenuButtons = document.querySelectorAll("#toggle-menu-button");

function toggleMobileMenu() {
  if (window.innerWidth >= 768) return;

  if (mobileMenu.classList.contains("pointer-events-none")) {
    mobileMenu.classList.remove("opacity-0", "translate-y-8", "pointer-events-none");
    mobileMenu.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
  } else {
    mobileMenu.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
    mobileMenu.classList.add("opacity-0", "translate-y-8", "pointer-events-none");
  }
}

toggleMenuButtons.forEach((btn) => {
  btn.addEventListener("click", toggleMobileMenu);
});

if (closeMenuButton) {
  closeMenuButton.addEventListener("click", toggleMobileMenu);
}


// number run — only on community page
const countMembersEl = document.querySelector('#count-members');
if (countMembersEl) {
  const statsSection = countMembersEl.closest('section');
  let counted = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;

      new countUp.CountUp('count-members', 120, {
        duration: 2.5,
        useEasing: true,
        easingFn: (t, b, c, d) => {
          // ease out expo
          return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
      }).start();

      new countUp.CountUp('count-chapters', 340, {
        duration: 2.2,
        startVal: 0,
      }).start();

      new countUp.CountUp('count-countries', 58, {
        duration: 1.8,
        startVal: 0,
      }).start();
    }
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}
