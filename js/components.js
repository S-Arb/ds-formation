/* ============================================
   DS FORMATION — Shared Components & Interactions
   ============================================ */

const HEADER_HTML = `
<a href="#main-content" class="skip-link">Aller au contenu principal</a>
<header class="header" id="header">
  <div class="header-inner">
    <a href="index.html" class="logo">
      <img src="assets/logo.png" alt="DS Formation" width="550" height="220"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <span class="logo-text" style="display:none">DS <span>FORMATION</span></span>
    </a>
    <nav class="nav" id="main-nav" aria-label="Navigation principale">
      <a href="index.html">Accueil</a>
      <a href="formations.html">Formations</a>
      <a href="financements.html">Financements</a>
      <a href="a-propos.html">À propos</a>
      <!--<a href="blog.html">Blog</a> -->
      <a href="contact.html" class="nav-cta">Nous contacter</a>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-nav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="footer" id="footer">
  <div class="footer-main">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">
          <img src="assets/logo.png" alt="DS Formation" style="height:90px;width:auto" width="225" height="90"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <span class="logo-text" style="display:none">DS <span>FORMATION</span></span>
        </a>
        <p>Centre de formation professionnelle certifié Qualiopi. Nous accompagnons particuliers et entreprises dans le développement de leurs compétences professionnelles.</p>
         <!--
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/ds-formation" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn DS Formation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.facebook.com/dsformation" target="_blank" rel="noopener noreferrer" aria-label="Facebook DS Formation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/dsformation" target="_blank" rel="noopener noreferrer" aria-label="Instagram DS Formation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
        -->

      </div>
      <div class="footer-col">
        <h4>Nos formations</h4>
        <ul>
          <li><a href="formation-excel.html">Excel avancé &amp; automatisation</a></li>
          <!--<li><a href="formation-gestion-entreprise.html">Gestion d'entreprise</a></li>
          <li><a href="formation-relation-client.html">Relation client &amp; vente</a></li> 
          <li><a href="formation-marketing-digital.html">Langues</a></li> -->
          <!--<li><a href="formation-creation-contenu.html">Création de contenu</a></li> 
          <li><a href="formation-cybersecurite.html">Cybersécurité</a></li> 
          <li><a href="formation-gestion-administrative.html">Gestion administrative</a></li> -->
        </ul>
      </div>
      <div class="footer-col">
        <h4>Informations</h4>
        <ul>
          <!--<li><a href="financements.html"> &amp; Financements</a></li>-->
          <li><a href="a-propos.html">À propos de DS Formation</a></li>
          <li><a href="blog.html">Blog &amp; Conseils</a></li>
          <li><a href="contact.html">Nous contacter</a></li>
          <li><a href="mentions-legales.html">Mentions légales</a></li>
          <li><a href="politique-confidentialite.html">Politique de confidentialité</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span>59 Rue Sadi Carnot <br>93700 Drancy</span>
        </div>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <a href="tel:+0623257214" style="color:rgba(255,255,255,.7)">06 23 25 72 14</a>
        </div>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <a href="mailto:of.dsformation@gmail.com" style="color:rgba(255,255,255,.7)">of.dsformation@gmail.com</a>
        </div>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Lundi – Vendredi : 9h – 18h</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© <span id="footer-year"></span> DS Formation. Tous droits réservés. Centre certifié <strong style="color:var(--accent)">Qualiopi</strong>.</p>
    <div class="footer-links">
      <a href="mentions-legales.html">Mentions légales</a>
      <a href="#">CGV</a>
      <a href="politique-confidentialite.html">Confidentialité</a>
    </div>
  </div>
</footer>`;

/* ── INIT ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  initNav();
  initScrollHeader();
  initAccordion();
  initCounters();
  initFadeUp();
  initContactForm();
  initProgramModules();
  initFilterButtons();
  initLazyImages();
});

function injectComponents() {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

  // Année dynamique dans le footer
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Ajouter id="main-content" au premier élément après le header si absent
  const mainEl = document.querySelector('main, section:not(.page-hero), .hero, .hero-split');
  if (mainEl && !document.getElementById('main-content')) {
    mainEl.id = 'main-content';
  }
}

function initNav() {
  document.addEventListener('click', e => {
    const nav = document.getElementById('main-nav');
    const btn = document.getElementById('hamburger');
    if (!nav || !btn) return;

    if (e.target.closest('#hamburger')) {
      const open = nav.classList.toggle('open');
      btn.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    } else if (!nav.contains(e.target)) {
      nav.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Fermeture menu mobile sur touche Échap
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const nav = document.getElementById('main-nav');
    const btn = document.getElementById('hamburger');
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
}

function initScrollHeader() {
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    // Accessibilité clavier
    if (!header.hasAttribute('tabindex')) header.setAttribute('tabindex', '0');
    if (!header.hasAttribute('role')) header.setAttribute('role', 'button');

    const toggle = () => {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    };

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
}

function initProgramModules() {
  document.querySelectorAll('.program-module-header').forEach(header => {
    header.addEventListener('click', () => {
      header.closest('.program-module').classList.toggle('open');
    });
  });
  const first = document.querySelector('.program-module');
  if (first) first.classList.add('open');
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = target / 55;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 28);
      observer.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => observer.observe(c));
}

function initFadeUp() {
  const els = document.querySelectorAll('.formation-card, .feature-card, .testimonial-card, .blog-card, .financing-card, .team-card, .value-card');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .6s ease ${i * 0.07}s, transform .6s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  // Netlify gère la soumission réelle — on améliore juste le feedback UX
  form.addEventListener('submit', () => {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Envoi en cours…';
    }
  });
}

/* ── FILTRES FORMATIONS ─────────────────────── */
function initFilterButtons() {
  // Filtres formations (data-filter + data-cat)
  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  const formationCards = document.querySelectorAll('.formation-card[data-cat]');

  if (filterBtns.length && formationCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Mettre à jour état actif
        filterBtns.forEach(b => {
          b.classList.remove('btn-primary', 'active');
          b.classList.add('btn-outline-dark');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('btn-primary', 'active');
        btn.classList.remove('btn-outline-dark');
        btn.setAttribute('aria-pressed', 'true');

        // Filtrer les cards
        formationCards.forEach((card, i) => {
          const show = filter === 'all' || card.dataset.cat === filter;
          card.style.display = show ? '' : 'none';
          if (show) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px)';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, i * 50);
          }
        });
      });
    });
  }

  // Filtres blog (catégories)
  const blogFilterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogCards = document.querySelectorAll('.blog-card[data-cat]');

  if (blogFilterBtns.length && blogCards.length) {
    blogFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        blogFilterBtns.forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-outline-blue');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-outline-blue');
        btn.setAttribute('aria-pressed', 'true');

        blogCards.forEach(card => {
          card.style.display = filter === 'all' || card.dataset.cat === filter ? '' : 'none';
        });
      });
    });
  }
}

/* ── LAZY LOADING IMAGES ───────────────────── */
function initLazyImages() {
  // Ne pas lazy-loader les images hero (above the fold → critiques pour LCP)
  const aboveFoldSelectors = '.hero img, .hero-split img, .hero-right img, .page-hero img, .hero-content img';
  const aboveFold = new Set(document.querySelectorAll(aboveFoldSelectors));
  document.querySelectorAll('img:not([loading])').forEach(img => {
    if (!aboveFold.has(img)) img.setAttribute('loading', 'lazy');
  });
}
