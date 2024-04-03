const mainPageRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");
const user = require('../models/subscribeModels')
mainPageRouter.get("/MainPage", async (req, res) => {
  try {
    const recipes = await recipesModel.find().limit(5);
    res.render("MainPage/index.html.twig", {
        user,
      recipes,
    });
  } catch (error) {
    console.log(error);
  }
});




module.exports = mainPageRouter;

