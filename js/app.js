/* ==========================================================================
   RACÓ DE CALMA - Estètica Integral i Benestar
   Interactive App Logic JavaScript (Català)
   ========================================================================== */

// Database of Treatments in Catalan
const treatmentsData = [
  // 1. Tractaments i neteja facial (4 especificats per l'usuari)
  {
    id: 'fac-neteja-completa',
    title: 'Neteja Facial completa',
    category: 'facials',
    categoryLabel: 'Neteja Facial',
    price: 33,
    duration: '30 min',
    image: 'images/facial.png',
    shortDesc: 'Higiene facial completa + exfoliació + vapor + extraccio + mascareta + hidratació.',
    fullDesc: 'Regala a la teva pell una neteja profunda i una sensació de frescor renovada. Començarem amb una neteja inicial per eliminar impureses i restes de maquillatge amb un sabo adecuat per a la teva pell. Continuarem amb una exfoliació suau i vapor facial per preparar la pell i facilitar l’eliminació de les impureses.\n\nA continuació, realitzarem una extracció acurada i aplicarem una mascareta adaptada al teu tipus de pell. Per completar l’experiència, gaudiràs d’un relaxant massatge facial, de coll i escot, seguit d’un sèrum específic, hidratació i protecció solar.\n\nUn tractament complet que deixarà la teva pell més neta, suau, fresca i cuidada.',
    benefits: [
      'Neteja les impureses de la pell.',
      'Elimina cèl·lules mortes.',
      'Deixa la pell més suau i fresca.',
      'Ajuda a millorar l’aspecte dels porus.',
      'Aporta hidratació i confort.',
      'Proporciona una agradable sensació de relaxació.'
    ],
    skinType: 'Persones que volen mantenir una bona higiene facial, especialment quan noten la pell apagada, amb impureses o amb sensació de brutícia.'
  },
  {
    id: 'fac-resplendor-pur',
    title: 'Resplendor Pur',
    category: 'facials',
    categoryLabel: 'Tractament Facial',
    price: 40,
    duration: '30 min',
    image: 'images/facial.png',
    shortDesc: 'Neteja + exfoliació + hidratació + tractament il·luminador.',
    fullDesc: 'Descobreix una pell més lluminosa, fresca i radiant amb el nostre tractament Resplendor Pur. Començarem amb una neteja profunda i una exfoliació il·luminadora que ajudarà a eliminar les cèl·lules mortes i prepararà la pell.\n\nAplicarem una mascareta il·luminadora i gaudiràs d’un massatge facial relaxant amb especial atenció al coll i l’escot. Continuarem amb un sèrum il·luminador, contorn d’ulls i una crema hidratant per deixar la pell confortable i radiant. Finalitzarem amb protecció solar.\n\nUn ritual pensat per recuperar la lluminositat natural de la pell i donar-li un aspecte més fresc i revitalitzat.',
    benefits: [
      'Aporta lluminositat.',
      'Ajuda a millorar l’aspecte de la pell apagada.',
      'Suavitza la textura de la pell.',
      'Afavoreix una aparença més uniforme.',
      'Hidrata i aporta confort.',
      'Proporciona una sensació de frescor i benestar.'
    ],
    skinType: 'Persones amb la pell apagada, cansada o amb falta de lluminositat que busquen un tractament revitalitzant abans d’un esdeveniment o simplement per donar un extra de cura a la pell.'
  },
  {
    id: 'fac-equilibri-hidratic',
    title: 'Equilibri Hidràtic',
    category: 'facials',
    categoryLabel: 'Tractament Facial',
    price: 35,
    duration: '30 min',
    image: 'images/hero.png',
    shortDesc: 'Tractament hidratant per a pells seques/deshidratades.',
    fullDesc: 'Dona a la teva pell l’hidratació que necessita. Equilibri Hidràtic és un tractament especialment pensat per a pells seques o deshidratades que necessiten recuperar confort i suavitat.\n\nComençarem amb una neteja suau i una exfoliació delicada per preparar la pell. Aplicarem una bruma hidratant i un sèrum específic, acompanyats d’un agradable massatge facial, de coll i escot.\n\nDesprés gaudiràs d’una mascareta intensament hidratant mentre relaxes les mans amb un petit massatge. Finalitzarem amb contorn d’ulls, crema hidratant i protecció solar.\n\nUna experiència de cura i benestar que deixarà la teva pell més suau, confortable i hidratada.',
    benefits: [
      'Aporta hidratació a la pell.',
      'Ajuda a reduir la sensació de tibantor.',
      'Deixa la pell més suau i confortable.',
      'Millora l’aspecte de la pell seca.',
      'Aporta elasticitat i frescor.',
      'Afavoreix una aparença més lluminosa.'
    ],
    skinType: 'Persones amb pells seques o deshidratades, especialment quan presenten sensació de tibantor, sequedat o falta de confort.'
  },
  {
    id: 'fac-pell-calmada',
    title: 'Pell Calmada',
    category: 'facials',
    categoryLabel: 'Tractament Facial',
    price: 35,
    duration: '30 min',
    image: 'images/facial.png',
    shortDesc: 'Tractament suau per a pells sensibles o amb sensació de tibantor.',
    fullDesc: 'Un moment de calma per a les pells que necessiten una cura especialment delicada. Començarem amb una neteja suau i respectuosa, seguida d’una bruma calmant que prepararà la pell per al tractament.\n\nSegons les necessitats de la teva pell, realitzarem una exfoliació molt delicada o l’ometrem si és necessari. A continuació, aplicarem un sèrum calmant i una mascareta hidratant mentre gaudeixes d’un massatge facial suau i relaxant.\n\nFinalitzarem amb una crema hidratant i protectora i una agradable sensació de frescor amb compreses suaus.\n\nUn ritual pensat per aportar confort, suavitat i benestar a la teva pell.',
    benefits: [
      'Aporta confort a la pell.',
      'Ajuda a disminuir la sensació de tibantor.',
      'Hidrata i suavitza.',
      'Ajuda a mantenir la barrera cutània en bones condicions.',
      'Proporciona una sensació de calma i frescor.',
      'Ofereix una experiència relaxant.'
    ],
    skinType: 'Persones amb pells sensibles, seques o amb sensació de tibantor que prefereixen un tractament especialment suau i delicat.'
  },

  // 2. Tractaments corporals
  {
    id: 'corp-reductor',
    title: 'Tractament Remodelant & Anticel·lulític',
    category: 'corporals',
    categoryLabel: 'Tractament Corporal',
    price: 70,
    duration: '60 min',
    image: 'images/massage.png',
    shortDesc: 'Tècnica combinada de maderoteràpia i crema activa d\'algues per reafirmar i combatre el greix localitzat.',
    fullDesc: 'Tractament intensiu remodelant que treballa les zones rebels mitjançant elements de fusta polida i maniobres drenants profundes. Ajuda a descompondre la cel·lulitis, activar el sistema limfàtic i reafirmar la pell.',
    benefits: ['Redueix volum i cel·lulitis', 'Efecte reafirmant dels teixits', 'Elimina la retenció de líquids', 'Millora la textura de la pell'],
    skinType: 'Per a zones amb cel·lulitis o flacidesa'
  },
  {
    id: 'corp-seda',
    title: 'Envoltura de Crema de Seda & Vitamina C',
    category: 'corporals',
    categoryLabel: 'Tractament Corporal',
    price: 60,
    duration: '50 min',
    image: 'images/hero.png',
    shortDesc: 'Exfoliació suau de sals roses seguit d\'envoltura corporal de proteïnes de seda i il·luminació.',
    fullDesc: 'Deixa la teva pell suau com la seda. Comencem amb un peeling suau de sucre de canya i sals florals, seguit d\'una mascareta corporal cremosa de proteïnes de seda pura rica en vitamina C il·luminadora.',
    benefits: ['Pell extremadament sedosa', 'Il·lumina i aclara taques lleus', 'Renovació cel·lular completa', 'Aroma floral inoblidable'],
    skinType: 'Pell seca, rugosa o abans d\'esdeveniments'
  },

  // 3. Massatges amb cremes
  {
    id: 'mas-aromaterapia',
    title: 'Massatge Corporal Holístic amb Cremes & Aromes',
    category: 'masatges',
    categoryLabel: 'Massatge amb Crema',
    price: 55,
    duration: '60 min',
    image: 'images/massage.png',
    shortDesc: 'Massatge relaxant corporal complet amb mantegues de karité perfumades i olis essencials bio.',
    fullDesc: 'Un autèntic viatge sensorial per desconnectar de l\'estrès diari. Treballem esquena, coll, cames i braços combinant maniobres sueques descontracturants amb suaus passes relaxants i envoltura de cremes altament nutritives.',
    benefits: ['Relaxació muscular profunda', 'Nutrició intensa per a la pell', 'Redueix l\'estrès i l\'ansietat', 'Millora la circulació'],
    skinType: 'Apte per a totes les persones'
  },
  {
    id: 'mas-espalda-relajante',
    title: 'Massatge Descontracturant Esquena & Cervical',
    category: 'masatges',
    categoryLabel: 'Massatge amb Crema',
    price: 40,
    duration: '40 min',
    image: 'images/massage.png',
    shortDesc: 'Massatge localitzat a la zona alta per alliberar tensions de càrrega postural, coll i trapezis.',
    fullDesc: 'Pensat per a qui passa moltes hores davant l\'ordinador o carrega estrès a l\'esquena. S\'apliquen bàlsams tèrmics naturals i pressió sostinguda en punts gallet.',
    benefits: ['Allevi de contractures i nusos', 'Millora la postura corporal', 'Sensació de lleugeresa immediata', 'Elimina dolors de cap per tensió'],
    skinType: 'Ideal per a persones amb dolor o tensió d\'esquena'
  },

  // 4. Rituals de benestar
  {
    id: 'rit-raco-calma',
    title: 'Ritual Benestar Racó de Calma',
    category: 'rituals',
    categoryLabel: 'Ritual Benestar',
    price: 75,
    duration: '75 min',
    image: 'images/hero.png',
    shortDesc: 'Experiència integral combinada de neteja facial il·luminadora i massatge relaxant d\'esquena i cap.',
    fullDesc: 'El nostre ritual insígnia. Fusiona el millor del tractament facial calmant amb un massatge corporal sensorial complet. Inclou te herbal de benestar en finalitzar.',
    benefits: ['Desconnexió física i mental total', 'Pell radiant i musculatura relaxada', 'Harmonia i equilibri integral', 'El regal perfecte per a tu o algú especial'],
    skinType: 'Recomanat per a tothom que busqui una experiència VIP'
  }
];

