// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const list = document.getElementById('nav-list');
toggle?.addEventListener('click', () => {
  const open = list.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Scroll-top
const btnTop = document.getElementById('scrollTop');
const onScroll = () => btnTop?.classList.toggle('show', window.scrollY > 300);
window.addEventListener('scroll', onScroll);
btnTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
onScroll();
