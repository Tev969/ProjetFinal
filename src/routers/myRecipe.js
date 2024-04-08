const myRecipeRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");
const user = require('../models/subscribeModels')
const subscribeModel = require("../models/subscribeModels");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const authguard = require("../../services/authguard");
const multer = require("../../services/multer-config")

myRecipeRouter.get("/addRecipe" , async  (req,res) => {
  res.render("myRecipe/index.html.twig" , {
    user: await subscribeModel.findById(req.session.user._id).populate("recipeCollection"),
  })
})



myRecipeRouter.get('/addOneRecipe' , async (req,res) => {
    res.render("addRecipe/index.html.twig" , {
        user: await subscribeModel.findById(req.session.user._id),
    })
})


myRecipeRouter.post(
    "/addOneRecipe",
    authguard,
    multer.single("image"),
    async (req, res) => {
      try {
        console.log(JSON.stringify(req.body)); 
        let recipe = new recipesModel(req.body);
        if (req.file) {
          if (req.multerError) {
            throw { errorUpload: "le ficher n'est pas valide" };
          }
          recipe.image = req.file.filename;
        }
        recipe._user = req.session.user._id;
        recipe.validateSync();
        console.log(await recipe.save());
        res.redirect("/addRecipe");

      } catch (error) {
        console.log(req.session);
        console.log(error);
        res.render("myRecipe/index.html.twig", {
          user: await subscribeModel
            .findById(req.session.user._id)
            .populate("recipeCollection"),
          error: error,
        });
      }
    }
  );

module.exports = myRecipeRouter