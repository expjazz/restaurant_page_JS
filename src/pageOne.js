// import * as elements from './elements';
import eventListeners from './event_listeners';
import grabElements from './elements';

const menuApi = require('./menuApi');


const renderPageOne = async () => {
  let count = 0;
  const data = await menuApi.foodAwait();
  const data2 = await menuApi.foodAwait();
  const data3 = await menuApi.foodAwait();
  console.log(data);

  const data4 = await menuApi.foodAwait();
  const mealList = [data, data2, data3, data4];
  const content = document.querySelector('.content');
  content.innerHTML = `   <div class="container-fluid h-100 pt-5 w-100 bg-light">
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
          <a href="#" class="nav-link text-black-50 font-weight-bold" id="home-btn"
            >Home</a
          >
          <div class="dropdown-effect">
            <div class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              iusto?
            </div>
          </div>
        </li>
        <li class="nav-item w-50">
          <a href="#" class="nav-link text-black-50 font-weight-bold" id="contact-btn"
            >Contact</a
          >
          <div class="dropdown-effect">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            iusto?
          </div>
        </li>
        <li class="nav-item w-50">
          <a href="#" class="nav-link text-black-50 font-weight-bold" id="menu-btn"
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
      ${mealList.map((recipes) => {
    if (count === 0) {
      count += 1;
      return `  <div class="col-7 p-5">
          <div class="card border-rounded p-5">
            <img
              class="card-img-top"
              src="${recipes.meals[0].strMealThumb}"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">${recipes.meals[0].strMeal}</h4>
              <p class="card-text">
              ${recipes.meals[0].strCategory}
              </p>
              <a href="#!" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-5 p-5">
        <div class="row">`;
    } return `<div class="col-6">
      <div class="card border-rounded p-2 h-100">
        <img
          class="card-img-top"
          src="${recipes.meals[0].strMealThumb}"
          alt="Card image cap"
        />
        <div class="card-body">
        <h4 class="card-title h6">${recipes.meals[0].strMeal}</h4>
        <p class="card-text">
        ${recipes.meals[0].strCategory}

          </p>
          <a href="#!" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>`;
  }).join('')}
  </div>
  </div>
      <div class="col-7 p-5">
        <div class="card border-rounded p-5">
          <img
            class="card-img-top"
            src="https://images.pexels.com/photos/3821692/pexels-photo-3821692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title">Some Food</h4>
            <p class="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, ratione.
            </p>
            <a href="#!" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-5 p-5">
        <div class="row">
          <div class="col-6">
            <div class="card border-rounded bg-light">
              <img
                class="card-img-top"
                src="https://images.pexels.com/photos/3821692/pexels-photo-3821692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">Some Food</h4>
                <p class="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente, ratione.
                </p>
                <a href="#!" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card border-rounded bg-light">
              <img
                class="card-img-top"
                src="https://images.pexels.com/photos/3821692/pexels-photo-3821692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">Some Food</h4>
                <p class="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente, ratione.
                </p>
                <a href="#!" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  eventListeners.eventListeners(grabElements.grabElements());
};

export default { renderPageOne };