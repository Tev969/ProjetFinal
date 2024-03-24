const recipeDetailsRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");


recipeDetailsRouter.get("/recipeDetail/:recipeid", async (req, res) => {
    try {
        const recipes = await recipesModel.findById(req.params.recipeid)
        console.log(recipes);
      res.render("recipeDetails/index.html.twig", {
        recipes,
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  module.exports = 
  recipeDetailsRouter;