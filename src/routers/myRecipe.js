const myRecipeRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");
const user = require('../models/subscribeModels')
const subscribeModel = require("../models/subscribeModels");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const authguard = require("../../services/authguard");

myRecipeRouter.get("/addRecipe" , async  (req,res) => {
  res.render("myRecipe/index.html.twig" , {
    user: await subscribeModel.findById(req.session.user._id),
  })
})



myRecipeRouter.get('/addOneRecipe' , async (req,res) => {
    res.render("addRecipe/index.html.twig" , {
        user: await subscribeModel.findById(req.session.user._id),
    })
})

module.exports = myRecipeRouter