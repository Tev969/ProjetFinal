const config = require("dotenv");
const twig = require("twig");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const axios = require("axios")
const mainPageRouter = require("./src/routers/mainPage");
const allRecipesRouter = require("./src/routers/allRecipes");
const recipeDetailsRouter = require("./src/routers/recipeDetails");
const subscribeRouter = require("./src/routers/subscribeRouter");
const loginRouter = require("./src/routers/login");
const myRecipeRouter = require("./src/routers/myRecipe");
const favorisRouter = require('./src/routers/favorite')
require("dotenv").config();


const app = express();
app.use(express.static("./assets"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "123tev",
    resave: true,
    saveUninitialized: true,
  })
);


app.use(mainPageRouter);
app.use(allRecipesRouter);
app.use(recipeDetailsRouter);
app.use(subscribeRouter);
app.use(loginRouter);
app.use(myRecipeRouter);
app.use(favorisRouter)
app.listen(parseInt(process.env.PORT), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

try {
  mongoose.connect(process.env.URLBDD);
  console.log("connecter a la bdd");
} catch (error) {
  console.log(error);
}
