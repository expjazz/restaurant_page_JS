const regeneratorRuntime = require('regenerator-runtime');

const foodAwait = async () => {
  const jsonData = await fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4&tags=dessert', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': '3e6cc47ca5msh44e4a824e0c9feap1f89d8jsnf8d84bdce844',
    },
  });
  const data = await jsonData.json();
  console.log(data);
  return data;
};

export default { foodAwait };