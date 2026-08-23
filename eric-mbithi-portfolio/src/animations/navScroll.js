import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export function initNavScroll() {
  document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 0 }, ease: "power3.inOut" });
      }
    });
  });
}