// Current State variables
let currentTab = 'inicio';
let selectedTreatmentForModal = null;
let currentBookingStep = 1;

// Booking State
let bookingData = {
  serviceId: '',
  serviceTitle: '',
  servicePrice: 0,
  specialist: 'Lara Bilc (Especialista en Kobido i Facials)',
  date: '',
  time: '',
  clientName: '',
  clientPhone: '',
  clientEmail: '',
  notes: ''
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTreatmentsGrid();
  initFiltersAndSearch();
  initBookingWizard();
  initSkinQuiz();
  initGiftCardBuilder();
  initFaqAccordion();
  initContactForm();
  checkUrlHash();

  window.addEventListener('hashchange', checkUrlHash);
});

/* ==========================================================================
   NAVIGATION & TAB SWITCHING
   ========================================================================== */
function initNavigation() {
  const navElements = document.querySelectorAll('[data-tab]');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  navElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = el.getAttribute('data-tab');
      if (tabId) {
        switchTab(tabId);
      }

      if (navLinksContainer && navLinksContainer.classList.contains('mobile-open')) {
        navLinksContainer.classList.remove('mobile-open');
      }
    });
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const parentItem = link.closest('[data-tab]');
      if (parentItem) {
        const tabId = parentItem.getAttribute('data-tab');
        switchTab(tabId);
      }
    });
  });

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
    });
  }

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

