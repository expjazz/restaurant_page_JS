/* eslint-disable import/prefer-default-export */

async function foodAwait() {
  const jsonData = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php',
  );
  const data = await jsonData.json();
  return data;
}

export { foodAwait };
