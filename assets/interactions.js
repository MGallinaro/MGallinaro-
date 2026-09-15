(function () {
  'use strict';

  var menuTrigger = document.querySelector('.sidenav-trigger');
  var sideNav = document.querySelector('.sidenav');
  var menuScrim = null;
  var menuFocusables = [];

  document.querySelectorAll('.links a.is-active, .sidenav a[href]').forEach(function (link) {
    if (link.classList.contains('is-active')) link.setAttribute('aria-current', 'page');
  });

  if (sideNav) {
    menuScrim = document.createElement('button');
    menuScrim.className = 'menu-scrim';
    menuScrim.type = 'button';
    menuScrim.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Close menu' : 'Chiudi menu');
    document.body.appendChild(menuScrim);
  }

  function closeMenu() {
    if (!sideNav || !menuTrigger) return;
    sideNav.classList.remove('is-open');
    if (menuScrim) menuScrim.classList.remove('is-visible');
    menuTrigger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    menuFocusables = [];
  }

  function openMenu() {
    if (!sideNav || !menuTrigger) return;
    sideNav.classList.add('is-open');
    if (menuScrim) menuScrim.classList.add('is-visible');
    menuTrigger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    menuFocusables = Array.prototype.slice.call(sideNav.querySelectorAll('a, button'));
    if (menuFocusables[0]) menuFocusables[0].focus();
  }

  if (menuTrigger && sideNav) {
    menuTrigger.setAttribute('aria-expanded', 'false');
    menuTrigger.addEventListener('click', function (event) {
      event.preventDefault();
      if (sideNav.classList.contains('is-open')) closeMenu();
      else openMenu();
    });
    sideNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    if (menuScrim) menuScrim.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
      if (event.key === 'Tab' && sideNav.classList.contains('is-open') && menuFocusables.length) {
        var first = menuFocusables[0];
        var last = menuFocusables[menuFocusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  document.querySelectorAll('[data-copy-email]').forEach(function (button) {
    button.addEventListener('click', function () {
      var email = button.getAttribute('data-copy-email');
      var originalLabel = button.getAttribute('data-copy-label') || button.textContent;
      button.classList.add('is-copying');
      navigator.clipboard.writeText(email).then(function () {
        button.textContent = button.getAttribute('data-copied-label') || 'Copiata';
        window.setTimeout(function () { button.classList.remove('is-copying'); button.textContent = originalLabel; }, 1800);
      }).catch(function () {
        button.classList.remove('is-copying');
        window.location.href = 'mailto:' + email;
      });
    });
  });

  var backToTop = document.querySelector('.back-to-top');
  var scrollCue = document.querySelector('.scroll-cue');
  if (scrollCue) {
    window.addEventListener('scroll', function () {
      scrollCue.classList.toggle('is-hidden', window.scrollY > 80);
    }, { passive: true });
  }
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('is-visible', window.scrollY > 500);
    }, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var revealTargets = '.hero, .page-head, .tight, .projects .card, .feature-grid, .stat, .skills-col, .entry, .report-block';
  var targets = document.querySelectorAll(revealTargets);
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  targets.forEach(function (element, index) {
    element.classList.add('reveal');
    element.style.transitionDelay = reduceMotion ? '0ms' : Math.min(index * 45, 260) + 'ms';
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(function (element) { element.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries, currentObserver) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  targets.forEach(function (element) { observer.observe(element); });
})();
