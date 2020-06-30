import eventListeners from './event_listeners';
import grabElements from './elements';

const regeneratorRuntime = require('regenerator-runtime');
const foodAwait = require('./menuApi');


const tempHelper = async (data) => {

};

const showMenu = async (e) => {
  e.preventDefault();
  const data = await foodAwait.foodAwait();
  console.log(data.recipes[0].image);

  const content = document.querySelector('.content');
  content.innerHTML = `      <div class="container-fluid h-100 pt-5 w-100 bg-light">
  <div class="container mt-3 shadow-lg content">
    <div class="navbar navbar-expand-lg">
      <div class="dropdownBackground">
        <span class="arrow"></span>
      </div>
      <a href="#" class="navbar-brand text-black-50 font-weight-bold"
        >My Restaurant</a
      >
      <ul class="navbar-nav">
        <li class="nav-item w-50">
          <a
            href="#"
            class="nav-link text-black-50 font-weight-bold"
            id="home-btn"
            >Home</a
          >
          <div class="dropdown-effect">
            <div class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui, iusto?
            </div>
          </div>
        </li>
        <li class="nav-item w-50">
          <a
            href="#"
            class="nav-link text-black-50 font-weight-bold"
            id="contact-btn"
            >Contact</a
          >
          <div class="dropdown-effect">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            iusto?
          </div>
        </li>
        <li class="nav-item w-50">
          <a
            href="#"
            class="nav-link text-black-50 font-weight-bold"
            id="menu-btn"
            >Menu</a
          >
          <div class="dropdown-effect">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            iusto?
          </div>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-12"> 
      <div class="card">
      <img class="card-img-top" src="${data.recipes[0].image}" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">${data.recipes[0].title}</h4>
        <p class="card-text">
          ${data.recipes[0].readyInMinutes}
        </p>
        <a href="#!" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>`;
  eventListeners.eventListeners(grabElements.grabElements());
};

export default { showMenu };