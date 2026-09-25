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
      description: { it: 'Patch indossabile in silicone con fibra ottica a spirale interrogata in OFDR per il monitoraggio termomeccanico del tessuto mammario.', en: 'Wearable silicone patch with an OFDR-interrogated spiral optical fiber for thermomechanical monitoring of breast tissue.' }
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
      '#chi-sono h2': { it: 'Sensori su misura, dal prototipo al dato.', en: 'Sensors built for the job, from prototype to data.' },
      '.affiliations .chip:nth-child(3)': { it: 'MSc Ingegneria Biomedica', en: 'MSc Biomedical Engineering' },
      '.bio-photo .media-placeholder': { it: '[AGGIUNGI FOTO]', en: '[PHOTO TO BE ADDED]' },
      '.skills-col:nth-child(1) .skills-list': {
          it: '<li><strong>Programmazione e analisi dati:</strong> MATLAB, Python, Simulink</li><li><strong>Progettazione CAD e PCB:</strong> Fusion 360, Eagle</li><li><strong>Metodi sperimentali:</strong> sistemi di interrogazione in fibra ottica, prove meccaniche (Instron), caratterizzazione termica e meccanica, test su phantom</li><li><strong>Tecnologie di sensing:</strong> FBG, DOFS, IMU, encoder</li>',
          en: '<li><strong>Programming &amp; Data Analysis:</strong> MATLAB, Python, Simulink</li><li><strong>CAD &amp; PCB Design:</strong> Fusion 360, Eagle</li><li><strong>Experimental Methods:</strong> optical fiber interrogation systems, mechanical testing (Instron), thermal/mechanical characterization, phantom-based testing</li><li><strong>Sensing Technologies:</strong> FBG, DOFS, IMU, encoder</li>'
        },
          '.skills-col:nth-child(2) .skills-list': {
            it: '<li>Coordinamento del team</li><li>Gestione del tempo</li><li>Comunicazione efficace</li><li>Gestione del budget</li><li>Pensiero critico</li><li>Problem solving</li><li>Lavoro in autonomia</li>',
            en: '<li>Team Coordination</li><li>Time Management</li><li>Effective Communication</li><li>Budget Management</li><li>Critical Thinking</li><li>Problem Solving</li><li>Independent Work</li>'
          },
        '.trace-cap span:nth-child(1)': { it: 'Traccia illustrativa — non dati sperimentali', en: 'Illustrative trace — not experimental data' },
      '.trace-cap span:nth-child(2)': { it: 'Modulo DSM monoassiale · risoluzione spaziale ~1.3–2.6 mm', en: 'Uniaxial DSM module · ~1.3–2.6 mm spatial resolution' },
      '.trace-cap span:nth-child(3)': { it: '0–200 mm · ~155 punti di sensing', en: '0–200 mm · ~155 sensing points' },
      '.bio-text p:nth-child(1)': { it: 'Sono un <strong>Research Collaborator</strong> e sviluppo sensori per dispositivi biomedici wearable e nearable, strumenti che misurano pressione, deformazione e temperatura restando a contatto con il corpo.', en: 'I am a <strong>Research Collaborator</strong> and I develop sensors for wearable and nearable biomedical devices, instruments that measure pressure, strain, and temperature while staying in contact with the body.' },
      '.bio-text p:nth-child(2)': { it: 'Il mio lavoro attraversa le diverse fasi dello sviluppo di un dispositivo prototipale: dalla prototipazione 3D alla scelta del layout del sensore, passando per la realizzazione di strutture in silicone conformabile, fino alla caratterizzazione delle prestazioni e all’analisi dei dati.', en: 'My work spans the different phases of developing a prototype device: from 3D prototyping to the sensor layout, through building compliant silicone structures, to performance characterisation and data analysis.' },
      '.bio-text p:nth-child(3)': { it: 'La tecnologia che applico più spesso è il sensing a fibra ottica distribuita (DOFS), che trasforma la fibra stessa in un sensore continuo. In passato ho svolto un tirocinio con <strong>ENEA Frascati</strong>, grazie al quale ho potuto sviluppare competenze hands-on nell’utilizzo di tecnologie in grado di interrogare la fibra ottica.', en: 'The technology I apply most often is distributed optical fiber sensing (DOFS), which turns the fiber itself into a continuous sensor. In the past I completed an internship with <strong>ENEA Frascati</strong>, which gave me hands-on experience with technologies for interrogating optical fiber.' },
      '.bio-text p:nth-child(4)': { it: 'Sono laureato in Ingegneria Biomedica presso l’Università Campus Bio-Medico di Roma (laurea triennale in Ingegneria Medica a Tor Vergata). Nel 2026 ho ricevuto il <strong>Best Paper Award</strong> a IEEE MetroInd.', en: 'I hold a degree in Biomedical Engineering from Università Campus Bio-Medico di Roma (bachelor’s in Medical Engineering from Tor Vergata). In 2026 I received the <strong>Best Paper Award</strong> at IEEE MetroInd.' },
      '.skills-col:nth-child(1) .skills-col-title': { it: 'Competenze tecniche', en: 'Hard skills' },
      '.skills-col:nth-child(2) .skills-col-title': { it: 'Competenze trasversali', en: 'Soft skills' },
      '.cv-action': { it: '<a class="btn" href="assets/cv-marco-gallinaro-it.pdf" download>↓ Scarica il CV in italiano</a><a class="btn" href="assets/cv-marco-gallinaro-en.pdf" download>↓ Download CV in English</a>', en: '<a class="btn" href="assets/cv-marco-gallinaro-it.pdf" download>↓ Download CV in Italian</a><a class="btn" href="assets/cv-marco-gallinaro-en.pdf" download>↓ Download CV in English</a>' },
      '#progetto-in-evidenza > .eyebrow': { it: '02 — Progetto in evidenza', en: '02 — Featured project' },
      '#progetto-in-evidenza h2': { it: 'Una fibra ottica, centinaia di punti di misura di forza e temperatura.', en: 'One optical fiber, hundreds of force and temperature measuring points.' },
      '.feature-specs span:nth-child(1)': { it: '<strong>OFDR</strong><small>interrogazione</small>', en: '<strong>OFDR</strong><small>interrogation</small>' },
      '.feature-specs span:nth-child(2)': { it: '<strong>Termomeccanico</strong><small>monitoraggio</small>', en: '<strong>Thermomechanical</strong><small>monitoring</small>' },
      '.feature-specs span:nth-child(3)': { it: '<strong>Tesi</strong><small>laurea magistrale</small>', en: '<strong>Thesis</strong><small>MSc</small>' },
      '.feature-specs span:nth-child(4)': { it: '<strong>S&amp;A Reports</strong><small>rivista · in revisione</small>', en: '<strong>S&amp;A Reports</strong><small>journal · under review</small>' },
      '#contatti > .eyebrow': { it: '03 — Contatti', en: '03 — Contact' },
      '#contatti .contact-row p': { it: 'Per collaborazioni di ricerca o progetti DOFS/OFDR, scrivimi pure.', en: 'For research collaborations or DOFS/OFDR projects, get in touch.' },
      '#progetto-in-evidenza .tag': { it: 'In revisione', en: 'Under review' },
            '#progetto-in-evidenza .feature-body > p': { it: 'Una patch anulare in silicone indossabile per il monitoraggio della superficie mammaria, sviluppata durante il mio lavoro di tesi magistrale. Il layout della fibra si ispira alla tela di cattura del ragno <em>Araneus diadematus</em>, organizzata secondo una spirale di Archimede: una geometria che permette di coprire in modo efficiente una superficie bidimensionale con una struttura unidimensionale, come il filo di seta, e di distribuire uniformemente le tensioni sulla tela. Interrogata via OFDR, la fibra diventa una rete di centinaia di punti di misura in grado di localizzare variazioni di forza e temperatura.  Il lavoro è stato sottoposto alla rivista <em>Sensors and Actuators Reports</em> ed è attualmente in fase di revisione.', en: 'A wearable annular silicone patch for breast surface monitoring, developed during my MSc thesis. The fiber layout is inspired by the capture web of the spider <em>Araneus diadematus</em>, arranged as an Archimedean spiral: a geometry that efficiently covers a two-dimensional surface with a one-dimensional structure, such as a silk thread, while distributing tension evenly across the web. Interrogated via OFDR, the fiber becomes a network of hundreds of measuring points able to localize changes in force and temperature.  The work has been submitted to <em>Sensors and Actuators Reports</em> and is currently under review.' },
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
            '.card:nth-child(4) .tag': { it: 'In corso', en: 'In progress' },
      '.card:nth-child(4) h3': { it: 'Riconoscimento Gesti della Mano effettuati durante il gioco del PingPong', en: 'Hand Gesture Recognition during Table Tennis' },
      '.card .card-field:first-of-type .field-label': { it: 'Obiettivo', en: 'Goal' },
      '.card .card-field:nth-of-type(2) .field-label': { it: 'Sfide principali', en: 'Challenges' },
      '.card .placeholder': { it: '[AGGIUNGI TESTO]', en: '[TEXT TO BE ADDED]' },
            '.card:nth-child(1) .card-field:first-of-type p': { it: 'Sviluppare un dispositivo indossabile e conformabile che misuri forza e temperatura in modo distribuito sulla superficie mammaria, usando una singola fibra ottica interrogata via OFDR.', en: 'Develop a wearable, conformable device that performs distributed force and temperature measurements over the breast surface using a single OFDR-interrogated optical fiber.' },
            '.card:nth-child(1) .card-field:nth-of-type(2) p': { it: 'Una matrice siliconica abbastanza morbida da adattarsi al corpo, ma capace di trasferire la deformazione alla fibra; un layout che copra la superficie evitando curvature critiche per la fibra; la caratterizzazione in forza con una pressione distribuita su una superficie soffice.', en: 'A silicone matrix soft enough to conform to the body yet able to transfer strain to the fiber; a fiber layout that covers the surface while avoiding critical bends; force characterisation under distributed pressure on a soft surface.' },
            '.card:nth-child(1) .open-link': { it: 'Apri progetto · preprint PDF →', en: 'Open project · preprint PDF →' },
            '.card:nth-child(2) .open-link, .card:nth-child(3) .open-link, .card:nth-child(4) .open-link': { it: 'Apri progetto →', en: 'Open project →' }
    },
    'pubblicazioni.html': {
      '.page-head-eyebrow': { it: 'Pubblicazioni & riconoscimenti', en: 'Publications & awards' },
      '.page-head h1': { it: 'Note bibliografiche.', en: 'Bibliographic notes.' },
      '.back-link': { it: '← Home', en: '← Home' },
      '.entry:first-child > span:last-child': { it: 'Best Paper Award — <span class="venue">IEEE International Workshop on Metrology for Industry 4.0 & IoT (MetroInd)</span>.<span class="meta">Premio · 2026</span>', en: 'Best Paper Award — <span class="venue">IEEE International Workshop on Metrology for Industry 4.0 & IoT (MetroInd)</span>.<span class="meta">Award · 2026</span>' },
            '.entry:nth-child(2) > span:last-child': { it: 'A Bioinspired Distributed Optical Fiber Sensing Device for Wearable Thermomechanical Monitoring of Breast Tissue. <span class="venue">Sensors and Actuators Reports</span>.<span class="meta">In revisione · Preprint: <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7175167" class="accent-inline-link" target="_blank" rel="noopener">SSRN</a></span>', en: 'A Bioinspired Distributed Optical Fiber Sensing Device for Wearable Thermomechanical Monitoring of Breast Tissue. <span class="venue">Sensors and Actuators Reports</span>.<span class="meta">Under review · Preprint: <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7175167" class="accent-inline-link" target="_blank" rel="noopener">SSRN</a></span>' }
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
            '#distributed-wearable-device .about-grid > div:first-child': { it: '<p>Il layout a spirale non è arbitrario: riprende la distribuzione delle tensioni tipica delle ragnatele, usata qui per giustificare in chiave bio-ispirata la sensibilità posizione-dipendente osservata sperimentalmente lungo la fibra.</p><p>Il lavoro è attualmente in revisione presso <em>Sensors and Actuators Reports</em>.</p>', en: '<p>The spiral layout is not arbitrary: it echoes the characteristic stress distribution of spider webs, used here to support the bio-inspired rationale for the position-dependent sensitivity observed experimentally along the fiber.</p><p>The work is currently under review at <em>Sensors and Actuators Reports</em>.</p>' },
      '#distributed-wearable-device .skills .item:nth-child(1) b': { it: 'Interrogazione', en: 'Interrogation' },
      '#distributed-wearable-device .skills .item:nth-child(2) b': { it: 'Layout fibra', en: 'Fiber layout' },
      '#distributed-wearable-device .skills .item:nth-child(3) b': { it: 'Grandezze misurate', en: 'Measured quantities' },
      '#distributed-wearable-device .skills .item:nth-child(4) b': { it: 'Stato', en: 'Status' },
      '#distributed-wearable-device .skills .item:nth-child(2)': { it: '<b>Layout fibra</b>Spirale di Archimede', en: '<b>Fiber layout</b>Archimedean spiral' },
      '#distributed-wearable-device .skills .item:nth-child(3)': { it: '<b>Grandezze misurate</b>Forza, temperatura', en: '<b>Measured quantities</b>Force, temperature' },
      '#distributed-wearable-device .skills .item:nth-child(4)': { it: '<b>Stato</b>In revisione', en: '<b>Status</b>Under review' },
      '#distributed-wearable-device .skills .item:nth-child(4)': { it: '<b>Stato</b>In revisione', en: '<b>Status</b>Under review' },
      '#sfide-strategie > .eyebrow': { it: 'Sfide e strategie', en: 'Challenges and approach' },
      '#strategia-matrice': { it: '<h3>Matrice siliconica</h3><p>Come matrice ho scelto …</p>', en: '<h3>Silicone matrix</h3><p>I chose Ecoflex 00-30 …</p>' },
      'main > section:last-of-type > .eyebrow': { it: 'Preprint', en: 'Preprint' },
      'main > section:last-of-type > .eyebrow': { it: 'Preprint', en: 'Preprint' },
                 '.preprint-note': { it: 'Preprint della versione sottomessa, attualmente in revisione presso <em>Sensors and Actuators Reports</em>. La versione pubblicata potrebbe differire.', en: 'Preprint of the submitted version, currently under review at <em>Sensors and Actuators Reports</em>. The published version may differ.' },
      '.report-actions a:nth-child(1)': { it: '↓ Scarica il PDF', en: '↓ Download PDF' },
      '.report-actions a:nth-child(2)': { it: 'Apri in una scheda separata ↗', en: 'Open in a separate tab ↗' },
            '.pdf-fallback': { it: 'Il tuo browser non supporta l’anteprima integrata dei PDF. <a href="assets/dwd-preprint.pdf">Scarica il preprint</a> per leggerlo.', en: 'Your browser does not support the embedded PDF preview. <a href="assets/dwd-preprint.pdf">Download the preprint</a> to read it.' }
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
      ? 'Preprint PDF — Distributed Wearable Device'
      : 'Preprint PDF — Distributed Wearable Device');
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
