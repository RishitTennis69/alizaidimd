document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initActiveNav();
  initSmoothAnchors();
  initHashScroll();
  initFaqAccordion();
  initForms();
  initScrollButtons();
  initMembershipCarousel();
  initAnalytics();
});

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const body = document.body;

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    body.classList.toggle('nav-open', isOpen);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('nav-open');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('nav-open');
    }
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');

  const homeSections = ['hero'];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            const href = link.getAttribute('href')?.slice(1);
            const isHome = homeSections.includes(id) && (href === 'hero' || href === '');
            link.classList.toggle('active', isHome || href === id);
          });
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: '-118px 0px -45% 0px'
    }
  );

  sections.forEach(section => observer.observe(section));
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', hash);
    });
  });

  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || !href.includes('.html#')) return;

    link.addEventListener('click', () => {
      sessionStorage.setItem('smoothScrollHash', href.split('#')[1] || '');
    });
  });
}

function initHashScroll() {
  const hash = window.location.hash || (
    sessionStorage.getItem('smoothScrollHash')
      ? `#${sessionStorage.getItem('smoothScrollHash')}`
      : ''
  );

  if (sessionStorage.getItem('smoothScrollHash')) {
    sessionStorage.removeItem('smoothScrollHash');
  }

  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  window.requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (!window.location.hash) {
      history.replaceState(null, '', hash);
    }
  });
}

function initFaqAccordion() {
  const accordion = document.getElementById('faq-list');
  if (!accordion) return;

  accordion.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      accordion.querySelectorAll('.faq-item').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}

function initScrollButtons() {
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.scrollTo);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function initMembershipCarousel() {
  const carousel = document.getElementById('membership-carousel');
  const dotsContainer = document.querySelector('.membership-dots');
  if (!carousel || !dotsContainer) return;

  const items = [...carousel.querySelectorAll('.membership-item')];
  if (!items.length) return;

  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'membership-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to membership item ${i + 1}`);
    dot.addEventListener('click', () => {
      items[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    });
    dotsContainer.appendChild(dot);
  });

  carousel.addEventListener('scroll', () => {
    if (window.innerWidth > 768) return;
    const index = Math.round(carousel.scrollLeft / (items[0].offsetWidth + 12));
    dotsContainer.querySelectorAll('.membership-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }, { passive: true });
}

function initForms() {
  setupForm('guide-form', validateGuideForm, 'Longevity Biomarker Guide');
  setupForm('consult-form-el', validateConsultForm, 'Consult Request');
}

function setupForm(formId, validateFn, subject) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const messageEl = form.querySelector('.form-message');
    clearErrors(form);

    const errors = validateFn(form);
    if (errors.length > 0) {
      showFormMessage(messageEl, errors[0].message, 'error');
      errors.forEach(({ field }) => markFieldError(field));
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    showFormMessage(messageEl, 'Sending…', 'success');

    try {
      const email = window.SITE_CONFIG?.formSubmitEmail || 'contact@alizaidimd.com';
      const formData = new FormData(form);
      formData.append('_subject', subject);

      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });

      if (!response.ok) throw new Error('Submission failed');

      showFormMessage(
        messageEl,
        formId === 'guide-form'
          ? 'Thank you! Check your inbox for the Longevity Biomarker Guide.'
          : 'Thank you! We\u2019ll be in touch shortly to schedule your consult.',
        'success'
      );
      form.reset();
    } catch {
      showFormMessage(messageEl, 'Something went wrong. Please try again or email us directly.', 'error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}

function validateGuideForm(form) {
  const errors = [];
  const name = form.querySelector('#guide-name');
  const email = form.querySelector('#guide-email');

  if (!name.value.trim()) errors.push({ field: name, message: 'Name is required.' });
  if (!email.value.trim()) {
    errors.push({ field: email, message: 'Email is required.' });
  } else if (!isValidEmail(email.value)) {
    errors.push({ field: email, message: 'Please enter a valid email address.' });
  }
  return errors;
}

function validateConsultForm(form) {
  const errors = [];
  const required = [
    { sel: '#first-name', msg: 'First name is required.' },
    { sel: '#last-name', msg: 'Last name is required.' },
    { sel: '#consult-email', msg: 'Email is required.' },
    { sel: '#phone', msg: 'Phone is required.' },
    { sel: '#city', msg: 'City is required.' },
    { sel: '#comments', msg: 'Tell me more about your interest is required.' }
  ];

  required.forEach(({ sel, msg }) => {
    const field = form.querySelector(sel);
    if (!field.value.trim()) errors.push({ field, message: msg });
  });

  const email = form.querySelector('#consult-email');
  if (email.value.trim() && !isValidEmail(email.value)) {
    errors.push({ field: email, message: 'Please enter a valid email address.' });
  }
  return errors;
}

function initAnalytics() {
  const id = window.SITE_CONFIG?.analyticsId;
  if (!id) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function markFieldError(field) {
  field.classList.add('error');
  field.setAttribute('aria-invalid', 'true');
}

function clearErrors(form) {
  form.querySelectorAll('.error').forEach(el => {
    el.classList.remove('error');
    el.removeAttribute('aria-invalid');
  });
  const messageEl = form.querySelector('.form-message');
  if (messageEl) {
    messageEl.textContent = '';
    messageEl.className = 'form-message';
  }
}

function showFormMessage(el, text, type) {
  if (!el) return;
  el.textContent = text;
  el.className = `form-message ${type}`;
}