function switchTab(tabId, filterCategory = null) {
  const pages = document.querySelectorAll('.tab-page');
  const navItems = document.querySelectorAll('.nav-item');
  
  const targetPage = document.getElementById(`tab-${tabId}`);
  if (!targetPage) return;

  pages.forEach(p => p.classList.remove('active-page'));
  
  navItems.forEach(n => {
    if (n.getAttribute('data-tab') === tabId) {
      n.classList.add('active');
    } else {
      n.classList.remove('active');
    }
  });

  targetPage.classList.add('active-page');
  currentTab = tabId;

  if (history.pushState) {
    history.pushState(null, null, `#${tabId}`);
  } else {
    window.location.hash = tabId;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (tabId === 'tratamientos') {
    const targetFilter = filterCategory || (document.querySelector('.filter-btn.active') ? document.querySelector('.filter-btn.active').getAttribute('data-filter') : 'facials');
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`);
    if (filterBtn) {
      filterBtn.click();
    }
  }
}

function checkUrlHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(`tab-${hash}`)) {
    switchTab(hash);
  }
}

/* ==========================================================================
   TREATMENTS DISPLAY & SEARCH
   ========================================================================== */
function initTreatmentsGrid() {
  const facialsOnly = treatmentsData.filter(t => t.category === 'facials');
  renderTreatments(facialsOnly, 'home-treatments-grid', 3); // Home highlights
  filterAndRender('facials', ''); // Full catalog filtered to facials by default (4 items)
}

function renderTreatments(items, containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  const list = limit ? items.slice(0, limit) : items;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-medium);">
        <p style="font-size: 1.2rem;">No s'han trobat tractaments amb aquest criteri de cerca.</p>
        <button onclick="resetFilters()" class="btn-card-details" style="margin-top: 15px; display: inline-block; width: auto; padding: 10px 24px;">Veure tots els tractaments</button>
      </div>
    `;
    return;
  }

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'treatment-card';
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="card-badge">${item.categoryLabel}</span>
        <span class="card-price-tag">${item.price}€</span>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <div class="card-meta">
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 16 14"></polyline></svg> ${item.duration}</span>
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 10 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Orgànic</span>
        </div>
        <p class="card-desc">${item.shortDesc}</p>
        <div class="card-actions">
          <button class="btn-card-details" onclick="openTreatmentModal('${item.id}')">Saber-ne més</button>
          <button class="btn-card-book" onclick="startBookingWithService('${item.id}')">Reserva cita</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function initFiltersAndSearch() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('treatment-search-input');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');
      filterAndRender(category, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeFilterBtn = document.querySelector('.filter-btn.active');
      const category = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'facials';
      filterAndRender(category, e.target.value);
    });
  }
}

