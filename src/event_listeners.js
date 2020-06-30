import * as elements from './elements';
import * as functions from './functions';

const eventListeners = () => {
  console.log('b');
  elements.dropdownTrigger.forEach((trigger) => {
    trigger.addEventListener('mouseenter', functions.handleEnter);
  });

  elements.dropdownTrigger.forEach((trigger) => {
    trigger.addEventListener('mouseleave', functions.handleLeave);
  });
};

export default { eventListeners };
