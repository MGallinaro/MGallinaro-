(function () {
  'use strict';

  /*
   * COME MODIFICARE I TESTI
   * - Il testo ITALIANO si scrive solo nei file .html: questo script lo legge dalla pagina
   *   prima di tradurre e non lo sovrascrive piu'.
   * - In questo file si modifica solo l'INGLESE (campo "en:") dei testi elencati sotto.
   * - Unica eccezione: i meta tag in "metadata" (titolo/descrizione della scheda) e le
   *   etichette di accessibilita' in fondo a applyTranslations() hanno ancora IT ed EN qui.
   * - Se scrivi una frase nuova in un elemento che ha una voce qui sotto, ricordati di
   *   aggiornare anche l'inglese, altrimenti chi usa il sito in EN vede la vecchia frase.
   */

  var storageKey = 'mgallinaro-language';
  var root = document.documentElement;
  var page = window.location.pathname.split('/').pop() || 'index.html';

  var metadata = {
    'index.html': {
      title: { it: 'Marco Gallinaro', en: 'Marco Gallinaro' },
      description: { it: 'Portfolio di Marco Gallinaro, ricercatore in distributed optical fiber sensing (DOFS) per applicazioni biomediche indossabili.', en: 'Portfolio of Marco Gallinaro, researcher in distributed optical fiber sensing (DOFS) for wearable biomedical applications.' }
    },
    'progetti.html': {
      title: { it: 'Progetti — Marco Gallinaro', en: 'Projects — Marco Gallinaro' },
      description: { it: 'Progetti di Marco Gallinaro su distributed optical fiber sensing (DOFS), OFDR e strumentazione biomedicale.', en: 'Projects by Marco Gallinaro on distributed optical fiber sensing (DOFS), OFDR, and biomedical instrumentation.' }
    },
    'pubblicazioni.html': {
      title: { it: 'Pubblicazioni — Marco Gallinaro', en: 'Publications — Marco Gallinaro' },
      description: { it: 'Pubblicazioni e riconoscimenti di Marco Gallinaro.', en: 'Publications and awards of Marco Gallinaro.' }
    },
    'contatti.html': {
      title: { it: 'Contatti — Marco Gallinaro', en: 'Contact — Marco Gallinaro' },
      description: { it: 'Contatti di Marco Gallinaro.', en: 'Contact Marco Gallinaro.' }
    },
    'distributed-wearable-device.html': {
      title: { it: 'Distributed Wearable Device — Marco Gallinaro', en: 'Distributed Wearable Device — Marco Gallinaro' },
      description: { it: 'Distributed Wearable Device e sensing a fibra ottica interrogato in OFDR.', en: 'Distributed Wearable Device and OFDR-interrogated optical fiber sensing.' }
    },
    'dottorato-dofs.html': {
      title: { it: 'Dottorato in DOFS biomedicale — Marco Gallinaro', en: 'Biomedical DOFS PhD proposal — Marco Gallinaro' },
      description: { it: 'Proposta di dottorato su distributed optical fiber sensing (DOFS).', en: 'PhD proposal on distributed optical fiber sensing (DOFS).' }
    },
    'pipeline-dsm.html': {
      title: { it: 'Pipeline DSM monoassiale — Marco Gallinaro', en: 'Uniaxial DSM pipeline — Marco Gallinaro' },
      description: { it: 'Pipeline MATLAB per dati DOFS e modulo DSM monoassiale.', en: 'MATLAB pipeline for DOFS data and the uniaxial DSM module.' }
    },
    '404.html': {
      title: { it: 'Pagina non trovata — Marco Gallinaro', en: 'Page not found — Marco Gallinaro' },
      description: { it: 'La pagina richiesta non è disponibile.', en: 'The requested page is unavailable.' }
    }
  };

  var common = {
    '.skip-link': { en: 'Skip to content' },
    '.links a[href="progetti.html"]': { en: 'Projects' },
    '.links a[href="pubblicazioni.html"]': { en: 'Publications' },
    '.links a[href="contatti.html"]': { en: 'Contact' },
    '.sidenav a[href="index.html"]': { en: '<i class="material-icons">home</i>&larr; Home' },
    '.sidenav a[href="progetti.html"]': { en: '<i class="material-icons">science</i>Projects' },
    '.sidenav a[href="pubblicazioni.html"]': { en: '<i class="material-icons">menu_book</i>Publications' },
    '.sidenav a[href="contatti.html"]': { en: '<i class="material-icons">mail</i>Contact' },
    'footer span:first-child': { en: 'Marco Gallinaro — DOFS & biomedical instrumentation' }
  };

  var inlineTranslations = {
    heroProjectCta: { en: 'Explore the project' },
    heroAboutCta: { en: 'About my work' },
    proofSensing: { en: 'distributed sensing' },
    proofInterrogation: { en: 'optical interrogation' },
    proofPoints: { en: 'points over 200 mm' },
    scrollCue: { en: 'Scroll to explore' }
  };

  var pages = {
    'index.html': {
      '.hero .eyebrow': { en: 'Researcher — Distributed Optical Fiber Sensing' },
      '.hero h1': { en: 'One optical fiber, thousands of measuring points.' },
      '.hero .dek': { en: 'I work on <strong>distributed optical fiber sensing (DOFS)</strong> for wearable biomedical applications: OFDR interrogation, fiber Bragg gratings (FBG), and compliant silicone structures that turn one fiber into a dense network of force, strain, and temperature sensors.' },
      '#chi-sono > .eyebrow': { en: '01 — About me' },
      '#chi-sono h2': { en: 'Biomedical Measurements and Instrumentation' },
      '.affiliations .chip:nth-child(3)': { en: 'MSc Biomedical Engineering' },
      '.bio-photo .media-placeholder': { en: '[PHOTO TO BE ADDED]' },
      '.skills-col:nth-child(2) .placeholder': { en: '[TEXT TO BE ADDED]' },
      '.trace-cap span:nth-child(1)': { en: 'Illustrative trace — not experimental data' },
      '.trace-cap span:nth-child(2)': { en: 'Uniaxial DSM module · ~1.3–2.6 mm spatial resolution' },
      '.trace-cap span:nth-child(3)': { en: '0–200 mm · ~155 sensing points' },
      '.bio-text p:nth-child(1)': { en: 'I am an Italian <strong>Research Collaborator</strong> specialising in <strong>biomedical measurements and instrumentation</strong>, with a focus on distributed optical fiber sensing (DOFS). After a bachelor’s degree in Medical Engineering and a master’s thesis on the development of a wearable biomedical device for detecting breast tissue lesions using DOFS, I now work on biomedical instrumentation that uses light rather than electronics to measure pressure, strain, and temperature on the body.' },
      '.bio-text p:nth-child(2)': { en: 'I collaborate with <strong>ENEA Frascati</strong> and <strong>INAIL BRIC</strong> projects, moving between the optical bench — OFDR interrogators, FBGs, fibers embedded in compliant silicone — and the analysis of the signals they produce.' },
      '.bio-text p:nth-child(3)': { en: 'In 2026 I received the <strong>Best Paper Award</strong> at IEEE MetroInd for the work on the distributed wearable device described <a href="#progetto-in-evidenza" class="accent-inline-link">below</a>.' },
      '.skills-col:nth-child(1) .skills-col-title': { en: 'Hard skills' },
      '.skills-col:nth-child(2) .skills-col-title': { en: 'Soft skills' },
      '#in-breve .stat:nth-child(1) .stat-label': { en: 'Sensing method' },
      '#in-breve .stat:nth-child(2) .stat-label': { en: 'Distributed points on a single fiber' },
      '#in-breve .stat:nth-child(3) .stat-label': { en: 'Research collaborations' },
      '#in-breve .stat:nth-child(4) .stat-label': { en: 'IEEE MetroInd 2026' },
      '.cv-action': { en: '<a class="btn" href="assets/cv-marco-gallinaro-it.pdf" download>↓ Download CV in Italian</a><a class="btn" href="assets/cv-marco-gallinaro-en.pdf" download>↓ Download CV in English</a>' },
      '#in-breve > .eyebrow': { en: '02 — At a glance' },
      '#progetto-in-evidenza > .eyebrow': { en: '03 — Featured project' },
      '#progetto-in-evidenza h2': { en: 'One fiber, hundreds of sensors, arranged like a web.' },
      '.feature-links .open-link:first-child': { en: 'Explore the project →' },
      '.feature-links .open-link:last-child': { en: 'View all projects →' },
      '.feature-specs span:nth-child(1) small': { en: 'interrogation' },
      '.feature-specs span:nth-child(2) small': { en: 'optical fiber' },
      '.feature-specs span:nth-child(3) small': { en: 'Best Paper' },
      '#contatti > .eyebrow': { en: '04 — Contact' },
      '#contatti .contact-row p': { en: 'For research collaborations or DOFS/OFDR projects, get in touch.' },
      '#progetto-in-evidenza .tag': { en: 'Under review' },
      '#progetto-in-evidenza .feature-body > p': { en: 'A wearable annular silicone patch for monitoring the breast surface: the fiber’s spiral layout draws on the stress distribution of spider webs to achieve position-dependent sensitivity across the device. The work won the Best Paper Award at IEEE MetroInd 2026 and is currently under review at <em>Sensors and Actuators Reports</em>.' },
      '.home-contact-link a': { en: 'Full contact page →' }
    },
    'progetti.html': {
      '.page-head-eyebrow': { en: 'Projects' },
      '.page-head h1': { en: 'Three lines of work, one principle: the fiber as a continuous sensor.' },
      '.page-head .dek': { en: 'From the wearable device to the analysis pipeline, each project uses one optical fiber interrogated via OFDR to generate hundreds of distributed measuring points. Open a project for details and, where available, the full PDF report.' },
      '.back-link': { en: '← Home' },
      '.open-link': { en: 'Open project →' },
      '.card:nth-child(1) .tag': { en: 'Under review' },
      '.card:nth-child(2) .tag': { en: 'Proposal' },
      '.card:nth-child(3) .tag': { en: 'In progress' },
      '.card:nth-child(2) h3': { en: 'Biomedical DOFS PhD' },
      '.card:nth-child(3) h3': { en: 'Uniaxial DSM pipeline' },
      '.card .card-field:first-of-type .field-label': { en: 'Goal' },
      '.card .card-field:nth-of-type(2) .field-label': { en: 'Challenges' },
      '.card .placeholder': { en: '[TEXT TO BE ADDED]' },
      '.card:nth-child(1) .open-link': { en: 'Open project · PDF report →' },
      '.card:nth-child(2) .open-link, .card:nth-child(3) .open-link': { en: 'Open project →' }
    },
    'pubblicazioni.html': {
      '.page-head-eyebrow': { en: 'Publications & awards' },
      '.page-head h1': { en: 'Bibliographic notes.' },
      '.back-link': { en: '← Home' },
      '.entry:first-child > span:last-child': { en: 'Best Paper Award — <span class="venue">IEEE International Workshop on Metrology for Industry 4.0 & IoT (MetroInd)</span>, for the Distributed Wearable Device project.<span class="meta">Award · 2026</span>' },
      '.entry:nth-child(2) > span:last-child': { en: 'Distributed Wearable Device for monitoring the breast surface with an OFDR-interrogated spiral optical fiber. <span class="venue">Sensors and Actuators Reports</span>.<span class="meta">Under review</span>' }
    },
    'contatti.html': {
      '.page-head-eyebrow': { en: 'Contact' },
      '.page-head h1': { en: 'Let’s talk.' },
      '.back-link': { en: '← Home' },
      '#contatti .contact-row p': { en: 'For research collaborations, DOFS/OFDR project reviews, or simply to talk about optical fibers and distributed sensors, get in touch.' }
    },
    'distributed-wearable-device.html': {
      '.page-head-eyebrow': { en: 'Project · Under review, Sensors and Actuators Reports' },
      '.page-head .back-link': { en: '← All projects' },
      '.page-head .dek': { en: 'A wearable annular silicone patch designed to monitor the breast surface. An optical fiber arranged as an Archimedean spiral is interrogated via OFDR, creating hundreds of distributed sensing points able to detect force and temperature locally across the device.' },
      '#distributed-wearable-device > .eyebrow': { en: 'Technical sheet' },
      '#distributed-wearable-device .about-grid > div:first-child': { en: '<p>The spiral layout is not arbitrary: it echoes the characteristic stress distribution of spider webs, used here to support the bio-inspired rationale for the position-dependent sensitivity observed experimentally along the fiber.</p><p>The work received the Best Paper Award at IEEE MetroInd 2026 and is currently under review at <em>Sensors and Actuators Reports</em>.</p>' },
      '#distributed-wearable-device .skills .item:nth-child(1) b': { en: 'Interrogation' },
      '#distributed-wearable-device .skills .item:nth-child(2) b': { en: 'Fiber layout' },
      '#distributed-wearable-device .skills .item:nth-child(3) b': { en: 'Measured quantities' },
      '#distributed-wearable-device .skills .item:nth-child(4) b': { en: 'Status' },
      '#distributed-wearable-device .skills .item:nth-child(2)': { en: '<b>Fiber layout</b>Archimedean spiral' },
      '#distributed-wearable-device .skills .item:nth-child(3)': { en: '<b>Measured quantities</b>Force, temperature' },
      '#distributed-wearable-device .skills .item:nth-child(4)': { en: '<b>Status</b>Under review' },
      'main > section:last-of-type > .eyebrow': { en: 'Full report' },
      'main > section:last-of-type h2': { en: 'Project document' },
      '.report-actions a:nth-child(1)': { en: '↓ Download PDF' },
      '.report-actions a:nth-child(2)': { en: 'Open in a separate tab ↗' },
      '.pdf-fallback': { en: 'Your browser does not support the embedded PDF preview. <a href="assets/dwd-report.pdf">Download the report</a> to read it.' }
    },
    'dottorato-dofs.html': {
      '.page-head-eyebrow': { en: 'Project · Proposal' },
      '.page-head .back-link': { en: '← All projects' },
      '.page-head h1': { en: 'Biomedical DOFS PhD' },
      '.page-head .dek': { en: 'PhD proposal on distributed optical fiber sensing (DOFS) for wearable, nearable, and minimally invasive biomedical applications, with a focus on carefully verifying the literature behind every technical claim.' },
      '#dottorato-dofs > .eyebrow': { en: 'Technical sheet' },
      '#dottorato-dofs .about-grid > div:first-child': { en: '<p>Building the proposal is centred on source verification: every technical claim — spatial resolution, sensing mode, and application context — is matched to citations checked word by word before it enters the text.</p>' },
      '#dottorato-dofs .skills .item:nth-child(1) b': { en: 'Scope' },
      '#dottorato-dofs .skills .item:nth-child(2) b': { en: 'Method' },
      '#dottorato-dofs .skills .item:nth-child(3) b': { en: 'Status' },
      '#dottorato-dofs .skills .item:nth-child(3)': { en: '<b>Status</b>In progress' }
    },
    'pipeline-dsm.html': {
      '.page-head-eyebrow': { en: 'Project · In progress' },
      '.page-head .back-link': { en: '← All projects' },
      '.page-head h1': { en: 'Uniaxial DSM pipeline' },
      '.page-head .dek': { en: 'MATLAB pipeline for analysing DOFS data collected with the ODiSI 6102 interrogator and the uniaxial DSM module: respiratory-rate estimation, ballistocardiography (BCG) during apnea, and biomechanical reconstruction of joint movement from a single sensing device.' },
      '#pipeline-dsm > .eyebrow': { en: 'Technical sheet' },
      '#pipeline-dsm .about-grid > div:first-child': { en: '<p>The device (~200 mm of fiber, ~155 spatial points, ~1.3–2.6 mm resolution) is used in several experimental configurations: chest-cage monitoring, ballistocardiography during apnea, and reconstruction of wrist, hand, and finger movement.</p>' },
      '#pipeline-dsm .skills .item:nth-child(1) b': { en: 'Hardware' },
      '#pipeline-dsm .skills .item:nth-child(2) b': { en: 'Spatial points' },
      '#pipeline-dsm .skills .item:nth-child(2)': { en: '<b>Spatial points</b>~155 over 200 mm' },
      '#pipeline-dsm .skills .item:nth-child(3) b': { en: 'Software' },
      '#pipeline-dsm .skills .item:nth-child(4) b': { en: 'Status' },
      '#pipeline-dsm .skills .item:nth-child(4)': { en: '<b>Status</b>In progress' }
    },
    '404.html': {
      '#pagina-404 .eyebrow': { en: '404 — Page not found' },
      '#pagina-404 h1': { en: 'This path does not exist.' },
      '#pagina-404 .dek': { en: 'The requested page is unavailable or may have moved.' },
      '#pagina-404 .open-link': { en: '← Back home' }
    }
  };

  // Testo italiano originale, letto dall'HTML prima di qualsiasi traduzione.
  var italianHtml = {};
  var italianInline = new WeakMap();

  function getTranslations() {
    return Object.assign({}, common, pages[page] || {});
  }

  function captureItalian() {
    var translations = getTranslations();
    Object.keys(translations).forEach(function (selector) {
      italianHtml[selector] = Array.prototype.map.call(document.querySelectorAll(selector), function (element) {
        return element.innerHTML;
      });
    });
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      italianInline.set(element, element.textContent);
    });
  }

  function readLanguage() {
    try {
      var stored = window.localStorage.getItem(storageKey);
      return stored === 'it' || stored === 'en' ? stored : null;
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try { window.localStorage.setItem(storageKey, language); } catch (error) { /* Storage is optional. */ }
  }

  function applyTranslations(language) {
    var translations = getTranslations();
    Object.keys(translations).forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element, index) {
        var html = language === 'en' ? translations[selector].en : (italianHtml[selector] || [])[index];
        if (typeof html === 'string') element.innerHTML = html;
      });
    });
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var key = element.getAttribute('data-i18n');
      if (!inlineTranslations[key]) return;
      var text = language === 'en' ? inlineTranslations[key].en : italianInline.get(element);
      if (typeof text === 'string') element.textContent = text;
    });
    root.lang = language;
    var pageMetadata = metadata[page];
    if (pageMetadata) {
      document.title = pageMetadata.title[language];
      var description = document.querySelector('meta[name="description"]');
      if (description) description.setAttribute('content', pageMetadata.description[language]);
      document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(function (element) {
        element.setAttribute('content', pageMetadata.title[language]);
      });
      document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach(function (element) {
        element.setAttribute('content', pageMetadata.description[language]);
      });
    }
    var trace = document.querySelector('#traceSvg');
    if (trace) trace.setAttribute('aria-label', language === 'en'
      ? 'Illustrative OFDR backscatter trace along a sensorized fiber'
      : 'Traccia illustrativa di backscattering OFDR lungo una fibra sensorizzata');
    var reportFrame = document.querySelector('.pdf-frame');
    if (reportFrame) reportFrame.setAttribute('title', language === 'en'
      ? 'PDF report — Distributed Wearable Device'
      : 'Report PDF — Distributed Wearable Device');
    document.querySelectorAll('.gages circle[data-position]').forEach(function (point) {
      point.setAttribute('aria-label', language === 'en'
        ? 'Sensing point at ' + point.getAttribute('data-position')
        : 'Punto di sensing a ' + point.getAttribute('data-position'));
    });
    var languageLabel = language === 'en' ? 'Select language' : 'Seleziona lingua';
    document.querySelectorAll('.language-toggle').forEach(function (group) {
      group.setAttribute('aria-label', languageLabel);
    });
    document.querySelectorAll('.sidenav-trigger').forEach(function (button) {
      button.setAttribute('aria-label', language === 'en' ? 'Open menu' : 'Apri il menu');
    });
    document.querySelectorAll('.menu-scrim').forEach(function (button) {
      button.setAttribute('aria-label', language === 'en' ? 'Close menu' : 'Chiudi menu');
    });
    document.querySelectorAll('.back-to-top').forEach(function (button) {
      var backLabel = language === 'en' ? 'Back to top' : 'Torna su';
      button.setAttribute('aria-label', backLabel);
      button.setAttribute('title', backLabel);
    });
    document.querySelectorAll('[data-copy-email]').forEach(function (button) {
      button.setAttribute('data-copy-label', language === 'en' ? 'Copy email' : 'Copia email');
      button.setAttribute('data-copied-label', language === 'en' ? 'Copied' : 'Copiata');
      if (!button.classList.contains('is-copying')) button.textContent = button.getAttribute('data-copy-label');
    });
    window.dispatchEvent(new Event('languagechange'));
    document.querySelectorAll('[data-language]').forEach(function (button) {
      var active = button.getAttribute('data-language') === language;
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function init() {
    captureItalian();
    var browserLanguage = (navigator.language || '').toLowerCase().indexOf('en') === 0 ? 'en' : 'it';
    var initialLanguage = readLanguage() || browserLanguage || root.lang || 'it';
    applyTranslations(initialLanguage);
    document.querySelectorAll('[data-language]').forEach(function (button) {
      button.addEventListener('click', function () {
        var language = button.getAttribute('data-language');
        saveLanguage(language);
        applyTranslations(language);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
