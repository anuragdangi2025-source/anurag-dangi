// ===========================
// Dark Mode
// ===========================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

function applyTheme(isDark) {
    body.classList.toggle('dark-mode', isDark);
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeIcon.classList.toggle('fa-sun', isDark);
    themeIcon.classList.toggle('fa-moon', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

themeToggle.addEventListener('click', () => {
    applyTheme(!body.classList.contains('dark-mode'));
});

// ===========================
// Navigation
// ===========================

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function setMenuOpen(open) {
    navMenu.classList.toggle('active', open);
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    let current = '';
    document.querySelectorAll('.section, .hero').forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

hamburger.addEventListener('click', () => {
    setMenuOpen(!navMenu.classList.contains('active'));
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        setMenuOpen(false);
    }
});

function scrollToTarget(href) {
    const target = document.querySelector(href);
    if (!target) return;
    window.scrollTo({
        top: target.offsetTop - 70,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
}

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            scrollToTarget(href);
        }
    });
});

document.querySelector('.nav-logo')?.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToTarget('#home');
});

const scrollIndicator = document.querySelector('.scroll-indicator a');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', (event) => {
        event.preventDefault();
        scrollToTarget(scrollIndicator.getAttribute('href'));
    });
}

// ===========================
// Counter animation
// ===========================

function animateCounter(element, target, suffix = '', duration = 1400) {
    const start = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.round(target * progress);
        element.textContent = `${value}${suffix}`;
        if (progress < 1) {
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const counter = entry.target.querySelector('.counter');
                const target = parseFloat(entry.target.dataset.target);
                const suffix = entry.target.dataset.suffix || '';
                counter.textContent = `0${suffix}`;
                animateCounter(counter, target, suffix);
                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.4 });

    document.querySelectorAll('.stat-item').forEach((stat) => statsObserver.observe(stat));

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
        '.timeline-item, .cert-card, .contact-card, .education-card, .achievement-card, .infra-card, .skill-category'
    ).forEach((element) => {
        element.classList.add('reveal');
        fadeObserver.observe(element);
    });
}