function filterAndRender(category, query) {
  let filtered = treatmentsData;

  if (category && category !== 'all') {
    filtered = filtered.filter(t => t.category === category);
  }

  if (query.trim() !== '') {
    const q = query.toLowerCase();
    filtered = filtered.filter(t => 
      t.title.toLowerCase().includes(q) || 
      t.shortDesc.toLowerCase().includes(q) ||
      t.categoryLabel.toLowerCase().includes(q)
    );
  }

  renderTreatments(filtered, 'all-treatments-grid');
}

function resetFilters() {
  const searchInput = document.getElementById('treatment-search-input');
  if (searchInput) searchInput.value = '';
  const firstFilter = document.querySelector('.filter-btn[data-filter="facials"]');
  if (firstFilter) firstFilter.click();
}

/* ==========================================================================
   TREATMENT DETAIL MODAL
   ========================================================================== */
function openTreatmentModal(treatmentId) {
  const item = treatmentsData.find(t => t.id === treatmentId);
  if (!item) return;

  const modal = document.getElementById('treatment-detail-modal');
  if (!modal) return;

  document.getElementById('detail-modal-title').textContent = item.title;
  document.getElementById('detail-modal-category').textContent = item.categoryLabel;
  document.getElementById('detail-modal-price').textContent = `${item.price}€`;
  document.getElementById('detail-modal-duration').textContent = item.duration;
  document.getElementById('detail-modal-img').src = item.image;
  document.getElementById('detail-modal-desc').textContent = item.fullDesc;
  document.getElementById('detail-modal-skintype').textContent = item.skinType;

  const benefitsList = document.getElementById('detail-modal-benefits');
  benefitsList.innerHTML = '';
  item.benefits.forEach(b => {
    const li = document.createElement('li');
    li.style.marginBottom = '6px';
    li.innerHTML = `✓ ${b}`;
    benefitsList.appendChild(li);
  });

  const bookBtn = document.getElementById('detail-modal-book-btn');
  bookBtn.onclick = () => {
    closeModal('treatment-detail-modal');
    startBookingWithService(item.id);
  };

  modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

/* ==========================================================================
   INTERACTIVE APPOINTMENT BOOKING WIZARD
   ========================================================================== */
function initBookingWizard() {
  populateServiceOptions();
  setMinBookingDate();
}

function populateServiceOptions() {
  const container = document.getElementById('booking-service-grid');
  if (!container) return;

  container.innerHTML = '';
  treatmentsData.forEach(t => {
    const option = document.createElement('div');
    option.className = 'service-option-card';
    option.setAttribute('data-id', t.id);
    option.onclick = () => selectServiceForBooking(t.id);
    option.innerHTML = `
      <h5>${t.title}</h5>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.85rem; color: var(--text-light);">${t.duration}</span>
        <span style="font-weight:700; color:var(--primary-pink-dark);">${t.price}€</span>
      </div>
    `;
    container.appendChild(option);
  });
}

function openBookingModal() {
  currentBookingStep = 1;
  updateWizardStepView();
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.add('active');
}

function startBookingWithService(serviceId) {
  openBookingModal();
  selectServiceForBooking(serviceId);
  nextBookingStep(2);
}

function selectServiceForBooking(serviceId) {
  const item = treatmentsData.find(t => t.id === serviceId);
  if (!item) return;

  bookingData.serviceId = item.id;
  bookingData.serviceTitle = item.title;
  bookingData.servicePrice = item.price;

  document.querySelectorAll('.service-option-card').forEach(c => {
    if (c.getAttribute('data-id') === serviceId) {
      c.classList.add('selected');
    } else {
      c.classList.remove('selected');
    }
  });

  const nextBtn = document.getElementById('wizard-next-btn-1');
  if (nextBtn) nextBtn.disabled = false;
}

function setMinBookingDate() {
  const dateInput = document.getElementById('booking-date-input');
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    bookingData.date = dateInput.value;
  }
}

