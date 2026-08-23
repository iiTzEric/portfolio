import { projects } from "../data/projects.js";

export function renderProjects() {
  const list = document.getElementById("projectList");
  if (!list) return;

  list.innerHTML = projects.map(p => `
    <div class="project">
      <div class="project-glow"></div>
      <span class="pnum mono">${p.num}</span>
      <h3>${p.url ? `<a href="${p.url}" target="_blank" rel="noopener">${p.name}</a>` : p.name}</h3>
      <div class="ptags">
        ${p.tags.map(t => `<span>${t}</span>`).join("")}
        ${p.repo ? `<a class="repo-link" href="${p.repo}" target="_blank" rel="noopener">Code ↗</a>` : ""}
      </div>
      <p class="pdesc">${p.desc}</p>
    </div>
  `).join("");

  // magnetic glow follows cursor within each row
  list.querySelectorAll(".project").forEach(proj => {
    const glow = proj.querySelector(".project-glow");
    proj.addEventListener("mousemove", e => {
      const r = proj.getBoundingClientRect();
      glow.style.left = (e.clientX - r.left) + "px";
      glow.style.top = (e.clientY - r.top) + "px";
    });
  });
}
