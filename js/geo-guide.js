(function () {
  const STORAGE_KEY = 'geoGuideTour';

  const GEO_SPOTS = [
    {
      id: 'head-meta',
      page: 'index.html',
      label: 'JSON-LD & Head Metadata',
      category: 'Schema',
      selector: '#geo-spot-head-meta',
      desc: 'Physician JSON-LD, FAQPage JSON-LD, Open Graph, Twitter cards, and meta description — all in the page <head>.'
    },
    {
      id: 'homepage-blog',
      page: 'index.html',
      label: 'Blog Preview',
      category: 'Content',
      selector: '#blog',
      desc: 'Homepage blog grid — each card opens a local article preview on this site.'
    },
    {
      id: 'blog-alt-text',
      page: 'index.html',
      label: 'Blog Image Alt Text',
      category: 'On-Page',
      selector: '#blog-grid-preview .blog-card:first-child',
      desc: 'Descriptive alt text on blog card images for accessibility and image search.'
    },
    {
      id: 'faq-accordion',
      page: 'index.html',
      label: 'FAQ Accordion',
      category: 'Content',
      selector: '#faq-list',
      desc: 'Expandable FAQ cards paired with FAQPage schema in the head.'
    },
    {
      id: 'biomarker-guide',
      page: 'index.html',
      label: 'Lead Magnet Section',
      category: 'Content',
      selector: '#biomarker-guide',
      desc: 'Biomarker guide signup — keyword-rich on-page content with a clear CTA.'
    },
    {
      id: 'footer-links',
      page: 'index.html',
      label: 'Internal Footer Links',
      category: 'On-Page',
      selector: '#site-footer .footer-links-col',
      desc: 'Footer anchor links to key sections for crawler discovery.'
    },
    {
      id: 'semantic-main',
      page: 'index.html',
      label: 'Semantic Main Landmark',
      category: 'On-Page',
      selector: '#main-content',
      desc: 'The <main> element gives crawlers a clear content boundary.'
    },
    {
      id: 'blog-index',
      page: 'blog.html',
      label: 'Blog Index',
      category: 'Content',
      selector: '#blog-grid-all',
      desc: 'Full blog listing with local article previews for every post.'
    },
    {
      id: 'blog-alt-blog',
      page: 'blog.html',
      label: 'Blog Alt Text',
      category: 'On-Page',
      selector: '#blog-grid-all .blog-card:first-child',
      desc: 'Descriptive alt text on each blog card image.'
    },
    {
      id: 'article-preview',
      page: 'post.html',
      label: 'Article Preview + Schema',
      category: 'Schema',
      selector: '#post-content',
      desc: 'Local article page with excerpt and Article JSON-LD injected on load.'
    },
    {
      id: 'robots-txt',
      label: 'robots.txt',
      category: 'Crawler',
      previewUrl: 'robots.txt',
      desc: 'Tells search bots and AI crawlers (GPTBot, ClaudeBot, etc.) they are allowed to index the site.'
    },
    {
      id: 'sitemap-xml',
      label: 'sitemap.xml',
      category: 'Crawler',
      previewUrl: 'sitemap.xml',
      desc: 'XML URL map listing pages for crawlers.'
    },
    {
      id: 'llms-txt',
      label: 'llms.txt',
      category: 'Crawler',
      previewUrl: 'llms.txt',
      desc: 'Plain-text site summary for LLM crawlers — shown below when you visit this stop.'
    }
  ];

  let currentIndex = 0;
  let panelOpen = false;
  let highlightEl = null;
  let highlightRing = null;
  let highlightListenersBound = false;

  function ensureHighlightRing() {
    if (!highlightRing) {
      highlightRing = document.createElement('div');
      highlightRing.className = 'geo-guide-ring';
      highlightRing.setAttribute('aria-hidden', 'true');
      highlightRing.hidden = true;
      document.body.appendChild(highlightRing);
    }
    return highlightRing;
  }

  function positionHighlightRing(el) {
    const ring = ensureHighlightRing();
    const pad = 10;

    const update = () => {
      if (!highlightEl || highlightEl !== el) return;
      const rect = el.getBoundingClientRect();
      ring.style.top = `${Math.max(rect.top - pad, 0)}px`;
      ring.style.left = `${Math.max(rect.left - pad, 0)}px`;
      ring.style.width = `${rect.width + pad * 2}px`;
      ring.style.height = `${rect.height + pad * 2}px`;
    };

    update();
    ring.hidden = false;

    if (!highlightListenersBound) {
      highlightListenersBound = true;
      window.addEventListener('scroll', positionActiveHighlight, { passive: true });
      window.addEventListener('resize', positionActiveHighlight, { passive: true });
    }
  }

  function positionActiveHighlight() {
    if (highlightEl) positionHighlightRing(highlightEl);
  }

  function smoothScrollTo(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    [120, 350, 700, 1100, 1600].forEach((ms) => setTimeout(positionActiveHighlight, ms));
  }

  function currentPageFile() {
    let path = window.location.pathname.split('/').pop() || '';
    if (!path) return 'index.html';
    if (!path.includes('.')) return `${path}.html`;
    return path;
  }

  function spotUrl(spot) {
    if (spot.previewUrl) return null;
    if (spot.page === 'post.html') {
      return `post.html?p=why-i-care-more-about-when-you-wake-up-than-when-you-go-to-bed&geo=${spot.id}`;
    }
    return `${spot.page}?geo=${spot.id}`;
  }

  function isOnPage(spot) {
    if (spot.previewUrl) return true;
    const page = currentPageFile();
    return page === spot.page || (spot.page === 'index.html' && (page === '' || page === 'index.html'));
  }

  function findSpotIndex(id) {
    const i = GEO_SPOTS.findIndex(s => s.id === id);
    return i >= 0 ? i : 0;
  }

  function saveTourState() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ open: panelOpen, index: currentIndex }));
  }

  function clearTourState() {
    sessionStorage.removeItem(STORAGE_KEY);
  }

  function loadTourState() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.open) panelOpen = true;
      if (typeof data.index === 'number' && data.index >= 0 && data.index < GEO_SPOTS.length) {
        currentIndex = data.index;
      }
    } catch {
      clearTourState();
    }
  }

  function hideFilePreviewBox() {
    const box = document.getElementById('geo-file-preview');
    if (box) box.hidden = true;
  }

  function clearHighlight() {
    document.querySelectorAll('.geo-spot-chip.geo-guide-highlight').forEach((el) => {
      el.classList.remove('geo-guide-highlight');
      el.setAttribute('aria-hidden', 'true');
    });
    hideFilePreviewBox();
    if (highlightEl) {
      highlightEl.classList.remove('geo-guide-highlight');
      highlightEl = null;
    }
    if (highlightRing) {
      highlightRing.hidden = true;
    }
  }

  function applyHighlight(el) {
    highlightEl = el;
    el.classList.add('geo-guide-highlight');
    if (el.classList.contains('geo-spot-chip')) {
      el.setAttribute('aria-hidden', 'false');
    }
    positionHighlightRing(el);
    smoothScrollTo(el);
  }

  function ensureFilePreviewBox() {
    let box = document.getElementById('geo-file-preview');
    if (!box) {
      box = document.createElement('div');
      box.id = 'geo-file-preview';
      box.className = 'geo-file-preview';
      box.hidden = true;
      box.innerHTML = `
        <p class="geo-file-preview-label"></p>
        <pre class="geo-file-preview-content"></pre>
      `;
      document.body.appendChild(box);
    }
    return box;
  }

  async function showFilePreview(spot) {
    clearHighlight();
    const box = ensureFilePreviewBox();
    const label = box.querySelector('.geo-file-preview-label');
    const pre = box.querySelector('.geo-file-preview-content');
    label.textContent = spot.previewUrl;
    pre.textContent = 'Loading…';
    box.hidden = false;

    try {
      const res = await fetch(spot.previewUrl);
      pre.textContent = await res.text();
    } catch {
      pre.textContent = 'Could not load file.';
    }

    applyHighlight(box);
    loadPanelFileSnippet(spot);
  }

  async function loadPanelFileSnippet(spot) {
    const snippet = document.getElementById('geo-guide-file-snippet');
    if (!snippet || !spot.previewUrl) {
      if (snippet) snippet.hidden = true;
      return;
    }

    snippet.hidden = false;
    snippet.textContent = 'Loading…';

    try {
      const res = await fetch(spot.previewUrl);
      snippet.textContent = await res.text();
    } catch {
      snippet.textContent = 'Could not load file.';
    }
  }

  function hidePanelFileSnippet() {
    const snippet = document.getElementById('geo-guide-file-snippet');
    if (snippet) {
      snippet.hidden = true;
      snippet.textContent = '';
    }
  }

  function scrollToSpot(spot, attempt = 0) {
    clearHighlight();
    if (!spot.selector) return;
    const el = document.querySelector(spot.selector);
    if (!el) {
      if (attempt < 12) {
        setTimeout(() => scrollToSpot(spot, attempt + 1), 150);
      }
      return;
    }
    applyHighlight(el);
    hidePanelFileSnippet();
  }

  function openPanel() {
    const panel = document.getElementById('geo-guide-panel');
    const toggle = document.getElementById('geo-guide-toggle');
    if (!panel || !toggle) return;
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    panelOpen = true;
  }

  function closePanel() {
    const panel = document.getElementById('geo-guide-panel');
    const toggle = document.getElementById('geo-guide-toggle');
    if (!panel || !toggle) return;
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    panelOpen = false;
    clearHighlight();
    hidePanelFileSnippet();
    clearTourState();
  }

  function goToSpot(index) {
    currentIndex = ((index % GEO_SPOTS.length) + GEO_SPOTS.length) % GEO_SPOTS.length;
    const spot = GEO_SPOTS[currentIndex];
    panelOpen = true;
    saveTourState();

    if (spot.previewUrl) {
      openPanel();
      updatePanel();
      showFilePreview(spot);
      const url = new URL(window.location.href);
      url.searchParams.set('geo', spot.id);
      window.history.replaceState({}, '', url);
      return;
    }

    if (!isOnPage(spot)) {
      window.location.href = spotUrl(spot);
      return;
    }

    openPanel();
    updatePanel();
    scrollToSpot(spot);

    const url = new URL(window.location.href);
    url.searchParams.set('geo', spot.id);
    window.history.replaceState({}, '', url);
  }

  function buildWidget() {
    const wrap = document.createElement('div');
    wrap.id = 'geo-guide';
    wrap.className = 'geo-guide';
    wrap.innerHTML = `
      <div class="geo-guide-panel" id="geo-guide-panel" hidden>
        <div class="geo-guide-panel-header">
          <span class="geo-guide-badge" id="geo-guide-badge">Schema</span>
          <button type="button" class="geo-guide-close" id="geo-guide-close" aria-label="Close GEO guide">&times;</button>
        </div>
        <p class="geo-guide-counter" id="geo-guide-counter">1 / ${GEO_SPOTS.length}</p>
        <h3 class="geo-guide-title" id="geo-guide-title"></h3>
        <p class="geo-guide-desc" id="geo-guide-desc"></p>
        <pre class="geo-guide-file-snippet" id="geo-guide-file-snippet" hidden></pre>
        <div class="geo-guide-actions">
          <button type="button" class="geo-guide-btn geo-guide-prev" id="geo-guide-prev">&larr; Prev</button>
          <button type="button" class="geo-guide-btn geo-guide-next" id="geo-guide-next">Next &rarr;</button>
        </div>
        <details class="geo-guide-list-wrap" open>
          <summary>All GEO additions (${GEO_SPOTS.length})</summary>
          <ul class="geo-guide-list" id="geo-guide-list"></ul>
        </details>
      </div>
      <button type="button" class="geo-guide-toggle btn btn-pill" id="geo-guide-toggle" aria-expanded="false">GEO Guide</button>
    `;
    document.body.appendChild(wrap);

    const list = wrap.querySelector('#geo-guide-list');
    GEO_SPOTS.forEach((spot, i) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = spot.label;
      btn.className = 'geo-guide-list-item';
      btn.dataset.index = String(i);
      btn.addEventListener('click', () => goToSpot(i));
      li.appendChild(btn);
      list.appendChild(li);
    });

    wrap.querySelector('#geo-guide-toggle').addEventListener('click', togglePanel);
    wrap.querySelector('#geo-guide-close').addEventListener('click', closePanel);
    wrap.querySelector('#geo-guide-prev').addEventListener('click', () => goToSpot(currentIndex - 1));
    wrap.querySelector('#geo-guide-next').addEventListener('click', () => goToSpot(currentIndex + 1));

    document.addEventListener('keydown', (e) => {
      if (!panelOpen) return;
      if (e.key === 'ArrowLeft') goToSpot(currentIndex - 1);
      if (e.key === 'ArrowRight') goToSpot(currentIndex + 1);
      if (e.key === 'Escape') closePanel();
    });
  }

  function togglePanel() {
    if (panelOpen) {
      closePanel();
      return;
    }
    panelOpen = true;
    saveTourState();
    openPanel();
    updatePanel();
    const spot = GEO_SPOTS[currentIndex];
    if (spot.previewUrl) {
      showFilePreview(spot);
    } else if (isOnPage(spot)) {
      scrollToSpot(spot);
    }
  }

  function updatePanel() {
    const spot = GEO_SPOTS[currentIndex];
    document.getElementById('geo-guide-counter').textContent = `${currentIndex + 1} / ${GEO_SPOTS.length}`;
    document.getElementById('geo-guide-title').textContent = spot.label;
    document.getElementById('geo-guide-badge').textContent = spot.category;
    document.getElementById('geo-guide-desc').textContent = spot.desc;
    document.getElementById('geo-guide-toggle').textContent = `GEO Guide (${currentIndex + 1}/${GEO_SPOTS.length})`;

    if (!spot.previewUrl) {
      hidePanelFileSnippet();
    }

    document.querySelectorAll('.geo-guide-list-item').forEach((btn, i) => {
      btn.classList.toggle('active', i === currentIndex);
    });

    const activeBtn = document.querySelector('.geo-guide-list-item.active');
    activeBtn?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function initCurrentPageSpot() {
    const geoId = new URLSearchParams(window.location.search).get('geo');
    if (geoId) {
      currentIndex = findSpotIndex(geoId);
      return;
    }

    const page = currentPageFile();
    if (page === 'post.html') {
      const i = GEO_SPOTS.findIndex(s => s.id === 'article-preview');
      if (i >= 0) currentIndex = i;
      return;
    }

    if (page === 'blog.html') {
      const i = GEO_SPOTS.findIndex(s => s.id === 'blog-index');
      if (i >= 0) currentIndex = i;
      return;
    }

    currentIndex = 0;
  }

  function initTour() {
    loadTourState();
    const geoId = new URLSearchParams(window.location.search).get('geo');

    if (geoId) {
      currentIndex = findSpotIndex(geoId);
    } else if (!panelOpen) {
      initCurrentPageSpot();
    }

    if (panelOpen) {
      openPanel();
      updatePanel();
      const spot = GEO_SPOTS[currentIndex];
      setTimeout(() => {
        if (spot.previewUrl) {
          showFilePreview(spot);
        } else if (isOnPage(spot) && spot.selector) {
          scrollToSpot(spot);
        }
      }, 300);
    } else {
      const toggle = document.getElementById('geo-guide-toggle');
      if (toggle) {
        toggle.textContent = `GEO Guide (${currentIndex + 1}/${GEO_SPOTS.length})`;
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    buildWidget();
    initTour();
  });
})();
