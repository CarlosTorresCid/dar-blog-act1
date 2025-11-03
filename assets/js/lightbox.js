// Lightbox básico: clic en enlace/imagen con data-lightbox
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-lightbox]');
  if (!t) return;
  e.preventDefault();

  const src = t.getAttribute('data-lightbox') || t.getAttribute('href') || t.getAttribute('src');
  const caption = t.getAttribute('title') || t.getAttribute('alt') || '';
  const overlay = document.createElement('div');
  overlay.className = 'lb';
  overlay.innerHTML = `<figure><img src="${src}" alt=""><figcaption>${caption}</figcaption></figure>`;
  overlay.addEventListener('click', () => overlay.remove());
  document.body.appendChild(overlay);
});
