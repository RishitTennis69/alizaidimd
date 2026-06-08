function blogPostUrl(post) {
  return post.canonical;
}

function renderBlogCard(post) {
  const meta = `Ali Zaidi | ${post.dateLabel} · ${post.readMin} min read`;
  return `
    <a href="${blogPostUrl(post)}" class="blog-card">
      <img src="${post.image}" alt="${post.alt}" loading="lazy">
      <div class="blog-overlay">
        <p class="blog-meta">${meta}</p>
        <h3>${post.title}</h3>
      </div>
    </a>`;
}

function renderBlogGrid(container, { limit } = {}) {
  const posts = window.BLOG_POSTS || [];
  const slice = typeof limit === 'number' ? posts.slice(0, limit) : posts;
  container.innerHTML = slice.map(renderBlogCard).join('');
}

function initHomeBlogPreview() {
  const grid = document.getElementById('blog-grid-preview');
  if (!grid) return;
  renderBlogGrid(grid, { limit: 10 });
}

function initBlogPage() {
  const grid = document.getElementById('blog-grid-all');
  if (!grid) return;
  renderBlogGrid(grid);
}

function initBlogPostPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('p');
  const post = slug && window.getBlogPost ? window.getBlogPost(slug) : null;
  const main = document.getElementById('post-content');

  if (!post) {
    const fallback = slug
      ? `https://www.alizaidimd.com/post/${encodeURIComponent(slug)}`
      : 'https://www.alizaidimd.com/blog';
    window.location.replace(fallback);
    return;
  }

  if (!main) return;

  document.title = `${post.title} | Dr. Ali Zaidi, MD`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', post.excerpt);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: { '@type': 'Person', name: 'Ali Zaidi' },
    image: post.image,
    description: post.excerpt,
    url: post.canonical
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);

  main.innerHTML = `
    <article class="post-article">
      <p class="post-meta">Ali Zaidi · ${post.dateLabel} · ${post.readMin} min read</p>
      <h1>${post.title}</h1>
      <figure class="post-hero-image">
        <img src="${post.image}" alt="${post.alt}" loading="eager">
      </figure>
      <div class="post-body">
        <p>${post.excerpt}</p>
        <p class="post-read-full"><a href="${post.canonical}" class="btn btn-pill" target="_blank" rel="noopener">Read full article on alizaidimd.com</a></p>
      </div>
    </article>
    <p class="post-back"><a href="blog.html">&larr; All posts</a></p>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initHomeBlogPreview();
  initBlogPage();
  initBlogPostPage();
});
