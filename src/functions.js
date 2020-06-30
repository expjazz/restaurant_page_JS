import * as elements from './elements';

const handleEnter = (e) => {
  e.target.classList.add('trigger-enter');
  setTimeout(() => e.target.classList.add('trigger-enter-active'), 150);
  elements.dropdownBackground.classList.add('open');
  const dropdownEffects = e.target.querySelector('.dropdown-effect');
  console.log(dropdownEffects);
  dropdownEffects.classList.add('trigger-enter');
  setTimeout(() => dropdownEffects.classList.add('trigger-enter-active'), 150);

  const navbarCoordinates = elements.navbar.getBoundingClientRect();
  const dropdownCoordinates = e.target.querySelector('.dropdown-effect').getBoundingClientRect();
  console.log(dropdownCoordinates);
  console.log(navbarCoordinates);
  const { width } = dropdownCoordinates;
  const { height } = dropdownCoordinates;
  const top = dropdownCoordinates.top - navbarCoordinates.top + 60;
  const left = dropdownCoordinates.left - navbarCoordinates.left - 25;
  elements.dropdownBackground.style.width = `${width}px`;
  elements.dropdownBackground.style.height = `${height}px`;
  elements.dropdownBackground.style.transform = `translate(${left}px, ${top}px)`;
};

const handleLeave = (e) => {
  e.target.classList.remove('trigger-enter');
  setTimeout(() => e.target.classList.remove('trigger-enter-active'), 150);
  elements.dropdownBackground.classList.remove('open');
  const dropdownEffects = e.target.querySelector('.dropdown-effect');
  console.log(dropdownEffects);
  dropdownEffects.classList.remove('trigger-enter');
  setTimeout(() => dropdownEffects.classList.remove('trigger-enter-active'), 150);
};
export { handleEnter, handleLeave };
