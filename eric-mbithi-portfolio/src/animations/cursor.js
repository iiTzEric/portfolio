import { gsap } from "gsap";

export function initCursor() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");

  if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) {
    dot.style.display = "none";
    ring.style.display = "none";
    return;
  }

  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
  });

  gsap.ticker.add(() => {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
  });

  // Re-bind hover targets whenever DOM changes (projects render after this runs)
  const bindHoverTargets = () => {
    document.querySelectorAll("a, .project, .counter").forEach(el => {
      el.addEventListener("mouseenter", () => {
        ring.style.width = "64px";
        ring.style.height = "64px";
        ring.style.borderColor = "#FF4D6D";
      });
      el.addEventListener("mouseleave", () => {
        ring.style.width = "38px";
        ring.style.height = "38px";
        ring.style.borderColor = "#F2EFE9";
      });
    });
  };

  // run once now, and again shortly after in case projects rendered later
  bindHoverTargets();
  setTimeout(bindHoverTargets, 200);
}
