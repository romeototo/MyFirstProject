// ======================================
// romeototo Portfolio — Interactive JS
// ======================================

document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initTypewriter();
  initNavbar();
  initScrollReveal();
  initMobileNav();
  initProjectCardsGlow();
  initTerminal();
});

// ======================================
// Floating Particles
// ======================================

function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  const count = 30;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = 8 + Math.random() * 15 + "s";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.width = 2 + Math.random() * 3 + "px";
    particle.style.height = particle.style.width;

    const colors = ["#6C63FF", "#00D9FF", "#00FF88", "#FF6B9D"];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(particle);
  }
}

// ======================================
// Typewriter Effect
// ======================================

function initTypewriter() {
  const element = document.getElementById("typewriter");
  if (!element) return;

  const roles = [
    "Builder & Creator 🚀",
    "Game Developer 🎮",
    "AI Enthusiast 🤖",
    "Automation Engineer ⚙️",
    "Open Source Contributor 💜",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 80;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      element.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      speed = 40;
    } else {
      element.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      speed = 80;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 500; // Pause before next word
    }

    setTimeout(type, speed);
  }

  type();
}

// ======================================
// Navbar Scroll Effect
// ======================================

function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // Smooth scroll for nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });

          // Close mobile nav
          const navLinks = document.getElementById("navLinks");
          if (navLinks) navLinks.classList.remove("active");
        }
      }
    });
  });
}

// ======================================
// Mobile Navigation
// ======================================

function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
    toggle.classList.toggle("active");
  });
}

// ======================================
// Scroll Reveal Animation
// ======================================

function initScrollReveal() {
  const elements = document.querySelectorAll(
    ".about-card, .project-card, .skill-category",
  );

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger animation
          const delay =
            Array.from(entry.target.parentElement.children).indexOf(
              entry.target,
            ) * 100;
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
}

// ======================================
// Glassmorphism Project Cards Glow
// ======================================

function initProjectCardsGlow() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

// ======================================
// Terminal Easter Egg
// ======================================

function toggleTerminal() {
  const term = document.getElementById("terminal-container");
  const input = document.getElementById("terminal-input");
  if (!term) return;

  term.classList.toggle("terminal-visible");
  if (term.classList.contains("terminal-visible")) {
    setTimeout(() => input.focus(), 100);
  } else {
    input.blur();
  }
}

function initTerminal() {
  const input = document.getElementById("terminal-input");
  const body = document.getElementById("terminal-body");
  if (!input || !body) return;

  // Toggle with ~ (Backquote) or Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "`" || e.key === "~") {
      e.preventDefault();
      toggleTerminal();
    } else if (e.key === "Escape") {
      const term = document.getElementById("terminal-container");
      if (term && term.classList.contains("terminal-visible")) {
        toggleTerminal();
      }
    }
  });

  // Handle commands
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim().toLowerCase();
      if (!cmd) return;

      // Add typed command to history
      const cmdLine = document.createElement("div");
      cmdLine.className = "term-line";
      cmdLine.innerHTML = `<span class="term-prompt">visitor@romeo:~$</span> ${input.value}`;
      body.appendChild(cmdLine);

      input.value = "";

      // Process command
      const outputLine = document.createElement("div");
      outputLine.className = "term-line term-output";

      switch (cmd) {
        case "help":
          outputLine.innerHTML =
            "Available commands:<br>&nbsp;whoami<br>&nbsp;skills<br>&nbsp;hire_romeo<br>&nbsp;clear<br>&nbsp;exit";
          break;
        case "whoami":
          outputLine.innerHTML =
            "visitor - You are awesome for finding this! Enjoy exploring my portfolio.";
          break;
        case "skills":
          outputLine.innerHTML =
            "Python, JavaScript, React, Tailwind, AI Automation, Prompt Engineering, Web3...";
          break;
        case "hire_romeo":
          outputLine.innerHTML =
            "Great choice! Email me or DM me on X (@RoMeoT0T0) to get started. 🚀";
          break;
        case "clear":
          body.innerHTML = "";
          return;
        case "exit":
          toggleTerminal();
          return;
        default:
          outputLine.innerHTML = `Command not found: ${cmd}. Type 'help' for available commands.`;
      }

      body.appendChild(outputLine);
      body.scrollTop = body.scrollHeight;
    }
  });
}
