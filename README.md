# Cuisine Explorer & Wine Pairing

A Node.js and Express application that helps users discover recipes by cuisine type and find perfect wine pairings for their meals.

## Features

- 🍽️ Browse recipes by various cuisine types (Italian, Mexican, Indian, etc.)
- 🍷 Get wine pairing recommendations for specific cuisines
- 📱 Responsive design for desktop and mobile using Bootstrap
- 🔍 Search functionality to find specific recipes
- 📝 Detailed recipe information including ingredients and instructions

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Pug templating engine, Bootstrap, JavaScript
- **APIs**:
  - [TheMealDB API](https://www.themealdb.com/api.php) - For recipe data
  - [Spoonacular API](https://spoonacular.com/food-api) - For wine pairing recommendations

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/SarrahGandhi/FoodWinePairingAPI.git
   cd cuisine-wine-pairing
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:

   ```
   SPOONACULAR_API_KEY=your_spoonacular_api_key
   PORT=2560
   ```

4. Start the application:

   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:2560`

## API Usage

### MealsDB API

This project uses TheMealDB API to fetch recipes by cuisine type. The main endpoints used are:

- `/filter.php?a={cuisine}` - Get all meals by cuisine type
- `/lookup.php?i={mealId}` - Get detailed meal information by ID

### Spoonacular API

The Spoonacular API is used for wine pairing recommendations:

- `/food/wine/pairing` - Get wine pairing recommendations for a cuisine or dish

## Project Structure

```
cuisine-wine-pairing/
├── node_modules/
├── views/
│   ├── index.pug
│   ├── layout.pug
│   └── recipe.pug
├── components/
│   └── recipe/
│       └── api.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Usage

1. On the homepage, browse through available cuisine types or use the search bar
2. Select a cuisine to view all available recipes
3. Click on a specific recipe to see detailed information
4. View wine pairing recommendations tailored to the cuisine or specific dish

## Screenshots

(Add screenshots of your application here)

## Future Enhancements

- User authentication and the ability to save favorite recipes
- Nutritional information for recipes
- User ratings and reviews for recipes
- More advanced filtering options (dietary restrictions, cook time, etc.)
- Cocktail pairing suggestions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for their free recipe API
- [Spoonacular](https://spoonacular.com/) for their comprehensive food and wine API
- [Bootstrap](https://getbootstrap.com/) for responsive design components
