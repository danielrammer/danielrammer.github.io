module.exports = (function menu() {
  let navList;
  let togglebutton;

  const setMenuOpen = (isOpen) => {
    navList.classList.toggle('nav_open', isOpen);
    togglebutton.setAttribute('aria-expanded', isOpen);
    togglebutton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  };

  const handleMenuClick = () => {
    setMenuOpen(!navList.classList.contains('nav_open'));
  };

  const initMenu = () => {
    togglebutton = document.getElementById('menu_toggle_button');
    navList = document.getElementById('nav_list');
    if (!togglebutton || !navList) return;

    togglebutton.addEventListener('click', handleMenuClick);
    navList.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navList.classList.contains('nav_open')) {
        setMenuOpen(false);
        togglebutton.focus();
      }
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', () => setMenuOpen(false));
  };

  return {
    init: initMenu,
  };
}());
