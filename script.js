// Vex Code — site behavior. Plain JS, no build step, no modules.
// Loaded after config.js, translations.js and projects.js (see index.html).

const LOGO_SRC = 'logo.png';

// ---------- markup builders ----------

function renderNavbar() {
  return `
    <div class="wrap nav-inner">
      <a href="#home" class="brand">
        <img src="${LOGO_SRC}" alt="${SITE.brand}">
        <span>${SITE.brand}</span>
      </a>

      <nav class="nav-links">
        <a href="#home" data-i18n="nav.home">Home</a>
        <a href="#services" data-i18n="nav.services">Services</a>
        <a href="#projects" data-i18n="nav.projects">Projects</a>
        <a href="#about" data-i18n="nav.about">About</a>
        <a href="#faq" data-i18n="nav.faq">FAQ</a>
      </nav>

      <div class="nav-right">
        <div class="lang-select">
          <button class="lang-btn" id="langBtn">
            <span data-lang-label>EN</span>
          </button>
          <div class="lang-menu" id="langMenu">
            <button data-lang-option="en">English</button>
            <button data-lang-option="ar">العربية</button>
            <button data-lang-option="tr">Türkçe</button>
            <button data-lang-option="de">Deutsch</button>
            <button data-lang-option="it">Italiano</button>
          </div>
        </div>

        <a href="${DISCORD_LINK}" target="_blank" rel="noopener" class="btn btn-primary nav-cta" data-i18n="nav.cta">Start a Project</a>

        <button class="menu-toggle" id="menuToggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;
}

function renderMobileMenu() {
  return `
    <a href="#home" data-i18n="nav.home">Home</a>
    <a href="#services" data-i18n="nav.services">Services</a>
    <a href="#projects" data-i18n="nav.projects">Projects</a>
    <a href="#about" data-i18n="nav.about">About</a>
    <a href="#faq" data-i18n="nav.faq">FAQ</a>
    <a href="${DISCORD_LINK}" target="_blank" rel="noopener" class="btn btn-primary" data-i18n="nav.cta">Start a Project</a>
  `;
}

function renderFooter() {
  return `
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#home" class="brand">
            <img src="${LOGO_SRC}" alt="${SITE.brand}">
            <span>${SITE.brand}</span>
          </a>
          <p data-i18n="footer.tagline">Your Idea. Our Code.</p>
        </div>

        <div class="footer-links">
          <a href="#services" data-i18n="nav.services">Services</a>
          <a href="#projects" data-i18n="nav.projects">Projects</a>
          <a href="#about" data-i18n="nav.about">About</a>
          <a href="#faq" data-i18n="nav.faq">FAQ</a>
          <a href="${DISCORD_LINK}" target="_blank" rel="noopener">Discord</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>&copy; ${SITE.year} ${SITE.brand}. All rights reserved.</span>
      </div>
    </div>
  `;
}

function renderHero() {
  return `
    <section class="hero" id="home">
      <div class="wrap hero-content">
        <div class="hero-brand">VEX CODE</div>
        <h1 data-i18n="hero.title">Your Idea. Our Code.</h1>
        <p data-i18n="hero.desc">We build modern digital solutions designed to bring your ideas to life — from powerful websites and Discord bots to custom systems and software.</p>
        <div class="hero-buttons">
          <a href="#services" class="btn btn-outline" data-i18n="hero.explore">Explore Services</a>
          <a href="${DISCORD_LINK}" target="_blank" rel="noopener" class="btn btn-primary" data-i18n="hero.start">Start a Project</a>
        </div>
      </div>
    </section>
  `;
}

const SERVICE_ICONS = {
  web: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
  personal: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21v-1a8 8 0 0 1 16 0v1"></path>',
  rp: '<path d="M3 3h18v14H3z"></path><path d="M8 21h8M12 17v4"></path>',
  discord: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h6"></path>',
  custom: '<path d="M12 2 2 7l10 5 10-5-10-5Z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>',
  devdev: '<path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"></path>'
};

function serviceCard(item) {
  return `
    <div class="service-card${item.featured ? ' featured' : ''} reveal">
      <div class="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${SERVICE_ICONS[item.icon]}</svg>
      </div>
      <h3 data-i18n="${item.titleKey}"></h3>
      <p data-i18n="${item.descKey}"></p>
    </div>
  `;
}

function renderServices() {
  const cards = [
    { icon: 'web', titleKey: 'services.web.title', descKey: 'services.web.desc', featured: true },
    { icon: 'personal', titleKey: 'services.personal.title', descKey: 'services.personal.desc' },
    { icon: 'rp', titleKey: 'services.rp.title', descKey: 'services.rp.desc' },
    { icon: 'discord', titleKey: 'services.discord.title', descKey: 'services.discord.desc', featured: true },
    { icon: 'custom', titleKey: 'services.custom.title', descKey: 'services.custom.desc' },
    { icon: 'devdev', titleKey: 'services.devdev.title', descKey: 'services.devdev.desc' }
  ];

  return `
    <section id="services">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="eyebrow" data-i18n="services.eyebrow">What We Build</div>
          <h2 class="section-title" data-i18n="services.title">What We Build</h2>
          <p class="section-desc" data-i18n="services.desc">Professional digital solutions built around your needs.</p>
        </div>

        <div class="services-grid">
          ${cards.map(serviceCard).join('')}
        </div>
      </div>
    </section>
  `;
}

function whyItem(num, titleKey, descKey) {
  return `
    <div class="why-item reveal">
      <div class="why-num">${num}</div>
      <h3 data-i18n="${titleKey}"></h3>
      <p data-i18n="${descKey}"></p>
    </div>
  `;
}

function renderWhy() {
  return `
    <section class="why-section">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="eyebrow" data-i18n="why.eyebrow">Why Vex Code?</div>
          <h2 class="section-title" data-i18n="why.title">Why Vex Code?</h2>
          <p class="section-desc" data-i18n="why.desc">We focus on more than just writing code. We create reliable, modern and carefully designed solutions that are built to perform.</p>
        </div>

        <div class="why-list">
          ${whyItem('01', 'why.quality.title', 'why.quality.desc')}
          ${whyItem('02', 'why.performance.title', 'why.performance.desc')}
          ${whyItem('03', 'why.custom.title', 'why.custom.desc')}
          ${whyItem('04', 'why.support.title', 'why.support.desc')}
        </div>
      </div>
    </section>
  `;
}

function renderProjectsSection() {
  return `
    <section id="projects">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="eyebrow" data-i18n="projects.eyebrow">Selected Projects</div>
          <h2 class="section-title" data-i18n="projects.title">Selected Projects</h2>
          <p class="section-desc" data-i18n="projects.desc">A look at some of the projects and solutions we've built.</p>
        </div>

        <div id="projectsGrid" class="projects-grid"></div>

        <div id="projectsEmpty" class="coming-soon reveal">
          <span data-i18n="projects.comingSoonTitle">Projects Coming Soon</span>
          <p data-i18n="projects.comingSoonDesc">We're preparing our portfolio. Real projects will be added here soon.</p>
        </div>
      </div>
    </section>
  `;
}

function projectCard(project, lang) {
  let html = '';

  if (project.image) {
    html += `<div class="project-image"><img src="${project.image}" alt="${project.name || ''}" loading="lazy"></div>`;
  }

  html += '<div class="project-body">';
  if (project.name) html += `<h3>${project.name}</h3>`;
  if (project.description) html += `<p>${project.description}</p>`;

  const meta = [];
  if (project.builtFor) meta.push(`${t(lang, 'projects.builtFor')}: ${project.builtFor}`);
  if (project.type) meta.push(project.type);
  if (meta.length) {
    html += `<div class="project-meta">${meta.map((m) => `<span class="project-tag">${m}</span>`).join('')}</div>`;
  }

  if (project.technologies && project.technologies.length) {
    html += `<div class="project-meta">${project.technologies.map((tech) => `<span class="project-tag">${tech}</span>`).join('')}</div>`;
  }

  if (project.link) {
    html += `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">${t(lang, 'projects.viewProject')} →</a>`;
  }

  html += '</div>';

  return `<div class="project-card reveal in">${html}</div>`;
}

