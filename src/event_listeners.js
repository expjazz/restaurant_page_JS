import * as elements from "./elements";
import * as functions from "./functions";

const eventListeners = () => {
  elements.dropdownTrigger.forEach((trigger) => {
    trigger.addEventListener("mouseenter", functions.handleEnter);
  });
};

export { eventListeners };
