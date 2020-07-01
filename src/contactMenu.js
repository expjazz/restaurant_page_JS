import eventListeners from './event_listeners';
import grabElements from './elements';

const regeneratorRuntime = require('regenerator-runtime');
const menuApi = require('./menuApi');

const showMenu = async (e) => {
  e.preventDefault();
  const data = await menuApi.foodAwait();
  const data2 = await menuApi.foodAwait();
  const data3 = await menuApi.foodAwait();
  console.log(data);

  const data4 = await menuApi.foodAwait();
  const mealList = [data, data2, data3, data4];
  const content = document.querySelector('.content');
  content.innerHTML = `      <div class="container-fluid h-100 pt-5 w-100 bg-light">
  <div class="container mt-3 shadow-lg content">
    <div class="navbar navbar-expand-lg">
      <div class="dropdownBackground">
        <span class="arrow"></span>
      </div>
      <a href="#" class="navbar-brand text-black-50 font-weight-bold" id="restaurant"
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
    <div class='row'> 
      <div  class='col-9 mx-auto'> 
        <h2 class="h2"> This are the foods we have in store for you </h2>
      </div>
    </div>
    <div class="row">
      ${mealList
    .map(
      (recipes) => `
          <div class="col-6">

        <div class="card h-75 align-items-center border-rounded p-3">
        <img class="card-img-top w-50 h-50" src="${recipes.meals[0].strMealThumb}" alt="Card image">
        <div class="card-body">
          <h4 class="card-title">${recipes.meals[0].strMeal}</h4>
          <p class="card-text">
            ${recipes.meals[0].strCategory}
          </p>
          <a href="#!" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
      `,
    )
    .join('')} 

    </div>
  </div>
</div>`;
  eventListeners.eventListeners(grabElements.grabElements());
};

export default { showMenu };
