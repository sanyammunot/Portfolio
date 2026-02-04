// All project content lives here so you only edit this file.

const projects = [
  {
    title: "Fullstack Chat App",
    description:
      "Designed, built, and deployed a real-time chat system using React, Node.js, MongoDB, and WebSockets with authentication, real-time messaging, and user presence.",
    tags: ["React", "Node.js", "MongoDB", "WebSockets", "JWT"],
    source: "https://github.com/sanyammunot/chatApplication",
    demo: "#",
    videoSrc: "videos/chat-demo.mp4", // update to your actual path
  },
  {
    title: "Food Delivery Web App",
    description:
      "Built a full-stack food delivery platform with dual panels (user/admin), integrated Stripe payments, JWT authentication, role-based access, and order tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    source: "https://github.com/sanyammunot/FoodApp",
    demo: "#",
    videoSrc: "videos/food-demo.mp4", // update to your actual path
  },
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid || !Array.isArray(projects)) return;

  grid.innerHTML = projects
    .map((p) => {
      const tagsHtml = p.tags
        .map((t) => `<span class="project-tag">${t}</span>`)
        .join("");

      const video = p.videoSrc
        ? `<video src="${p.videoSrc}" class="project-video" autoplay loop muted playsinline></video>`
        : `<div class="project-preview-text">●</div>`;

      return `
      <div class="project-card">
        <div class="project-preview has-video">
          ${video}
        </div>
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-links">
            <a href="${p.source}" class="project-link" target="_blank">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Source
            </a>
            <a href="${p.demo}" class="project-link" target="_blank">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Demo
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

