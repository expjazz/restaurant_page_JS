/* eslint-disable import/no-cycle */
import eventListeners from './event_listeners';
import grabElements from './elements';
import { navbar } from './navbar';
import footer from './footer';
import darkStatus from './index';

const menuApi = require('./menuApi');


const renderPageOneFirst = async () => {
  let count = 0;
  const data = await menuApi.foodAwait();
  const data2 = await menuApi.foodAwait();
  const data3 = await menuApi.foodAwait();

  const data4 = await menuApi.foodAwait();
  const data5 = await menuApi.foodAwait();

  const mealList = [data, data2, data3, data4, data5];
  const content = document.querySelector('.content');

  const middleContent = document.createElement('div');
  middleContent.classList = `container-fluid 
  pt-5 w-100 ${darkStatus.darkModeObj.status ? 'contentDark h-1000' : 'bg-light'}`;
  middleContent.id = 'containerFluid';
  middleContent.innerHTML = `
  <div class="container ${darkStatus.darkModeObj.status ? 'bg-dark' : ''}  mt-3 shadow-lg content" id="container">
    ${navbar}
    <div class='contentWrapper'>

    <div class="row">
      ${mealList.map((recipes) => {
    if (count === 0) {
      count += 1;
      return `  <div class="col-7 p-5">
          <div class="card ${darkStatus.darkModeObj.status ? 'bg-secondary' : ''}  border-rounded p-5">
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
              <a href="#!" class="btn btn-primary">See more</a>
            </div>
          </div>
        </div>
        <div class="col-5 p-5">
        <div class="row">`;
    } return `<div class="col-6">
      <div class="card  ${darkStatus.darkModeObj.status ? 'bg-secondary' : ''}  border-rounded p-2 h-100">
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
          <a href="#!" class="btn btn-primary">See more</a>
        </div>
      </div>
    </div>`;
  }).join('')}
  </div>
  </div>
  </div>
  
  
  </div>
  ${footer.footer}  
  </div>

  `;
  content.appendChild(middleContent);

  eventListeners.eventListeners(grabElements.grabElements());
};

export default { renderPageOneFirst };