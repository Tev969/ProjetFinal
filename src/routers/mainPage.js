const mainPageRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");
mainPageRouter.get("/MainPage", async (req, res) => {
  try {
    const recipes = await recipesModel.find().limit(5);
    res.render("MainPage/index.html.twig", {
      recipes,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = mainPageRouter;
