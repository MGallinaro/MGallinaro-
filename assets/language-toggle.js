(function () {
  'use strict';

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
    '.skip-link': { it: 'Vai al contenuto', en: 'Skip to content' },
    '.links a[href="progetti.html"]': { it: 'Progetti', en: 'Projects' },
    '.links a[href="pubblicazioni.html"]': { it: 'Pubblicazioni', en: 'Publications' },
    '.links a[href="contatti.html"]': { it: 'Contatti', en: 'Contact' },
    '.sidenav a[href="index.html"]': { it: 'Home', en: 'Home' },
    '.sidenav a[href="progetti.html"]': { it: 'Progetti', en: 'Projects' },
    '.sidenav a[href="pubblicazioni.html"]': { it: 'Pubblicazioni', en: 'Publications' },
    '.sidenav a[href="contatti.html"]': { it: 'Contatti', en: 'Contact' },
    'footer span:first-child': { it: 'Marco Gallinaro — DOFS & biomedical instrumentation', en: 'Marco Gallinaro — DOFS & biomedical instrumentation' }
  };

  var inlineTranslations = {
    heroProjectCta: { it: 'Scopri il progetto', en: 'Explore the project' },
    heroAboutCta: { it: 'Conosci il mio lavoro', en: 'About my work' },
    proofSensing: { it: 'sensing distribuito', en: 'distributed sensing' },
    proofInterrogation: { it: 'interrogazione ottica', en: 'optical interrogation' },
    proofPoints: { it: 'punti su 200 mm', en: 'points over 200 mm' },
    scrollCue: { it: 'Scorri per esplorare', en: 'Scroll to explore' }
  };

  var pages = {
    'index.html': {
      '.hero .eyebrow': { it: 'Ricercatore — Distributed Optical Fiber Sensing', en: 'Researcher — Distributed Optical Fiber Sensing' },
      '.hero h1': { it: 'Un filo ottico, migliaia di punti di misura.', en: 'One optical fiber, thousands of measuring points.' },
      '.hero .dek': { it: 'Lavoro su <strong>sensing a fibra ottica distribuita (DOFS)</strong> per applicazioni biomediche indossabili: interrogazione OFDR, reticoli di Bragg (FBG) e strutture conformabili in silicone che trasformano una singola fibra in una rete densa di sensori di forza, deformazione e temperatura.', en: 'I work on <strong>distributed optical fiber sensing (DOFS)</strong> for wearable biomedical applications: OFDR interrogation, fiber Bragg gratings (FBG), and compliant silicone structures that turn one fiber into a dense network of force, strain, and temperature sensors.' },
      '#chi-sono > .eyebrow': { it: '01 — Chi sono', en: '01 — About me' },
      '#chi-sono h2': { it: 'Dalla singola fibra al segnale distribuito.', en: 'From a single fiber to a distributed signal.' },
      '.affiliations .chip:nth-child(3)': { it: 'MSc Ingegneria Biomedica', en: 'MSc Biomedical Engineering' },
      '.bio-photo .media-placeholder': { it: '[AGGIUNGI FOTO]', en: '[PHOTO TO BE ADDED]' },
      '.skills-col:nth-child(2) .placeholder': { it: '[AGGIUNGI TESTO]', en: '[TEXT TO BE ADDED]' },
      '.trace-cap span:nth-child(1)': { it: 'Traccia illustrativa — non dati sperimentali', en: 'Illustrative trace — not experimental data' },
      '.trace-cap span:nth-child(2)': { it: 'Modulo DSM monoassiale · risoluzione spaziale ~1.3–2.6 mm', en: 'Uniaxial DSM module · ~1.3–2.6 mm spatial resolution' },
      '.trace-cap span:nth-child(3)': { it: '0–200 mm · ~155 punti di sensing', en: '0–200 mm · ~155 sensing points' },
      '.bio-text p:nth-child(1)': { it: 'Sono un <strong>Research Collaborator</strong> italiano specializzato in sensing a fibra ottica distribuita. Dopo una laurea triennale in Ingegneria Medica e una tesi magistrale dedicata al DOFS, lavoro oggi su strumentazione biomedicale che usa la luce, invece dell’elettronica, per misurare pressione, deformazione e temperatura sul corpo.', en: 'I am an Italian <strong>Research Collaborator</strong> specialising in distributed optical fiber sensing. After a bachelor’s degree in Medical Engineering and a master’s thesis on DOFS, I now work on biomedical instrumentation that uses light rather than electronics to measure pressure, strain, and temperature on the body.' },
      '.bio-text p:nth-child(2)': { it: 'Collaboro con <strong>ENEA Frascati</strong> e con progetti nell’ambito <strong>INAIL BRIC</strong>, muovendomi tra il banco ottico — interrogatori OFDR, reticoli FBG, fibre annegate in silicone conformabile — e l’analisi dei dati che quei segnali producono.', en: 'I collaborate with <strong>ENEA Frascati</strong> and <strong>INAIL BRIC</strong> projects, moving between the optical bench — OFDR interrogators, FBGs, fibers embedded in compliant silicone — and the analysis of the signals they produce.' },
      '.bio-text p:nth-child(3)': { it: 'Nel 2026 ho ricevuto il <strong>Best Paper Award</strong> a IEEE MetroInd per il lavoro sul dispositivo indossabile distribuito che trovi <a href="#progetto-in-evidenza" class="accent-inline-link">qui sotto</a>.', en: 'In 2026 I received the <strong>Best Paper Award</strong> at IEEE MetroInd for the work on the distributed wearable device described <a href="#progetto-in-evidenza" class="accent-inline-link">below</a>.' },
      '.skills-col:nth-child(1) .skills-col-title': { it: 'Competenze tecniche', en: 'Hard skills' },
      '.skills-col:nth-child(2) .skills-col-title': { it: 'Competenze trasversali', en: 'Soft skills' },
      '#in-breve .stat:nth-child(1) .stat-label': { it: 'Metodo di sensing', en: 'Sensing method' },
      '#in-breve .stat:nth-child(2) .stat-label': { it: 'Punti distribuiti su una singola fibra', en: 'Distributed points on a single fiber' },
      '#in-breve .stat:nth-child(3) .stat-label': { it: 'Collaborazioni di ricerca', en: 'Research collaborations' },
      '#in-breve .stat:nth-child(4) .stat-label': { it: 'IEEE MetroInd 2026', en: 'IEEE MetroInd 2026' },
      '.cv-action': { it: '<a class="btn" href="assets/cv-marco-gallinaro-it.pdf" download>↓ Scarica il CV in italiano</a><a class="btn" href="assets/cv-marco-gallinaro-en.pdf" download>↓ Download CV in English</a>', en: '<a class="btn" href="assets/cv-marco-gallinaro-it.pdf" download>↓ Download CV in Italian</a><a class="btn" href="assets/cv-marco-gallinaro-en.pdf" download>↓ Download CV in English</a>' },
      '#in-breve > .eyebrow': { it: '02 — In breve', en: '02 — At a glance' },
      '#progetto-in-evidenza > .eyebrow': { it: '03 — Progetto in evidenza', en: '03 — Featured project' },
      '#progetto-in-evidenza h2': { it: 'Una fibra, centinaia di sensori, disposti come una ragnatela.', en: 'One fiber, hundreds of sensors, arranged like a web.' },
      '.feature-links .open-link:first-child': { it: 'Scopri il progetto →', en: 'Explore the project →' },
      '.feature-links .open-link:last-child': { it: 'Vedi tutti i progetti →', en: 'View all projects →' },
      '.feature-specs span:nth-child(1) small': { it: 'interrogazione', en: 'interrogation' },
      '.feature-specs span:nth-child(2) small': { it: 'fibra ottica', en: 'optical fiber' },
      '.feature-specs span:nth-child(3) small': { it: 'Best Paper', en: 'Best Paper' },
      '#contatti > .eyebrow': { it: '04 — Contatti', en: '04 — Contact' },
      '#contatti .contact-row p': { it: 'Per collaborazioni di ricerca o progetti DOFS/OFDR, scrivimi pure.', en: 'For research collaborations or DOFS/OFDR projects, get in touch.' },
      '#progetto-in-evidenza .tag': { it: 'In revisione', en: 'Under review' },
      '#progetto-in-evidenza .feature-body > p': { it: 'Una patch anulare in silicone indossabile per il monitoraggio della superficie mammaria: il layout a spirale della fibra riprende la distribuzione delle tensioni delle ragnatele per ottenere una sensibilità posizione-dipendente su tutta la superficie. Il lavoro ha vinto il Best Paper Award a IEEE MetroInd 2026 ed è ora in revisione su <em>Sensors and Actuators Reports</em>.', en: 'A wearable annular silicone patch for monitoring the breast surface: the fiber’s spiral layout draws on the stress distribution of spider webs to achieve position-dependent sensitivity across the device. The work won the Best Paper Award at IEEE MetroInd 2026 and is currently under review at <em>Sensors and Actuators Reports</em>.' },
      '.home-contact-link a': { it: 'Pagina contatti completa →', en: 'Full contact page →' }
    },
    'progetti.html': {
      '.page-head-eyebrow': { it: 'Progetti', en: 'Projects' },
      '.page-head h1': { it: 'Tre linee di lavoro, un unico principio: la fibra come sensore continuo.', en: 'Three lines of work, one principle: the fiber as a continuous sensor.' },
      '.page-head .dek': { it: 'Dal dispositivo indossabile alla pipeline di analisi, ogni progetto usa una singola fibra ottica interrogata via OFDR per generare centinaia di punti di misura distribuiti. Apri un progetto per i dettagli e, dove disponibile, il report completo in PDF.', en: 'From the wearable device to the analysis pipeline, each project uses one optical fiber interrogated via OFDR to generate hundreds of distributed measuring points. Open a project for details and, where available, the full PDF report.' },
      '.back-link': { it: '← Home', en: '← Home' },
      '.open-link': { it: 'Apri progetto →', en: 'Open project →' },
      '.card:nth-child(1) .tag': { it: 'In revisione', en: 'Under review' },
      '.card:nth-child(2) .tag': { it: 'Proposta', en: 'Proposal' },
      '.card:nth-child(3) .tag': { it: 'In corso', en: 'In progress' },
      '.card:nth-child(2) h3': { it: 'Dottorato in DOFS biomedicale', en: 'Biomedical DOFS PhD' },
      '.card:nth-child(3) h3': { it: 'Pipeline DSM monoassiale', en: 'Uniaxial DSM pipeline' },
      '.card .card-field:first-of-type .field-label': { it: 'Obiettivo', en: 'Goal' },
      '.card .card-field:nth-of-type(2) .field-label': { it: 'Sfide principali', en: 'Challenges' },
      '.card .placeholder': { it: '[AGGIUNGI TESTO]', en: '[TEXT TO BE ADDED]' },
      '.card:nth-child(1) .open-link': { it: 'Apri progetto · report PDF →', en: 'Open project · PDF report →' },
      '.card:nth-child(2) .open-link, .card:nth-child(3) .open-link': { it: 'Apri progetto →', en: 'Open project →' }
    },
    'pubblicazioni.html': {
      '.page-head-eyebrow': { it: 'Pubblicazioni & riconoscimenti', en: 'Publications & awards' },
      '.page-head h1': { it: 'Note bibliografiche.', en: 'Bibliographic notes.' },
      '.back-link': { it: '← Home', en: '← Home' },
      '.entry:first-child > span:last-child': { it: 'Best Paper Award — <span class="venue">IEEE International Workshop on Metrology for Industry 4.0 & IoT (MetroInd)</span>, per il lavoro sul Distributed Wearable Device.<span class="meta">Premio · 2026</span>', en: 'Best Paper Award — <span class="venue">IEEE International Workshop on Metrology for Industry 4.0 & IoT (MetroInd)</span>, for the Distributed Wearable Device project.<span class="meta">Award · 2026</span>' },
      '.entry:nth-child(2) > span:last-child': { it: 'Distributed Wearable Device per il monitoraggio della superficie mammaria tramite fibra ottica a spirale interrogata in OFDR. <span class="venue">Sensors and Actuators Reports</span>.<span class="meta">In revisione</span>', en: 'Distributed Wearable Device for monitoring the breast surface with an OFDR-interrogated spiral optical fiber. <span class="venue">Sensors and Actuators Reports</span>.<span class="meta">Under review</span>' }
    },
    'contatti.html': {
      '.page-head-eyebrow': { it: 'Contatti', en: 'Contact' },
      '.page-head h1': { it: 'Scriviamoci.', en: 'Let’s talk.' },
      '.back-link': { it: '← Home', en: '← Home' },
      '#contatti .contact-row p': { it: 'Per collaborazioni di ricerca, revisione di progetti DOFS/OFDR o semplicemente per parlare di fibre ottiche e sensori distribuiti, scrivimi pure.', en: 'For research collaborations, DOFS/OFDR project reviews, or simply to talk about optical fibers and distributed sensors, get in touch.' }
    },
    'distributed-wearable-device.html': {
      '.page-head-eyebrow': { it: 'Progetto · In revisione, Sensors and Actuators Reports', en: 'Project · Under review, Sensors and Actuators Reports' },
      '.page-head .back-link': { it: '← Tutti i progetti', en: '← All projects' },
      '.page-head .dek': { it: 'Una patch anulare in silicone indossabile, pensata per il monitoraggio della superficie mammaria. Una fibra ottica disposta a spirale di Archimede viene interrogata via OFDR, creando centinaia di punti di sensing distribuiti capaci di rilevare forza e temperatura in modo localizzato su tutta la superficie del dispositivo.', en: 'A wearable annular silicone patch designed to monitor the breast surface. An optical fiber arranged as an Archimedean spiral is interrogated via OFDR, creating hundreds of distributed sensing points able to detect force and temperature locally across the device.' },
      '#distributed-wearable-device > .eyebrow': { it: 'Scheda tecnica', en: 'Technical sheet' },
      '#distributed-wearable-device .about-grid > div:first-child': { it: '<p>Il layout a spirale non è arbitrario: riprende la distribuzione delle tensioni tipica delle ragnatele, usata qui per giustificare in chiave bio-ispirata la sensibilità posizione-dipendente osservata sperimentalmente lungo la fibra.</p><p>Il lavoro è stato riconosciuto con il Best Paper Award a IEEE MetroInd 2026, ed è attualmente in revisione presso <em>Sensors and Actuators Reports</em>.</p>', en: '<p>The spiral layout is not arbitrary: it echoes the characteristic stress distribution of spider webs, used here to support the bio-inspired rationale for the position-dependent sensitivity observed experimentally along the fiber.</p><p>The work received the Best Paper Award at IEEE MetroInd 2026 and is currently under review at <em>Sensors and Actuators Reports</em>.</p>' },
      '#distributed-wearable-device .skills .item:nth-child(1) b': { it: 'Interrogazione', en: 'Interrogation' },
      '#distributed-wearable-device .skills .item:nth-child(2) b': { it: 'Layout fibra', en: 'Fiber layout' },
      '#distributed-wearable-device .skills .item:nth-child(3) b': { it: 'Grandezze misurate', en: 'Measured quantities' },
      '#distributed-wearable-device .skills .item:nth-child(4) b': { it: 'Stato', en: 'Status' },
      '#distributed-wearable-device .skills .item:nth-child(2)': { it: '<b>Layout fibra</b>Spirale di Archimede', en: '<b>Fiber layout</b>Archimedean spiral' },
      '#distributed-wearable-device .skills .item:nth-child(3)': { it: '<b>Grandezze misurate</b>Forza, temperatura', en: '<b>Measured quantities</b>Force, temperature' },
      '#distributed-wearable-device .skills .item:nth-child(4)': { it: '<b>Stato</b>In revisione', en: '<b>Status</b>Under review' },
      'main > section:last-of-type > .eyebrow': { it: 'Report completo', en: 'Full report' },
      'main > section:last-of-type h2': { it: 'Documento del progetto', en: 'Project document' },
      '.report-actions a:nth-child(1)': { it: '↓ Scarica il PDF', en: '↓ Download PDF' },
      '.report-actions a:nth-child(2)': { it: 'Apri in una scheda separata ↗', en: 'Open in a separate tab ↗' },
      '.pdf-fallback': { it: 'Il tuo browser non supporta l’anteprima integrata dei PDF. <a href="assets/dwd-report.pdf">Scarica il report</a> per leggerlo.', en: 'Your browser does not support the embedded PDF preview. <a href="assets/dwd-report.pdf">Download the report</a> to read it.' }
    },
    'dottorato-dofs.html': {
      '.page-head-eyebrow': { it: 'Progetto · Proposta', en: 'Project · Proposal' },
      '.page-head .back-link': { it: '← Tutti i progetti', en: '← All projects' },
      '.page-head h1': { it: 'Dottorato in DOFS biomedicale', en: 'Biomedical DOFS PhD' },
      '.page-head .dek': { it: 'Proposta di dottorato sul sensing a fibra ottica distribuita (DOFS) per applicazioni biomediche indossabili, "nearable" e minimamente invasive, con particolare attenzione alla verifica puntuale della letteratura a supporto di ogni rivendicazione tecnica.', en: 'PhD proposal on distributed optical fiber sensing (DOFS) for wearable, nearable, and minimally invasive biomedical applications, with a focus on carefully verifying the literature behind every technical claim.' },
      '#dottorato-dofs > .eyebrow': { it: 'Scheda tecnica', en: 'Technical sheet' },
      '#dottorato-dofs .about-grid > div:first-child': { it: '<p>Il lavoro di costruzione della proposta è centrato sulla verifica delle fonti: ogni affermazione tecnica — risoluzione spaziale, modalità di sensing, contesto applicativo — viene fatta corrispondere a citazioni verificate parola per parola prima di essere inserita nel testo.</p>', en: '<p>Building the proposal is centred on source verification: every technical claim — spatial resolution, sensing mode, and application context — is matched to citations checked word by word before it enters the text.</p>' },
      '#dottorato-dofs .skills .item:nth-child(1) b': { it: 'Ambito', en: 'Scope' },
      '#dottorato-dofs .skills .item:nth-child(2) b': { it: 'Metodo', en: 'Method' },
      '#dottorato-dofs .skills .item:nth-child(3) b': { it: 'Stato', en: 'Status' },
      '#dottorato-dofs .skills .item:nth-child(3)': { it: '<b>Stato</b>In corso', en: '<b>Status</b>In progress' }
    },
    'pipeline-dsm.html': {
      '.page-head-eyebrow': { it: 'Progetto · In corso', en: 'Project · In progress' },
      '.page-head .back-link': { it: '← Tutti i progetti', en: '← All projects' },
      '.page-head h1': { it: 'Pipeline DSM monoassiale', en: 'Uniaxial DSM pipeline' },
      '.page-head .dek': { it: "Pipeline in MATLAB per l'analisi di dati DOFS raccolti con l'interrogatore ODiSI 6102 e il modulo monoassiale DSM: stima della frequenza respiratoria, ballistocardiografia (BCG) durante l'apnea e ricostruzione biomeccanica del movimento articolare, da un singolo dispositivo di sensing.", en: 'MATLAB pipeline for analysing DOFS data collected with the ODiSI 6102 interrogator and the uniaxial DSM module: respiratory-rate estimation, ballistocardiography (BCG) during apnea, and biomechanical reconstruction of joint movement from a single sensing device.' },
      '#pipeline-dsm > .eyebrow': { it: 'Scheda tecnica', en: 'Technical sheet' },
      '#pipeline-dsm .about-grid > div:first-child': { it: '<p>Il dispositivo (~200 mm di fibra, ~155 punti spaziali, risoluzione ~1.3–2.6 mm) viene usato su più configurazioni sperimentali: monitoraggio della gabbia toracica, ballistocardiografia durante l’apnea, e ricostruzione del movimento di polso/mano/dita.</p>', en: '<p>The device (~200 mm of fiber, ~155 spatial points, ~1.3–2.6 mm resolution) is used in several experimental configurations: chest-cage monitoring, ballistocardiography during apnea, and reconstruction of wrist, hand, and finger movement.</p>' },
      '#pipeline-dsm .skills .item:nth-child(1) b': { it: 'Hardware', en: 'Hardware' },
      '#pipeline-dsm .skills .item:nth-child(2) b': { it: 'Punti spaziali', en: 'Spatial points' },
      '#pipeline-dsm .skills .item:nth-child(2)': { it: '<b>Punti spaziali</b>~155 su 200 mm', en: '<b>Spatial points</b>~155 over 200 mm' },
      '#pipeline-dsm .skills .item:nth-child(3) b': { it: 'Software', en: 'Software' },
      '#pipeline-dsm .skills .item:nth-child(4) b': { it: 'Stato', en: 'Status' },
      '#pipeline-dsm .skills .item:nth-child(4)': { it: '<b>Stato</b>In corso', en: '<b>Status</b>In progress' }
    },
    '404.html': {
      '#pagina-404 .eyebrow': { it: '404 — Pagina non trovata', en: '404 — Page not found' },
      '#pagina-404 h1': { it: 'Questo percorso non esiste.', en: 'This path does not exist.' },
      '#pagina-404 .dek': { it: 'La pagina richiesta non è disponibile o potrebbe essere stata spostata.', en: 'The requested page is unavailable or may have moved.' },
      '#pagina-404 .open-link': { it: '← Torna alla home', en: '← Back home' }
    }
  };

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
    var translations = Object.assign({}, common, pages[page] || {});
    Object.keys(translations).forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.innerHTML = translations[selector][language];
      });
    });
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var key = element.getAttribute('data-i18n');
      if (inlineTranslations[key]) element.textContent = inlineTranslations[key][language];
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
