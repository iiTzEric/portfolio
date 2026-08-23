import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initHero() {
  // Scroll progress bar across the top of the page
  gsap.to("#progress", {
    width: "100%",
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 }
  });

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.from(".hero-eyebrow", { opacity: 0, y: 14, duration: .6 })
    .from("#heroTitle .line span", { yPercent: 120, duration: 1, stagger: .12 }, "-=.3")
    .from(".hero-sub p, .hero-stack", { opacity: 0, y: 18, duration: .7, stagger: .1 }, "-=.4")
    .from(".scroll-cue, .hero-coord", { opacity: 0, duration: .6 }, "-=.4")
    .from("nav", { opacity: 0, y: -14, duration: .5 }, "-=.8");

  // subtle parallax drift on hero title while scrolling
  gsap.to("#heroTitle", {
    yPercent: -14,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });
}
