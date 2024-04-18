const allRecipesRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");

allRecipesRouter.get("/allRecipes", async (req, res) => {
    try {
      const recipes = await recipesModel.find();
      res.render("allRecipes/index.html.twig", {
        user: req.session.user,
        recipes,
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  module.exports = allRecipesRouter;