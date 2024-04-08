// const subscribeModel = require("../models/subscribeModels");
// const APIrouter = require("express").Router();
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const authguard = require("../../services/authguard");



// APIrouter.get("/spoonacular-recipes", async (req, res) => {
//     try {
//       const apiKey = process.env.SPOONACULAR_API_KEY; // Clé API Spoonacular
//       const apiUrl = "https://api.spoonacular.com/recipes/random"; // Endpoint pour récupérer des recettes aléatoires
  
//       // Faire une requête à l'API Spoonacular
//       const response = await axios.get(apiUrl, {
//         params: {
//           number: 10, // Nombre de recettes à récupérer
//           apiKey: apiKey,
//         },
//       });
//       console.log(response);
  
//       const recipes = response.data.recipes; // Récupérer les données de recettes depuis la réponse de l'API
  
//       // Envoyer les données de recettes en tant que réponse
//       res.json(recipes);
//     } catch (error) {
//       console.error("Error fetching recipes from Spoonacular:", error);
//       res.status(500).json({ error: "Error fetching recipes from Spoonacular" });
//     }
//   });