import { gsap } from "gsap";
import { marqueeWords } from "../data/projects.js";

export function initMarquee() {
  const track = document.getElementById("marquee");
  if (!track) return;

  // duplicate the word set so the loop is seamless
  const words = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];
  track.innerHTML = words.map(w => `<span>${w}</span>`).join("");

  gsap.to(track, {
    xPercent: -50,
    duration: 14,
    ease: "none",
    repeat: -1
  });
}
