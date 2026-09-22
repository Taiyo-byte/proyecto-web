/* ==========================================================================
   CLEAN BEAUTY - Estética Integral
   Interactive App Logic JavaScript
   ========================================================================== */

// Database of Treatments
const treatmentsData = [
  {
    id: 'fac-kobido',
    title: 'Lifting Facial Japonés Kobido',
    category: 'faciales',
    categoryLabel: 'Tratamiento Facial',
    price: 65,
    duration: '60 min',
    image: 'images/facial.png',
    shortDesc: 'Masaje facial milenario que reafirma, reduce arrugas de expresión y devuelve la luminosidad natural a la piel.',
    fullDesc: 'El ritual Kobido es una combinación magistral de técnicas de masaje facial japonés tradicional. Estimula la circulación profunda, libera tensiones musculares en el rostro y el cuello, y favorece la producción natural de colágeno y elastina. Ideal para un efecto buena cara inmediato y preventivo del envejecimiento.',
    benefits: ['Efecto lifting natural sin agujas', 'Estimula el colágeno y la elastina', 'Drena toxinas y oxigena los tejidos', 'Alivia la tensión mandibular'],
    skinType: 'Todo tipo de pieles, especialmente maduras o con fatiga'
  },
  {
    id: 'lim-diamante',
    title: 'Higiene Facial con Punta de Diamante',
    category: 'limpiezas',
    categoryLabel: 'Limpieza Facial',
    price: 45,
    duration: '50 min',
    image: 'images/facial.png',
    shortDesc: 'Limpieza profunda con microdermoabrasión para eliminar células muertas, impurezas y poro obstruido.',
    fullDesc: 'Tratamiento esencial de higiene profunda que utiliza un cabezal de diamante para pulir suavemente la capa córnea de la piel. Combina extracción cuidadosa, serum calmante botánico y mascarilla hidroplástica personalizada según tu tipo de piel.',
    benefits: ['Piel infinitamente suave y limpia', 'Minimiza los poros dilatados', 'Mejora la absorción de cosméticos', 'Tono unificado y sin imperfecciones'],
    skinType: 'Pieles mixtas, grasas o con textura irregular'
  },
  {
    id: 'fac-hialuronico',
    title: 'Relleno de Hidratación Ácido Hialurónico',
    category: 'faciales',
    categoryLabel: 'Tratamiento Facial',
    price: 75,
    duration: '75 min',
    image: 'images/hero.png',
    shortDesc: 'Tratamiento hiper-hidratante que redensifica la piel desde las capas más profundas con ampollas orgánicas.',
    fullDesc: 'Infundimos ácido hialurónico de alto y bajo peso molecular con ultrasonidos de baja frecuencia. Rellena pequeñas arrugas, calma rojeces y deja la piel jugosa, tersa y visiblemente rejuvenecida desde la primera sesión.',
    benefits: ['Hidratación profunda 24h', 'Suaviza líneas de expresión', 'Restaura la barrera cutánea', 'Efecto plumping instantáneo'],
    skinType: 'Piel deshidratada, seca o expuesta al sol'
  },
  {
    id: 'mas-aromaterapia',
    title: 'Masaje Corporal Holístico con Cremas & Aromas',
    category: 'masajes',
    categoryLabel: 'Masaje con Crema',
    price: 55,
    duration: '60 min',
    image: 'images/massage.png',
    shortDesc: 'Masaje relajante corporal completo con mantecas de karité perfumadas y aceites esenciales bio.',
    fullDesc: 'Un auténtico viaje sensorial para desconectar del estrés diario. Trabajamos espalda, cuello, piernas y brazos combinando maniobras suecas descontracturantes con suaves pases relajantes y envoltura de cremas altamente nutritivas.',
    benefits: ['Relajación muscular profunda', 'Nutrición intensa para la piel', 'Reduce el estrés y la ansiedad', 'Mejora la circulación'],
    skinType: 'Apto para todas las personas'
  },
  {
    id: 'corp-reductor',
    title: 'Tratamiento Remodelante & Anticelulítico',
    category: 'corporales',
    categoryLabel: 'Tratamiento Corporal',
    price: 70,
    duration: '60 min',
    image: 'images/massage.png',
    shortDesc: 'Técnica combinada de maderoterapia y crema activa de algas para reafirmar y combatir grasa localizada.',
    fullDesc: 'Tratamiento intensivo remodelante que trabaja las zonas rebeldes mediante elementos de madera pulida y maniobras drenantes profundas. Ayuda a descomponer la celulitis, activar el sistema linfático y reafirmar la piel.',
    benefits: ['Reduce volumen y celulitis', 'Efecto reafirmante de tejidos', 'Elimina la retención de líquidos', 'Mejora la textura de la piel'],
    skinType: 'Para zonas con celulitis o flacidez'
  },
  {
    id: 'lim-oxigenante',
    title: 'Ritual Limpieza Facial Oxigenante Detox',
    category: 'limpiezas',
    categoryLabel: 'Limpieza Facial',
    price: 50,
    duration: '60 min',
    image: 'images/facial.png',
    shortDesc: 'Oxigenoterapia botánica para pieles asfixiadas por la polución urbana o el tabaco.',
    fullDesc: 'Limpieza detoxificante que libera a las células de la acumulación de contaminantes. Incluye peeling enzimático dulce, nebulización de oxígeno puro y mascarilla de arcilla rosa bio.',
    benefits: ['Devuelve la luminosidad perdida', 'Efecto barrera anti-polución', 'Revitaliza pieles apagadas', 'Textura fresca y revitalizada'],
    skinType: 'Pieles de ciudad, apagadas o fumadoras'
  },
  {
    id: 'corp-seda',
    title: 'Envoltura de Crema de Seda & Vitamina C',
    category: 'corporales',
    categoryLabel: 'Tratamiento Corporal',
    price: 60,
    duration: '50 min',
    image: 'images/hero.png',
    shortDesc: 'Exfoliación suave de sales rosas seguida de envoltura corporal de proteínas de seda e iluminación.',
    fullDesc: 'Deja tu piel suave como la seda. Comenzamos con un peeling suave de azúcar de caña y sales florales, seguido de una mascarilla corporal cremosa de proteínas de seda pura rica en vitamina C iluminadora.',
    benefits: ['Piel extremadamente sedosa', 'Ilumina y aclara manchas leves', 'Renovación celular completa', 'Aroma floral inolvidable'],
    skinType: 'Piel seca, rugosa o previas a eventos'
  },
  {
    id: 'mas-espalda-relajante',
    title: 'Masaje Descontracturante Espalda & Cervical',
    category: 'masajes',
    categoryLabel: 'Masaje con Crema',
    price: 40,
    duration: '40 min',
    image: 'images/massage.png',
    shortDesc: 'Masaje localizado en zona alta para liberar tensiones de carga postural, cuello y trapecios.',
    fullDesc: 'Pensado para quienes pasan muchas horas frente al ordenador o cargan estrés en la espalda. Se aplican bálsamos térmicos naturales y presión sostenida en puntos gatillo.',
    benefits: ['Alivio de contracturas y nudos', 'Mejora la postura postural', 'Sensación de ligereza inmediata', 'Elimina dolores de cabeza por tensión'],
    skinType: 'Ideal para personas con dolor o tensión de espalda'
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
  specialist: 'Lara Bilc (Especialista en Kobido y Faciales)',
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

  // Attach click to any element with data-tab
  navElements.forEach(el => {
    el.addEventListener('click', (e) => {
      // Prevent default anchor jump
      e.preventDefault();
      
      const tabId = el.getAttribute('data-tab');
      if (tabId) {
        switchTab(tabId);
      }

      // Close mobile menu if open
      if (navLinksContainer && navLinksContainer.classList.contains('mobile-open')) {
        navLinksContainer.classList.remove('mobile-open');
      }
    });
  });

  // Attach click to .nav-link inside .nav-item directly for 100% reliability
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

  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
    });
  }

  // Header background shadow on scroll
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

  // Hide all pages
  pages.forEach(p => p.classList.remove('active-page'));
  
  // Update nav link highlights
  navItems.forEach(n => {
    if (n.getAttribute('data-tab') === tabId) {
      n.classList.add('active');
    } else {
      n.classList.remove('active');
    }
  });

  // Show target page
  targetPage.classList.add('active-page');
  currentTab = tabId;

  // Update hash without jumping
  if (history.pushState) {
    history.pushState(null, null, `#${tabId}`);
  } else {
    window.location.hash = tabId;
  }

  // Smooth scroll to top of page
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // If pre-filtered category passed
  if (tabId === 'tratamientos' && filterCategory) {
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${filterCategory}"]`);
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
  renderTreatments(treatmentsData, 'home-treatments-grid', 3); // Home highlights
  renderTreatments(treatmentsData, 'all-treatments-grid'); // Full treatments catalog
}

