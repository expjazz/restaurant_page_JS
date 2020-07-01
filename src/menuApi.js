const regeneratorRuntime = require("regenerator-runtime");

async function foodAwait() {
  console.log("a");
  const jsonData = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await jsonData.json();
  return data;
}

export { foodAwait };