function renderProjectCards(lang) {
  const grid = document.getElementById('projectsGrid');
  const empty = document.getElementById('projectsEmpty');
  if (!grid || !empty) return;

  if (!PROJECTS.length) {
    grid.style.display = 'none';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.style.display = 'grid';
  grid.innerHTML = PROJECTS.map((p) => projectCard(p, lang)).join('');
}

function step(num, titleKey, descKey) {
  return `
    <div class="step reveal">
      <div class="step-num">${num}</div>
      <h3 data-i18n="${titleKey}"></h3>
      <p data-i18n="${descKey}"></p>
    </div>
  `;
}

function renderHowItWorks() {
  return `
    <section>
      <div class="wrap">
        <div class="section-head reveal">
          <div class="eyebrow" data-i18n="how.eyebrow">From Idea to Reality</div>
          <h2 class="section-title" data-i18n="how.title">From Idea to Reality</h2>
        </div>

        <div class="steps">
          ${step('01', 'how.tell.title', 'how.tell.desc')}
          ${step('02', 'how.plan.title', 'how.plan.desc')}
          ${step('03', 'how.build.title', 'how.build.desc')}
          ${step('04', 'how.deliver.title', 'how.deliver.desc')}
        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section id="about" class="about-section">
      <div class="wrap">
        <div class="about-inner reveal">
          <h2 data-i18n="about.title">Built With Code. Driven By Ideas.</h2>
          <p data-i18n="about.desc">Vex Code is a digital development store focused on creating modern websites, Discord solutions, custom systems and software tailored to each client's needs.</p>
          <div class="about-tagline" data-i18n="about.tagline">Vex Code — Your Idea, Our Code.</div>
        </div>
      </div>
    </section>
  `;
}

function faqItem(qKey, aKey) {
  return `
    <div class="faq-item">
      <button class="faq-question">
        <span data-i18n="${qKey}"></span>
        <span class="faq-icon"></span>
      </button>
      <div class="faq-answer"><p data-i18n="${aKey}"></p></div>
    </div>
  `;
}

function renderFaq() {
  return `
    <section id="faq">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="eyebrow" data-i18n="faq.eyebrow">FAQ</div>
          <h2 class="section-title" data-i18n="faq.title">Frequently Asked Questions</h2>
        </div>

        <div class="faq-list">
          ${faqItem('faq.q1.q', 'faq.q1.a')}
          ${faqItem('faq.q2.q', 'faq.q2.a')}
          ${faqItem('faq.q3.q', 'faq.q3.a')}
          ${faqItem('faq.q4.q', 'faq.q4.a')}
        </div>
      </div>
    </section>
  `;
}

function renderCta() {
  return `
    <section class="cta-section">
      <div class="wrap">
        <div class="cta-inner reveal">
          <h2 data-i18n="cta.title">Have an Idea? Let's Build It.</h2>
          <p data-i18n="cta.desc">Turn your idea into something real with Vex Code.</p>
          <a href="${DISCORD_LINK}" target="_blank" rel="noopener" class="btn btn-primary" data-i18n="cta.button">Start Your Project</a>
        </div>
      </div>
    </section>
  `;
}

// ---------- i18n ----------

const LANG_STORAGE_KEY = 'vexcode-lang';

function detectInitialLang() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved && TRANSLATIONS[saved]) return saved;

  const browserLang = (navigator.language || DEFAULT_LANG).slice(0, 2);
  if (TRANSLATIONS[browserLang]) return browserLang;

  return DEFAULT_LANG;
}

