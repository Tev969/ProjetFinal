const mainPageRouter = require("express").Router();
const session = require("express-session");
const recipesModel = require("../models/recipesModels");
const userModel = require("../models/subscribeModels");
mainPageRouter.get("/MainPage", async (req, res) => {
  try {

    const recipes = await recipesModel.find().limit(5);
    let user;
    if (req.session.user) 
    {
       user = await userModel.findById(req.session.user._id)
    }

    res.render("MainPage/index.html.twig", {
      user: user,
      recipes: recipes,
      todayRecipes: recipes.slice(2, 5),
    });
  } 
  catch (error) {
    console.log(error);
  }
});

module.exports = mainPageRouter;