function selectTimeSlot(btn, time) {
  document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  bookingData.time = time;
}

function nextBookingStep(targetStep) {
  if (targetStep === 2 && !bookingData.serviceId) {
    showToast('Si us plau, selecciona un tractament primer');
    return;
  }

  if (targetStep === 3) {
    const dateVal = document.getElementById('booking-date-input').value;
    if (!dateVal) {
      showToast('Si us plau, selecciona una data');
      return;
    }
    if (!bookingData.time) {
      showToast('Si us plau, selecciona una hora per a la cita');
      return;
    }
    bookingData.date = dateVal;
    bookingData.specialist = document.getElementById('booking-specialist-select').value;
  }

  if (targetStep === 4) {
    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('booking-phone').value.trim();
    const email = document.getElementById('booking-email').value.trim();

    if (!name || !phone || !email) {
      showToast('Si us plau completa el teu nom, telèfon i correu electrònic');
      return;
    }

    bookingData.clientName = name;
    bookingData.clientPhone = phone;
    bookingData.clientEmail = email;
    bookingData.notes = document.getElementById('booking-notes').value.trim();

    renderBookingSummary();
  }

  currentBookingStep = targetStep;
  updateWizardStepView();
}

function prevBookingStep(targetStep) {
  currentBookingStep = targetStep;
  updateWizardStepView();
}

