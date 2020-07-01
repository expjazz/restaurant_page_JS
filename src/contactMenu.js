/* eslint-disable import/no-cycle */


import eventListeners from './event_listeners';
import grabElements from './elements';
import { navbar } from './navbar';
import footer from './footer';
import darkStatus from './index';


const menuApi = require('./menuApi');

const showMenu = async (e) => {
  e.preventDefault();
  const data = await menuApi.foodAwait();
  const data2 = await menuApi.foodAwait();
  const data3 = await menuApi.foodAwait();

  const data4 = await menuApi.foodAwait();
  const mealList = [data, data2, data3, data4];
  const content = document.querySelector('.content');
  content.innerHTML = `         <div class="container-fluid 
  
  pt-5 w-100 ${darkStatus.darkModeObj.status ? 'contentDark h-1000' : 'bg-light h-100'}">
  <div class="container ${darkStatus.darkModeObj.status ? 'bg-dark' : ''}  mt-3 shadow-lg content">
  ${navbar}

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

        <div class="card ${darkStatus.darkModeObj.status ? 'bg-secondary' : ''} h-75 align-items-center border-rounded p-3">
        <img class="card-img-top w-50 h-50" src="${recipes.meals[0].strMealThumb}" alt="Card image">
        <div class="card-body">
          <h4 class="card-title">${recipes.meals[0].strMeal}</h4>
          <p class="card-text">
            ${recipes.meals[0].strCategory}
          </p>
          <a href="#" class="btn btn-primary-outline">See more</a>
        </div>
      </div>
      </div>
      `,
    )
    .join('')} 

    </div>
    ${footer.footer}  

  </div>
</div>`;
  eventListeners.eventListeners(grabElements.grabElements());
};

export default { showMenu };
