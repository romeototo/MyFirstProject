// ======================================
// romeototo Portfolio — Interactive JS
// ======================================

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initTypewriter();
    initNavbar();
    initScrollReveal();
    initMobileNav();
});

// ======================================
// Floating Particles
// ======================================

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 30;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (8 + Math.random() * 15) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.width = (2 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;

        const colors = ['#6C63FF', '#00D9FF', '#00FF88', '#FF6B9D'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(particle);
    }
}

// ======================================
// Typewriter Effect
// ======================================

function initTypewriter() {
    const element = document.getElementById('typewriter');
    if (!element) return;

    const roles = [
        'Builder & Creator 🚀',
        'Game Developer 🎮',
        'AI Enthusiast 🤖',
        'Automation Engineer ⚙️',
        'Open Source Contributor 💜'
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
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });

                    // Close mobile nav
                    const navLinks = document.getElementById('navLinks');
                    if (navLinks) navLinks.classList.remove('active');
                }
            }
        });
    });
}

// ======================================
// Mobile Navigation
// ======================================

function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        links.classList.toggle('active');
        toggle.classList.toggle('active');
    });
}

// ======================================
// Scroll Reveal Animation
// ======================================

function initScrollReveal() {
    const elements = document.querySelectorAll('.about-card, .project-card, .skill-category');

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation
                const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}
