
/* eslint-disable import/no-cycle */
import * as functions from './functions';
import grabElements from './elements';

const showContact = (e) => {
  e.preventDefault();
  const { content } = grabElements.grabElements();
  content.removeChild(content.children[1]);
  const mainContent = document.createElement('div');
  mainContent.classList = 'contentWrapper';
  mainContent.innerHTML = `

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
`;

  content.insertBefore(mainContent, content.querySelector('.row'));
  const formBtn = document.getElementById('formBtn');
  formBtn.addEventListener('click', functions.showForm);
  formBtn.addEventListener('click', functions.showFormOpposite);
};

export default { showContact };