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
