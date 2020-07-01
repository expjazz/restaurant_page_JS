import * as functions from './functions';
import showContact from './contactPage';
import showMenu from './contactMenu';
import renderPageOne from './pageOne';

const eventListeners = async (elements) => {
  const {
    dropdownTrigger, menuBtn, contactBtn, homeBtn, formBtn,
  } = elements;

  dropdownTrigger.forEach((trigger) => {
    trigger.addEventListener('mouseenter', functions.handleEnter);
  });


  dropdownTrigger.forEach((trigger) => {
    trigger.addEventListener('mouseleave', functions.handleLeave);
  });

  contactBtn.addEventListener('click', showContact.showContact);
  menuBtn.addEventListener('click', showMenu.showMenu);
  homeBtn.addEventListener('click', renderPageOne.renderPageOne);
  formBtn.addEventListener('click', functions.showForm);
};

export default { eventListeners };