function renderTreatments(items, containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  const list = limit ? items.slice(0, limit) : items;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-medium);">
        <p style="font-size: 1.2rem;">No se encontraron tratamientos con ese criterio de búsqueda.</p>
        <button onclick="resetFilters()" class="btn-card-details" style="margin-top: 15px; display: inline-block; width: auto; padding: 10px 24px;">Ver todos los tratamientos</button>
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
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${item.duration}</span>
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 10 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Orgánico</span>
        </div>
        <p class="card-desc">${item.shortDesc}</p>
        <div class="card-actions">
          <button class="btn-card-details" onclick="openTreatmentModal('${item.id}')">Saber más</button>
          <button class="btn-card-book" onclick="startBookingWithService('${item.id}')">Reservar cita</button>
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
      const category = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
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
  const firstFilter = document.querySelector('.filter-btn[data-filter="all"]');
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
    showToast('Por favor, selecciona un tratamiento primero');
    return;
  }

  if (targetStep === 3) {
    const dateVal = document.getElementById('booking-date-input').value;
    if (!dateVal) {
      showToast('Por favor, selecciona una fecha');
      return;
    }
    if (!bookingData.time) {
      showToast('Por favor, selecciona una hora para la cita');
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
      showToast('Por favor completa tu nombre, teléfono y email');
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

  // Footer button controls
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

  const code = 'CB-' + Math.floor(1000 + Math.random() * 9000);

  summaryBox.innerHTML = `
    <div style="background: var(--primary-pink-light); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center; margin-bottom: 20px;">
      <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary-pink-dark); text-transform: uppercase;">Código de Reserva</span>
      <h3 style="font-size: 2rem; color: var(--primary-pink-dark); font-family: var(--font-heading);">${code}</h3>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.95rem;">
      <p><strong>Tratamiento:</strong> ${bookingData.serviceTitle} (${bookingData.servicePrice}€)</p>
      <p><strong>Especialista:</strong> ${bookingData.specialist}</p>
      <p><strong>Fecha y Hora:</strong> ${bookingData.date} a las ${bookingData.time}h</p>
      <p><strong>Cliente:</strong> ${bookingData.clientName} (${bookingData.clientPhone})</p>
      <p><strong>Email:</strong> ${bookingData.clientEmail}</p>
      ${bookingData.notes ? `<p><strong>Notas:</strong> ${bookingData.notes}</p>` : ''}
    </div>
  `;
}

function finalizeBooking() {
  showToast('🎉 ¡Cita reservada con éxito! Te hemos enviado la confirmación.');
  closeModal('booking-modal');
}

/* ==========================================================================
   SKIN DIAGNOSTIC QUIZ INTERACTIVE
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
      let recommendedTitle = 'Higiene Facial Oxigenante Detox';
      let recommendedId = 'lim-oxigenante';

      if (answer === 'sensible' || answer === 'deshidratada') {
        recommendedTitle = 'Relleno de Hidratación Ácido Hialurónico';
        recommendedId = 'fac-hialuronico';
      } else if (answer === 'arrugas' || answer === 'flacidez') {
        recommendedTitle = 'Lifting Facial Japonés Kobido';
        recommendedId = 'fac-kobido';
      }

      resultBox.innerHTML = `
        <div style="text-align:center;">
          <h4 style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--primary-pink-dark); margin-bottom: 8px;">¡Diagnóstico Completado!</h4>
          <p style="font-size: 0.95rem; color: var(--text-medium); margin-bottom: 16px;">Según tus respuestas, tu piel necesita:</p>
          <div style="background: #FFFFFF; padding: 16px; border-radius: var(--radius-md); border: 1.5px solid var(--primary-pink); margin-bottom: 16px;">
            <strong style="font-size: 1.1rem; color: var(--text-dark);">${recommendedTitle}</strong>
          </div>
          <button onclick="startBookingWithService('${recommendedId}')" class="btn-primary-pill" style="padding: 10px 24px; font-size: 0.9rem;">Reservar este Tratamiento ⟶</button>
        </div>
      `;
    }
  }
}

/* ==========================================================================
   GIFT VOUCHER BUILDER
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
    document.getElementById('preview-amount').textContent = `${inputAmount.value || 50}€`;
    document.getElementById('preview-msg').textContent = inputMsg.value || '¡Disfruta de un momento para ti!';
  };

  [inputTo, inputFrom, inputAmount, inputMsg].forEach(input => {
    if (input) input.addEventListener('input', updateVoucher);
  });
}

function buyGiftCard() {
  const to = document.getElementById('gift-to').value || 'el destinatario';
  showToast(`🎁 ¡Bono Regalo generado con éxito para ${to}! Se ha enviado la tarjeta digital en PDF.`);
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
      showToast('💌 Mensaje enviado con éxito. Te responderemos en breve.');
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
