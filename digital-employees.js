document.querySelector('.de-testimonial')?.remove();
document.title = '數字員工｜Smartech AI';
document.querySelector('.de-page .header nav a[href="seed-ai.html"]')?.replaceChildren(document.createTextNode('數字員工'));

const deHeader = document.querySelector('.de-page .header');
const deNav = deHeader?.querySelector('nav');
if (deHeader && deNav && !deHeader.querySelector('.menu')) {
  const deMenu = document.createElement('button');
  deMenu.className = 'menu';
  deMenu.type = 'button';
  deMenu.textContent = '☰';
  deMenu.setAttribute('aria-label', '開啟選單');
  deMenu.setAttribute('aria-expanded', 'false');
  deHeader.appendChild(deMenu);
  const deMenuStyle = document.createElement('style');
  deMenuStyle.textContent = '@media(max-width:760px){.de-page .header{position:relative}.de-page .header nav{display:none;position:absolute;top:70px;left:0;right:0;z-index:10;flex-direction:column;gap:0;background:rgba(7,23,45,.98);border-bottom:1px solid var(--gold)}.de-page .header nav.is-open{display:flex}.de-page .header nav a{padding:18px 24px;border-top:1px solid rgba(199,164,91,.18)}.de-page .header .menu{display:block;border:0;background:none;color:var(--gold);font-size:22px;padding:4px 0;cursor:pointer}}@media(min-width:761px){.de-page .header .menu{display:none}}';
  document.head.appendChild(deMenuStyle);
  deMenu.addEventListener('click', () => {
    const open = deNav.classList.toggle('is-open');
    deMenu.setAttribute('aria-expanded', String(open));
  });
  deNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    deNav.classList.remove('is-open');
    deMenu.setAttribute('aria-expanded', 'false');
  }));
}

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) return;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('de-reveal');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.de-section h2, .de-card, .de-benefits article, .de-partnership').forEach(el => observer.observe(el));
  }
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('.de-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      if (reduced.matches) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--rx', `${-(event.clientY - rect.top - rect.height / 2) / rect.height * 8}deg`);
      card.style.setProperty('--ry', `${(event.clientX - rect.left - rect.width / 2) / rect.width * 8}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
})();