function t(lang, key) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
  return dict[key] || TRANSLATIONS[DEFAULT_LANG][key] || key;
}

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = DEFAULT_LANG;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = t(lang, key);
    if (value) el.textContent = value;
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-lang-label]').forEach((el) => {
    el.textContent = LANG_LABELS[lang];
  });

  document.querySelectorAll('[data-lang-option]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.langOption === lang);
  });

  localStorage.setItem(LANG_STORAGE_KEY, lang);

  renderProjectCards(lang);
}

// ---------- mount + init ----------

function mount() {
  document.querySelector('header').innerHTML = renderNavbar();
  document.getElementById('mobileMenu').innerHTML = renderMobileMenu();

  document.getElementById('main').innerHTML =
    renderHero() +
    renderServices() +
    renderWhy() +
    renderProjectsSection() +
    renderHowItWorks() +
    renderAbout() +
    renderFaq() +
    renderCta();

  document.querySelector('footer').innerHTML = renderFooter();
}

function initNavbar() {
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.remove('open');
    }
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('open');
    });
  });
}

function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      item.classList.toggle('open', !isOpen);
      answer.style.maxHeight = !isOpen ? `${answer.scrollHeight}px` : null;
    });
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

function initLanguageSwitching() {
  document.querySelectorAll('[data-lang-option]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.langOption);
      document.getElementById('langMenu').classList.remove('open');
    });
  });
}

function init() {
  mount();

  initNavbar();
  initMobileMenu();
  initFaqAccordion();
  initScrollReveal();
  initLanguageSwitching();

  applyLanguage(detectInitialLang());
}

document.addEventListener('DOMContentLoaded', init);
