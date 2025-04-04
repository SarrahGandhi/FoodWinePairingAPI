async function getRecipesByCuisine(cuisine) {
  try {
    console.log(`Fetching recipes for cuisine: ${cuisine}`); // Debugging
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`
    );
    const data = await response.json();
    console.log("API Response:", data); // Debugging
    return data.meals || []; // Return an empty array if no recipes found
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

async function getCuisines() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const data = await response.json();
    return data.meals || []; // Return an empty array if no cuisines found
  } catch (error) {
    console.error("Error fetching cuisines:", error);
    return [];
  }
}
async function getWinePairing(cuisine) {
  try {
    console.log(`Fetching wine pairing for cuisine: ${cuisine}`); // Debugging
    const response = await fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${cuisine}&apiKey=${process.env.APIKEY}`
    );
    const data = await response.json();
    console.log("API Response:", data); // Debugging
    return data; // Return the wine pairing data
  } catch (error) {
    console.error("Error fetching wine pairing:", error);
    return [];
  }
}

module.exports = { getRecipesByCuisine, getCuisines, getWinePairing };
