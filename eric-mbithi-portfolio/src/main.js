import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import "./styles/main.css";
import "./styles/hero.css";
import "./styles/projects.css";
import "./styles/contact.css";

import { renderProjects } from "./animations/renderProjects.js";
import { initCursor } from "./animations/cursor.js";
import { initHero } from "./animations/hero.js";
import { initMarquee } from "./animations/marquee.js";
import { initCounters } from "./animations/counters.js";
import { initScrollReveals } from "./animations/scrollReveals.js";
import { initNavScroll } from "./animations/navScroll.js";

// 1. Render dynamic content first, so ScrollTrigger has real DOM to measure
renderProjects();

// 2. Wire up animation & interaction modules
initCursor();
initHero();
initMarquee();
initCounters();
initScrollReveals();
initNavScroll();

// Recalculate trigger positions once everything (fonts, images) has settled
window.addEventListener("load", () => ScrollTrigger.refresh());
