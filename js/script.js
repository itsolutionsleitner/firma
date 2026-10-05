document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const pageName = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  const pageClassMap = {
    'webdesign.html': 'page--webdesign',
    'seo.html': 'page--seo',
    'betreuung.html': 'page--betreuung',
    'domain-hosting.html': 'page--hosting',
    'leistungen.html': 'page--leistungen',
    'ueber-uns.html': 'page--about',
    'kontakt.html': 'page--contact',
    'referenzen.html': 'page--references'
  };
  if (pageClassMap[pageName]) document.body.classList.add(pageClassMap[pageName]);
  const closeMenu = () => {
    navLinks?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  let previousScrollY = Math.max(0, window.scrollY);
  const updateHeader = () => {
    const scrollY = Math.max(0, window.scrollY);
    header?.classList.toggle('is-scrolled', scrollY > 12);
    const navigationInUse = navLinks?.classList.contains('is-open') ||
      header?.querySelector(':focus-visible, .has-submenu.open');
    if (scrollY < previousScrollY || scrollY <= (header?.offsetHeight || 82) || navigationInUse) {
      header?.classList.remove('is-hidden');
    } else if (scrollY > previousScrollY) {
      header?.classList.add('is-hidden');
    }
    previousScrollY = scrollY;
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  header?.addEventListener('focusin', () => header.classList.remove('is-hidden'));

  menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
    header?.classList.remove('is-hidden');
  });

  document.querySelectorAll('.has-submenu > button').forEach((button, index) => {
    const menu = button.nextElementSibling;
    if (!menu?.id) menu.id = `service-menu-${index + 1}`;
    button.setAttribute('aria-controls', menu.id);
    button.setAttribute('aria-expanded', 'false');
    const activeLink = [...menu.querySelectorAll('a')].find((link) => {
      const linkPage = new URL(link.href, window.location.href).pathname
        .split('/')
        .filter(Boolean)
        .pop();
      return linkPage === pageName;
    });
    if (activeLink) {
      activeLink.classList.add('active');
      activeLink.setAttribute('aria-current', 'page');
      button.parentElement?.classList.add('is-current-section');
      button.classList.add('active');
    }
    button.addEventListener('click', () => {
      const parent = button.parentElement;
      const opened = parent.classList.toggle('open');
      button.setAttribute('aria-expanded', String(opened));
    });
  });

  document
    .querySelectorAll('.nav-links a')
    .forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      document.querySelectorAll('.has-submenu.open').forEach((item) => {
        item.classList.remove('open');
        item.querySelector('button')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  const revealElements = document.querySelectorAll('.reveal');
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('visible'));
  }

  const slider = document.querySelector('[data-hero-slider]');
  if (slider) {
    const slides = [...slider.querySelectorAll('[data-slide]')];
    const buttons = [...slider.querySelectorAll('[data-slide-control]')];
    let activeIndex = 0;
    let timer;
    const slideDuration = 3000;
    const showSlide = (nextIndex) => {
      activeIndex = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle('is-active', index === activeIndex));
      buttons.forEach((button, index) => {
        const current = index === activeIndex;
        button.classList.toggle('is-active', current);
        button.setAttribute('aria-current', String(current));
      });
    };
    const startTimer = () => {
      window.clearInterval(timer);
      if (!reducedMotion && slides.length > 1 && !document.hidden) {
        timer = window.setInterval(() => showSlide(activeIndex + 1), slideDuration);
      }
    };
    buttons.forEach((button, index) =>
      button.addEventListener('click', () => {
        window.clearInterval(timer);
        showSlide(index);
        startTimer();
      })
    );
    document.addEventListener('visibilitychange', startTimer);
    startTimer();
  }

  if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--tilt-x', `${y * -4}deg`);
        card.style.setProperty('--tilt-y', `${x * 5}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.removeProperty('--tilt-x');
        card.style.removeProperty('--tilt-y');
      });
    });
  }

  document.querySelectorAll('[data-project-reveal]').forEach((card) => {
    card.addEventListener('pointerup', (event) => {
      if (event.pointerType === 'mouse') return;
      if (event.target.closest('a')) return;
      card.classList.toggle('is-active');
    });
    card.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'mouse') card.classList.remove('is-active');
    });
    card.addEventListener('focusout', (event) => {
      if (!card.contains(event.relatedTarget)) card.classList.remove('is-active');
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') card.classList.remove('is-active');
    });
  });

  let consent = document.querySelector('.cookie-banner');
  if (!consent) {
    consent = document.createElement('aside');
    consent.className = 'cookie-banner';
    consent.hidden = true;
    consent.setAttribute('aria-label', 'Hinweis zur lokalen Speicherung');
    consent.innerHTML =
      '<p>Diese Website verwendet keine Analyse- oder Marketing-Cookies. Es wird lediglich gespeichert, dass Sie diesen Hinweis geschlossen haben.</p><div><button class="button button--plain" type="button" data-cookie-choice>Verstanden</button><a href="datenschutz.html">Datenschutz</a></div>';
    document.body.append(consent);
  }
  const safelyGetConsent = () => {
    try {
      return window.localStorage.getItem('leitwerk-cookie-note');
    } catch {
      return null;
    }
  };
  const dismissConsent = () => {
    if (!consent) return;
    consent.classList.add('is-dismissed');
    consent.hidden = true;
    consent.setAttribute('aria-hidden', 'true');
  };
  const showConsent = () => {
    if (!consent) return;
    consent.classList.remove('is-dismissed');
    consent.hidden = false;
    consent.setAttribute('aria-hidden', 'false');
  };
  if (consent) {
    if (safelyGetConsent()) dismissConsent();
    else showConsent();
  }
  consent?.querySelectorAll('[data-cookie-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      try {
        window.localStorage.setItem('leitwerk-cookie-note', 'acknowledged');
      } catch {
        /* Banner can still close if storage is unavailable. */
      }
      dismissConsent();
    });
  });
});
