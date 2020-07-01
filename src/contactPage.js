
import eventListeners from './event_listeners';
import grabElements from './elements';
import { navbar } from './navbar';


const showContact = (e) => {
  e.preventDefault();
  const content = document.querySelector('.content');
  content.innerHTML = `      <div class="container-fluid h-100 pt-5 w-100 bg-light">
  <div class="container mt-3 shadow-lg content">
  ${navbar}

    <div class="row">
      <div class="col-9 mx-auto">
        <div class="contact mx-auto text-center">
          <button class="btn btn-primary mx-auto" id="formBtn"> Click here to send us a message with us </button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-9 text-center mx-auto"> 
        <form id="contactForm" class="mt-5">
      <div class="form-group">
        <label for="email">Your email</label>
        <input type="email" class="form-control" id="email" placeholder="example@example.com">
      </div>
      <div class="form-group">
      <label for="exampleFormControlTextarea1">Your message</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
      </form>
      </div>
  </div>
</div>`;
  eventListeners.eventListeners(grabElements.grabElements());
};

export default { showContact };