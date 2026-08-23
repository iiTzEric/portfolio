import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initScrollReveals() {
  // section headings
  gsap.utils.toArray(".section-head").forEach(head => {
    gsap.from(head.children, {
      opacity: 0, y: 30, duration: .8, stagger: .1, ease: "power3.out",
      scrollTrigger: { trigger: head, start: "top 85%" }
    });
  });

  // about text + stats
  gsap.from(".about-text p", {
    opacity: 0, y: 24, duration: .9, ease: "power3.out",
    scrollTrigger: { trigger: ".about-text", start: "top 80%" }
  });
  gsap.from(".about-side .stat", {
    opacity: 0, x: 24, duration: .7, stagger: .12,
    scrollTrigger: { trigger: ".about-side", start: "top 80%" }
  });

  // project rows (rendered dynamically, so query after render)
  gsap.utils.toArray(".project").forEach(proj => {
    gsap.from(proj, {
      opacity: 0, y: 50, duration: .8, ease: "power3.out",
      scrollTrigger: { trigger: proj, start: "top 88%" }
    });
  });

  // skills rows
  gsap.utils.toArray(".skill-row").forEach(row => {
    gsap.from(row, {
      opacity: 0, x: -18, duration: .5, ease: "power2.out",
      scrollTrigger: { trigger: row, start: "top 92%" }
    });
  });

  // contact
  gsap.from(".contact h2", {
    opacity: 0, y: 40, duration: 1, ease: "power4.out",
    scrollTrigger: { trigger: ".contact", start: "top 70%" }
  });
  gsap.from(".contact-links a", {
    opacity: 0, y: 16, duration: .6, stagger: .08,
    scrollTrigger: { trigger: ".contact-links", start: "top 90%" }
  });
}
