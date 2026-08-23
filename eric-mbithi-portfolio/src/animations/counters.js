import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initCounters() {
  document.querySelectorAll(".counter").forEach(el => {
    const target = +el.dataset.target;
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el, start: "top 90%", once: true,
      onEnter: () => gsap.to(obj, {
        val: target, duration: 1.6, ease: "power2.out",
        onUpdate: () => el.textContent = Math.floor(obj.val)
      })
    });
  });
}
