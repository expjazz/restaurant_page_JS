import elements from './elements';


const handleEnter = (e) => {
  const { dropdownBackground, navbar } = elements.grabElements();
  e.target.classList.add('trigger-enter');
  setTimeout(() => e.target.classList.add('trigger-enter-active'), 150);

  dropdownBackground.classList.add('open');
  const dropdown = e.target.querySelector('.dropdown-effect');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = navbar.getBoundingClientRect();
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - document.getElementById('restaurant').getBoundingClientRect().left,

  };

  dropdownBackground.style.setProperty('width', `${coords.width}px`);
  dropdownBackground.style.setProperty('height', `${coords.height}px`);
  dropdownBackground.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
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

const showForm = (e) => {
  e.preventDefault();
  console.log('a');
  const { form } = elements.grabElements();
  console.log(form);
  if (!form.classList.contains('active-op')) {
    form.classList.add('active');
    setTimeout(() => form.classList.add('active-op'), 150);
  }
};

const showFormOpposite = (e) => {
  e.preventDefault();
  console.log('b');
  const { form } = elements.grabElements();
  if (form.classList.contains('active-op')) {
    form.classList.remove('active-op');
    setTimeout(() => form.classList.remove('active'), 150);
  }
};

const darkMode = (e) => {
  e.preventDefault();
  const content = document.querySelector('.container-fluid');
  content.classList.toggle('contentDark');
  content.classList.toggle('h-100');
  content.classList.toggle('h-1000');
  document.querySelector('.container').classList.toggle('bg-dark');
  document.querySelectorAll('.card').forEach((card) => card.classList.toggle('bg-secondary'));
};

export {
  handleEnter, handleLeave, showForm, showFormOpposite, darkMode,
};
