import elements from './elements';


const handleEnter = (e) => {
  const { dropdownBackground, navbar } = elements.grabElements();
  e.target.classList.add('trigger-enter');
  setTimeout(() => e.target.classList.add('trigger-enter-active'), 150);
  dropdownBackground.classList.add('open');
  const dropdownEffects = e.target.querySelector('.dropdown-effect');
  dropdownEffects.classList.add('trigger-enter');
  setTimeout(() => dropdownEffects.classList.add('trigger-enter-active'), 150);

  const navbarCoordinates = navbar.getBoundingClientRect();
  const dropdownCoordinates = e.target.querySelector('.dropdown-effect').getBoundingClientRect();
  const { width } = dropdownCoordinates;
  const { height } = dropdownCoordinates;
  const top = dropdownCoordinates.top - navbarCoordinates.top + 60;
  const left = dropdownCoordinates.left - navbarCoordinates.left - 25;
  dropdownBackground.style.width = `${width}px`;
  dropdownBackground.style.height = `${height}px`;
  dropdownBackground.style.transform = `translate(${left}px, ${top}px)`;
};

const handleLeave = (e) => {
  const { dropdownBackground } = elements.grabElements();

  e.target.classList.remove('trigger-enter');
  setTimeout(() => e.target.classList.remove('trigger-enter-active'), 150);
  dropdownBackground.classList.remove('open');
  const dropdownEffects = e.target.querySelector('.dropdown-effect');
  dropdownEffects.classList.remove('trigger-enter');
  setTimeout(() => dropdownEffects.classList.remove('trigger-enter-active'), 150);
};

export { handleEnter, handleLeave };
