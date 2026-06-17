/* ─── THEME TOGGLE ────────────────────────────────────────────── */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
});

function updateIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

/* ─── HAMBURGER ───────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ─── ACTIVE NAV LINK ─────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  const scrollY = window.scrollY + 90;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      allNavLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}

/* ─── SCROLL REVEAL ───────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal, .reveal-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 60);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

/* ─── BACK TO TOP ─────────────────────────────────────────────── */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  setActiveLink();
  backToTop.classList.toggle('visible', window.scrollY > 400);

  // Navbar shadow on scroll
  const navbar = document.getElementById('navbar');
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(0,0,0,.35)'
    : 'none';
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── SMOOTH SCROLL OFFSET ────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/* ─── ACTIVE LINK STYLE ───────────────────────────────────────── */
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: var(--accent) !important; }`;
document.head.appendChild(style);

/* ─── TYPED HERO EYEBROW ──────────────────────────────────────── */
const eyebrow = document.querySelector('.hero-eyebrow');
if (eyebrow) {
  const texts = [
    '⌨ Information Technology Engineer',
    '⚙ Full-Stack Developer',
    '📱 Mobile App Developer',
    '🏆 97.95 %ile · Young Turks 2025',
  ];
  let ti = 0, ci = 0, deleting = false;
  const icon = eyebrow.querySelector('i');
  let span = eyebrow.querySelector('span.typed');
  if (!span) {
    span = document.createElement('span');
    span.className = 'typed';
    eyebrow.innerHTML = '';
    eyebrow.appendChild(span);
  }

  function type() {
    const full = texts[ti];
    if (!deleting) {
      span.textContent = full.slice(0, ++ci);
      if (ci === full.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      span.textContent = full.slice(0, --ci);
      if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
    }
    setTimeout(type, deleting ? 35 : 60);
  }
  setTimeout(type, 800);
}
