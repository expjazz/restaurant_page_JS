// import * as elements from './elements';
import eventListeners from './event_listeners';
import grabElements from './elements';
import { navbar } from './navbar';

const menuApi = require('./menuApi');


const renderPageOne = async () => {
  let count = 0;
  const data = await menuApi.foodAwait();
  const data2 = await menuApi.foodAwait();
  const data3 = await menuApi.foodAwait();

  const data4 = await menuApi.foodAwait();
  const data5 = await menuApi.foodAwait();

  const mealList = [data, data2, data3, data4, data5];
  const content = document.querySelector('.content');
  content.innerHTML = `   <div class="container-fluid h-100 pt-5 w-100 bg-light">
  <div class="container mt-3 shadow-lg content">
    ${navbar}
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
    `;
  eventListeners.eventListeners(grabElements.grabElements());
};

export default { renderPageOne };