function updateWizardStepView() {
  document.querySelectorAll('.wizard-step-item').forEach((item, index) => {
    const stepNum = index + 1;
    item.classList.remove('active', 'completed');
    if (stepNum === currentBookingStep) {
      item.classList.add('active');
    } else if (stepNum < currentBookingStep) {
      item.classList.add('completed');
    }
  });

  document.querySelectorAll('.wizard-content-step').forEach((step, index) => {
    if (index + 1 === currentBookingStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  const backBtn = document.getElementById('wizard-back-btn');
  const nextBtn = document.getElementById('wizard-next-btn-1');
  const finishBtn = document.getElementById('wizard-finish-btn');

  if (backBtn && nextBtn && finishBtn) {
    if (currentBookingStep === 1) {
      backBtn.style.visibility = 'hidden';
      nextBtn.style.display = 'inline-flex';
      finishBtn.style.display = 'none';
    } else if (currentBookingStep === 4) {
      backBtn.style.visibility = 'visible';
      nextBtn.style.display = 'none';
      finishBtn.style.display = 'inline-flex';
    } else {
      backBtn.style.visibility = 'visible';
      nextBtn.style.display = 'inline-flex';
      finishBtn.style.display = 'none';
    }
  }
}

function renderBookingSummary() {
  const summaryBox = document.getElementById('booking-summary-box');
  if (!summaryBox) return;

  const code = 'RC-' + Math.floor(1000 + Math.random() * 9000);

  summaryBox.innerHTML = `
    <div style="background: var(--primary-pink-light); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center; margin-bottom: 20px;">
      <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary-pink-dark); text-transform: uppercase;">Codi de Reserva</span>
      <h3 style="font-size: 2rem; color: var(--primary-pink-dark); font-family: var(--font-heading);">${code}</h3>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.95rem;">
      <p><strong>Tractament:</strong> ${bookingData.serviceTitle} (${bookingData.servicePrice}€)</p>
      <p><strong>Especialista:</strong> ${bookingData.specialist}</p>
      <p><strong>Data i Hora:</strong> ${bookingData.date} a les ${bookingData.time}h</p>
      <p><strong>Client:</strong> ${bookingData.clientName} (${bookingData.clientPhone})</p>
      <p><strong>Email:</strong> ${bookingData.clientEmail}</p>
      ${bookingData.notes ? `<p><strong>Observacions:</strong> ${bookingData.notes}</p>` : ''}
    </div>
  `;
}

function finalizeBooking() {
  showToast('🎉 ¡Cita reservada amb èxit! T\'hem enviat la confirmació.');
  closeModal('booking-modal');
}

/* ==========================================================================
   SKIN DIAGNOSTIC QUIZ INTERACTIVE (Català)
   ========================================================================== */
function initSkinQuiz() {}

function quizAnswer(step, answer) {
  const current = document.getElementById(`quiz-step-${step}`);
  const next = document.getElementById(`quiz-step-${step + 1}`);

  if (current) current.classList.remove('active');
  if (next) {
    next.classList.add('active');
  } else {
    const resultBox = document.getElementById('quiz-result');
    if (resultBox) {
      resultBox.style.display = 'block';
      let recommendedTitle = 'Neteja Facial completa (33€)';
      let recommendedId = 'fac-neteja-completa';

      if (answer === 'sensible' || answer === 'deshidratada') {
        recommendedTitle = 'Equilibri Hidràtic (35€)';
        recommendedId = 'fac-equilibri-hidratic';
      } else if (answer === 'arrugas' || answer === 'flacidez') {
        recommendedTitle = 'Resplendor Pur (40€)';
        recommendedId = 'fac-resplendor-pur';
      }

      resultBox.innerHTML = `
        <div style="text-align:center;">
          <h4 style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--primary-pink-dark); margin-bottom: 8px;">¡Diagnòstic Completat!</h4>
          <p style="font-size: 0.95rem; color: var(--text-medium); margin-bottom: 16px;">Segons les teves respostes, la teva pell necessita:</p>
          <div style="background: #FFFFFF; padding: 16px; border-radius: var(--radius-md); border: 1.5px solid var(--primary-pink); margin-bottom: 16px;">
            <strong style="font-size: 1.1rem; color: var(--text-dark);">${recommendedTitle}</strong>
          </div>
          <button onclick="startBookingWithService('${recommendedId}')" class="btn-primary-pill" style="padding: 10px 24px; font-size: 0.9rem;">Reservar aquest tractament ⟶</button>
        </div>
      `;
    }
  }
}

/* ==========================================================================
   GIFT VOUCHER BUILDER (Català)
   ========================================================================== */
function initGiftCardBuilder() {
  const inputTo = document.getElementById('gift-to');
  const inputFrom = document.getElementById('gift-from');
  const inputAmount = document.getElementById('gift-amount');
  const inputMsg = document.getElementById('gift-msg');

  if (!inputTo) return;

  const updateVoucher = () => {
    document.getElementById('preview-to').textContent = inputTo.value || 'María López';
    document.getElementById('preview-from').textContent = inputFrom.value || 'Ana';
    document.getElementById('preview-amount').textContent = `${inputAmount.value || 33}€`;
    document.getElementById('preview-msg').textContent = inputMsg.value || '¡Gaudeix d\'un moment per a tu!';
  };

  [inputTo, inputFrom, inputAmount, inputMsg].forEach(input => {
    if (input) input.addEventListener('input', updateVoucher);
  });
}

function buyGiftCard() {
  const to = document.getElementById('gift-to').value || 'el destinatari';
  showToast(`🎁 ¡Bono Regal generat amb èxit per a ${to}! S\'ha enviat la targeta digital.`);
}

/* ==========================================================================
   FAQ ACCORDION & CONTACT FORM
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('💌 Missatge enviat amb èxit. Et respondrem molt aviat.');
      form.reset();
    });
  }
}

/* ==========================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
