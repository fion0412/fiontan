(() => {
  const nav = document.querySelector('.header nav');
  if (!nav) return;

  const links = [...nav.querySelectorAll('a')];
  const find = (href) => links.find((link) => link.getAttribute('href') === href);
  const make = (href, label) => {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;
    return link;
  };

  const home = find('index.html') || find('#top') || make('index.html', '首頁');
  const digital = find('seed-ai.html') || make('seed-ai.html', '數字員工');
  const courses = find('courses.html') || make('courses.html', '我的課程');

  home.textContent = '首頁';
  digital.textContent = '數字員工';
  courses.textContent = '我的課程';

  // Keep every page on the same primary navigation order.
  // Prepend in reverse so the visible order is 首頁 → 數字員工 → 我的課程.
  nav.prepend(courses);
  nav.prepend(digital);
  nav.prepend(home);

  const menu = document.querySelector('.header .menu');
  if (menu && !menu.dataset.navBound) {
    menu.dataset.navBound = 'true';
    menu.setAttribute('aria-label', '開啟選單');
    menu.setAttribute('aria-expanded', 'false');
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('site-nav-open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a') && nav.classList.contains('site-nav-open')) {
        nav.classList.remove('site-nav-open');
        menu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (!document.getElementById('site-nav-style')) {
    const style = document.createElement('style');
    style.id = 'site-nav-style';
    style.textContent = `
      @media (max-width: 760px) {
        .header nav.site-nav { display: none; }
        .header nav.site-nav.site-nav-open {
          display: flex;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 50;
          flex-direction: column;
          gap: 0;
          padding: 12px 20px;
          background: #071a34;
          border-top: 1px solid rgba(201, 164, 81, .35);
        }
        .header nav.site-nav.site-nav-open a { padding: 13px 8px; }
      }
    `;
    document.head.appendChild(style);
  }
  nav.classList.add('site-nav');
})();
