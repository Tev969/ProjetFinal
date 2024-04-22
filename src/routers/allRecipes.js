const allRecipesRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");
const userModel = require("../models/subscribeModels");

allRecipesRouter.get("/allRecipes", async (req, res) => {
    try {
      const recipes = await recipesModel.find();
      let user;
      if (req.session.user) 
      {
         user = await userModel.findById(req.session.user._id)
      }
      res.render("allRecipes/index.html.twig", {
        user: user,
        recipes,
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  module.exports = allRecipesRouter;