const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

// Keep previously shared home-section URLs working after the page split.
if (!window.location.pathname.includes('/pages/')) {
  const movedSections = {
    brand: 'company', business: 'company',
    services: 'service', 'ai-consulting': 'service', education: 'service',
    book: 'service', 'it-kit': 'service', expertise: 'service',
    workflow: 'insight', performance: 'insight', direction: 'insight',
  };
  const section = window.location.hash.slice(1);
  if (movedSections[section]) {
    window.location.replace(`pages/${movedSections[section]}.html#${section}`);
  }
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.hidden = isOpen;
    menuButton.querySelector('.sr-only').textContent = isOpen ? '메뉴 열기' : '메뉴 닫기';
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
      menuButton.querySelector('.sr-only').textContent = '메뉴 열기';
    }
  });
}
