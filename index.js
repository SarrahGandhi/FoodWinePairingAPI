const express = require("express"); // Importing the express module to create the server
const path = require("path"); // Importing the path module to work with file and directory paths
const dotenv = require("dotenv"); // Importing dotenv to load environment variables from a .env file
dotenv.config(); // Loading environment variables from the .env file

// Importing the functions to fetch recipes, cuisines, and wine pairing data
const {
  getRecipesByCuisine,
  getCuisines,
  getWinePairing,
} = require("./components/recipe/api");

const app = express(); // Creating an instance of an Express application
const port = process.env.PORT || 2560; // Setting the port, using the value from the environment or defaulting to 2560

// Setting up the views directory and the Pug template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); // Setting Pug as the template engine for rendering views
app.use(express.static(path.join(__dirname, "public"))); // Serving static files from the "public" directory

// Route to render the home page with a list of available cuisines
app.get("/", async (req, res) => {
  const cuisines = await getCuisines(); // Fetching all available cuisines
  res.render("index", { cuisines, recipes: [], selectedCuisine: null }); // Rendering the index page with cuisines, no recipes selected initially
});

// Route to display recipes for a selected cuisine
app.get("/cuisine/:cuisine", async (req, res) => {
  const selectedCuisine = req.params.cuisine; // Getting the selected cuisine from the URL
  console.log(`Selected Cuisine: ${selectedCuisine}`); // Logging the selected cuisine for debugging purposes
  const recipes = await getRecipesByCuisine(selectedCuisine); // Fetching recipes for the selected cuisine
  const cuisines = await getCuisines(); // Fetching all available cuisines
  const wineData = await getWinePairing(selectedCuisine); // Fetching wine pairing data for the selected cuisine
  res.render("index", { cuisines, recipes, selectedCuisine, wineData }); // Rendering the index page with recipes, selected cuisine, and wine pairing data
});

// Route to display details of a specific recipe
app.get("/recipe/:idMeal", async (req, res) => {
  const mealId = req.params.idMeal; // Getting the meal ID from the URL
  try {
    // Fetching detailed recipe data from the external API
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json(); // Parsing the JSON response

    if (!data.meals) {
      return res.status(404).send("Recipe not found"); // If no recipe found, send a 404 error
    }

    const recipe = data.meals[0]; // Extracting the first recipe from the response

    // Extracting ingredients and their measurements
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`); // Adding ingredient with its measurement to the list
      }
    }

    res.render("recipe", { recipe, ingredients }); // Rendering the recipe page with recipe details and ingredients
  } catch (error) {
    console.error("Error fetching recipe:", error); // Logging the error if the API request fails
    res.status(500).send("Internal Server Error"); // Sending a 500 error if something goes wrong
  }
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // Logging the server URL when it starts
});
