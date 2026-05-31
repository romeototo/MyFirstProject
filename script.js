// ======================================
// romeototo Portfolio — Interactive JS
// ======================================

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!prefersReducedMotion) {
    initParticles();
    initCodeTyping();
  }
  initTypewriter();
  initNavbar();
  initScrollReveal();
  initMobileNav();
  initProjectCardsGlow();
  initTerminal();
  initBackToTop();
  initLanguageToggle();
  initAiAssistant();
  initAnimatedCounters();
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

    const colors = ["#6C63FF", "#8b83ff", "#00D9FF", "#6C63FF"];
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

  function getRoles() {
    const lang = localStorage.getItem("lang") || "en";
    return lang === "th"
      ? [
          "นักพัฒนา IT Automation",
          "ผู้สร้างเครื่องมือซัพพอร์ต",
          "นักพัฒนา Python / JavaScript",
          "ดูแลโปรเจกต์ Open Source",
        ]
      : [
          "IT Automation Developer",
          "Support Tool Developer",
          "Python / JavaScript Developer",
          "Open Source Maintainer",
        ];
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.textContent = getRoles()[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 80;

  function type() {
    const roles = getRoles();
    if (roleIndex >= roles.length) roleIndex = 0;
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

  const scrollProgressBar = document.getElementById("scrollProgress");

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Scroll progress bar
    if (scrollProgressBar) {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (currentScroll / docHeight) * 100;
      scrollProgressBar.style.width = scrollPercent + "%";
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
          const navToggle = document.getElementById("navToggle");
          if (navLinks) navLinks.classList.remove("active");
          if (navToggle) {
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
          }
        }
      }
    });
  });

  // Scroll spy — highlight active nav link
  const sections = document.querySelectorAll("section[id]");
  const navLinksAll = document.querySelectorAll(".nav-link[href^='#']");

  const scrollSpy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinksAll.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`,
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    },
  );

  sections.forEach((section) => scrollSpy.observe(section));
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
    toggle.setAttribute(
      "aria-expanded",
      String(links.classList.contains("active")),
    );
  });
}

// ======================================
// Scroll Reveal Animation
// ======================================

function initScrollReveal() {
  const elements = document.querySelectorAll(
    ".about-card, .skill-category, .process-card, .project-card, .github-stat-card, .start-card",
  );

  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

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
  if (input && term.classList.contains("terminal-visible")) {
    setTimeout(() => input.focus(), 100);
  } else if (input) {
    input.blur();
  }
}

function initTerminal() {
  const input = document.getElementById("terminal-input");
  const body = document.getElementById("terminal-body");
  const closeButton = document.querySelector(".terminal-header .dot-red");
  if (!input || !body) return;

  if (closeButton) {
    closeButton.addEventListener("click", toggleTerminal);
    closeButton.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTerminal();
      }
    });
  }

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
            "Available commands:<br>&nbsp;whoami &nbsp;&nbsp;&nbsp;— About me<br>&nbsp;skills &nbsp;&nbsp;&nbsp;— Tech stack<br>&nbsp;projects &nbsp;— My work<br>&nbsp;ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— List all projects<br>&nbsp;ping romeo — Ping the dev<br>&nbsp;uptime &nbsp;&nbsp;&nbsp;— System uptime<br>&nbsp;date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Current date<br>&nbsp;open github — Open GitHub profile<br>&nbsp;matrix &nbsp;&nbsp;&nbsp;— ???<br>&nbsp;socials &nbsp;&nbsp;— Find me online<br>&nbsp;sudo get_hired — Access the secret<br>&nbsp;clear &nbsp;&nbsp;&nbsp;&nbsp;— Clear screen<br>&nbsp;exit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Close terminal";
          break;
        case "whoami":
          outputLine.innerHTML =
            "Romeo - A Bangkok-based developer building IT support tools, automation workflows, and small web products.";
          break;
        case "skills":
          outputLine.innerHTML =
            "Core: Python, JavaScript, React<br>Specialty: IT automation, support workflows, small web products";
          break;
        case "socials":
          outputLine.innerHTML =
            "GitHub: @romeototo<br>X (Twitter): @RoMeoT0T0<br>Email: romeototo.dev@gmail.com";
          break;
        case "projects":
          outputLine.innerHTML =
            "IT Support Chatbot, AI Kanban, CCTV Workspace, Taxi Booking Site. Type 'projects -v' for details (future update).";
          break;
        case "sudo get_hired":
          outputLine.innerHTML =
            "<span style='color: var(--green)'>[SUCCESS]</span> Access Granted! Romeo is ready to join your team. Launching contact form...";
          setTimeout(() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
            toggleTerminal();
          }, 1500);
          break;
        case "cat bio.txt":
          outputLine.innerHTML =
            "I build things that work. No fluff, just code and value.";
          break;
        case "ls":
        case "ls projects":
          outputLine.innerHTML =
            "<span style='color:var(--cyan)'>drwxr-xr-x</span> &nbsp;it-support-chatbot/<br><span style='color:var(--cyan)'>drwxr-xr-x</span> &nbsp;ai-kanban-board/<br><span style='color:var(--cyan)'>drwxr-xr-x</span> &nbsp;bkk-pattaya-taxi/<br><span style='color:var(--cyan)'>drwxr-xr-x</span> &nbsp;monster-tapper/<br><span style='color:var(--cyan)'>drwxr-xr-x</span> &nbsp;telegram-ai-it-agent/<br><span style='color:var(--cyan)'>drwxr-xr-x</span> &nbsp;cctv-playback-workspace/";
          break;
        case "ping romeo":
          (function() {
            outputLine.innerHTML = "PING romeo (127.0.0.1) 56 bytes of data.";
            body.appendChild(outputLine);
            [12, 8, 11].forEach((ms, i) => {
              setTimeout(() => {
                const line = document.createElement("div");
                line.className = "term-line term-output";
                line.innerHTML = `64 bytes: icmp_seq=${i} time=<span style='color:var(--green)'>${ms}ms</span>`;
                body.appendChild(line);
                body.scrollTop = body.scrollHeight;
              }, (i + 1) * 400);
            });
            setTimeout(() => {
              const line = document.createElement("div");
              line.className = "term-line term-output";
              line.innerHTML = "— romeo ping statistics — <span style='color:var(--green)'>3 packets, 0% loss</span>";
              body.appendChild(line);
              body.scrollTop = body.scrollHeight;
            }, 1800);
            return;
          })();
          return;
        case "uptime":
          (function() {
            const years = new Date().getFullYear() - 2016;
            outputLine.innerHTML = `romeo-dev &nbsp;up ${years} years &nbsp;|&nbsp; load avg: ☕ high, 🔧 always &nbsp;|&nbsp; status: <span style='color:var(--green)'>building</span>`;
          })();
          break;
        case "date":
          outputLine.innerHTML = `<span style='color:var(--cyan)'>${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Bangkok', weekday:'short', year:'numeric', month:'short', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit' })}</span> ICT (Bangkok)`;
          break;
        case "open github":
          window.open("https://github.com/romeototo", "_blank", "noopener");
          outputLine.innerHTML = "<span style='color:var(--green)'>[OK]</span> Opening github.com/romeototo ...";
          break;
        case "matrix":
          outputLine.innerHTML = "<span style='color:var(--green)'>[INIT]</span> Entering the matrix... (3s)";
          document.body.classList.add("matrix-mode");
          setTimeout(() => document.body.classList.remove("matrix-mode"), 3500);
          break;
        case "clear":
          body.innerHTML = "";
          return;
        case "exit":
          toggleTerminal();
          return;
        default:
          outputLine.innerHTML = `Command not found: <span style='color:var(--pink)'>${cmd}</span>. Type <span style='color:var(--cyan)'>help</span> for available commands.`;
      }

      body.appendChild(outputLine);
      body.scrollTop = body.scrollHeight;
    }
  });
}

// ======================================
// Back to Top Button
// ======================================

function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  const ring = document.getElementById("backToTopRing");
  if (!backToTopBtn) return;

  const circumference = 2 * Math.PI * 22; // r=22

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }

    // Update circular progress ring
    if (ring) {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = window.scrollY / docHeight;
      const offset = circumference - scrollPercent * circumference;
      ring.style.strokeDashoffset = offset;
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ======================================
// Animated Counters
// ======================================

function initAnimatedCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(target)) return;

    const duration = 1500; // ms
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = Math.round(easedProgress * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    counters.forEach((el) => {
      el.textContent = el.getAttribute("data-count");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((el) => observer.observe(el));
}

// ======================================
// Language Toggle
// ======================================

function initLanguageToggle() {
  const toggleBtn = document.querySelector(".lang-toggle");
  if (!toggleBtn) return;

  const updateLang = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-th]").forEach((el) => {
      if (!el.hasAttribute("data-en")) {
        el.setAttribute("data-en", el.innerHTML);
      }
      el.innerHTML =
        lang === "th" ? el.getAttribute("data-th") : el.getAttribute("data-en");
    });

    if (lang === "th") {
      toggleBtn.innerHTML = "<span>EN</span> / TH";
    } else {
      toggleBtn.innerHTML = "EN / <span>TH</span>";
    }
  };

  const currentLang = localStorage.getItem("lang") || "en";
  updateLang(currentLang);

  toggleBtn.addEventListener("click", () => {
    const newLang = localStorage.getItem("lang") === "th" ? "en" : "th";
    localStorage.setItem("lang", newLang);
    updateLang(newLang);
  });
}

// ======================================
// AI Assistant Logic
// ======================================

function initAiAssistant() {
  const toggle = document.getElementById("aiToggle");
  const panel = document.getElementById("aiPanel");
  const close = document.getElementById("closeAi");
  const input = document.getElementById("aiInput");
  const send = document.getElementById("sendAi");
  const body = document.getElementById("aiBody");

  if (!toggle || !panel || !input || !send || !body) return;

  const togglePanel = () => {
    panel.classList.toggle("active");
    if (panel.classList.contains("active")) {
      input.focus();
      document.querySelector(".notification-badge")?.remove();
    }
  };

  toggle.addEventListener("click", togglePanel);
  close?.addEventListener("click", togglePanel);

  const responses = {
    en: {
      hello:
        "Hi there! How can I help you today? You can ask about skills, projects, or how to contact Romeo.",
      skills:
        "Romeo works with Python, JavaScript, React, IT automation, and support workflows. He also ships small static web products and browser-based demos.",
      projects:
        "Romeo has built an IT Support Chatbot, an AI Kanban Board, a CCTV Playback Workspace, and a Private Taxi Booking system. Check the 'Projects' section for details!",
      contact:
        "You can reach Romeo via GitHub, X (@RoMeoT0T0), or by emailing him directly at the link in the footer.",
      hire: "Romeo is currently open for focused internal tools, support workflow, and automation builds. Reach out via email, X, or GitHub with the current process and what should happen next.",
      default:
        "I'm not sure about that. Try asking about 'skills', 'projects', or 'hiring'!",
    },
    th: {
      hello:
        "สวัสดีครับ! มีอะไรให้ช่วยไหมครับ? สอบถามเรื่องทักษะ, ผลงาน หรือการติดต่อจ้างงานได้เลยครับ",
      skills:
        "คุณ Romeo ทำงานกับ Python, JavaScript, React, ระบบอัตโนมัติ และ workflow สำหรับงานซัพพอร์ตไอที รวมถึงเว็บโปรดักต์ขนาดเล็กและเดโมบนบราวเซอร์ครับ",
      projects:
        "ผลงานเด่นมีทั้ง แชทบอทไอที, กระดาน Kanban พลัง AI, ระบบจัดการกล้องวงจรปิด และเว็บจองรถแท็กซี่ครับ ดูรายละเอียดได้ที่ส่วน 'ผลงาน' เลย",
      contact:
        "ติดต่อคุณ Romeo ได้ทาง GitHub, X (@RoMeoT0T0) หรืออีเมลตามลิงก์ที่ส่วนท้ายหน้าเว็บครับ",
      hire: "ตอนนี้คุณ Romeo เปิดรับงาน internal tools, support workflow และ automation ครับ ส่ง process ปัจจุบันกับผลลัพธ์ที่ต้องการมาคุยได้ทางอีเมล, X หรือ GitHub",
      default:
        "ผมยังไม่ค่อยเข้าใจคำถามนี้ ลองถามเรื่อง 'ทักษะ', 'ผลงาน' หรือ 'การจ้างงาน' ดูไหมครับ?",
    },
  };

  const addMessage = (text, type = "bot") => {
    const msg = document.createElement("div");
    msg.className = `ai-msg ai-msg-${type}`;
    msg.innerText = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
  };

  const handleSend = () => {
    const text = input.value.trim().toLowerCase();
    if (!text) return;

    addMessage(input.value, "user");
    input.value = "";

    const lang = localStorage.getItem("lang") || "en";
    const r = responses[lang];

    setTimeout(() => {
      if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("ดีครับ") ||
        text.includes("สวัสดี")
      ) {
        addMessage(r.hello);
      } else if (
        text.includes("skill") ||
        text.includes("ทักษะ") ||
        text.includes("เก่ง")
      ) {
        addMessage(r.skills);
      } else if (
        text.includes("project") ||
        text.includes("ผลงาน") ||
        text.includes("ทำอะไร")
      ) {
        addMessage(r.projects);
      } else if (text.includes("contact") || text.includes("ติดต่อ")) {
        addMessage(r.contact);
      } else if (
        text.includes("hire") ||
        text.includes("จ้าง") ||
        text.includes("งาน")
      ) {
        addMessage(r.hire);
      } else {
        addMessage(r.default);
      }
    }, 600);
  };

  send.addEventListener("click", handleSend);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSend();
  });
}

// ======================================
// Code Window Typing Animation
// ======================================

function initCodeTyping() {
  const pre = document.querySelector(".code-body pre code");
  if (!pre) return;

  const originalHTML = pre.innerHTML;
  const lines = originalHTML.split("\n");
  pre.innerHTML = "";
  pre.style.minHeight = "190px";

  lines.forEach((line, i) => {
    const span = document.createElement("span");
    span.style.display = "inline";
    span.style.opacity = "0";
    span.style.transition = "opacity 0.35s ease";
    span.innerHTML = line + (i < lines.length - 1 ? "\n" : "");
    pre.appendChild(span);

    setTimeout(() => {
      span.style.opacity = "1";
    }, 700 + i * 200);
  });
}
