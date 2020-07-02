function grabElements() {
  return {
    dropdownTrigger: document.querySelectorAll('.navbar li'),
    dropdownBackground: document.querySelector('.dropdownBackground'),
    navbar: document.querySelector('.navbar'),
    homeBtn: document.getElementById('home-btn'),
    contactBtn: document.getElementById('contact-btn'),
    menuBtn: document.getElementById('menu-btn'),
    form: document.getElementById('contactForm'),
    formBtn: document.getElementById('formBtn'),
    darkModeBtn: document.getElementById('darkModeBtn'),

  };
}
export default { grabElements };
