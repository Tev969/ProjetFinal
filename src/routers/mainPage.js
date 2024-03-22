// const tempRecipes = [
// {
//     image: "https://placehold.co/900x400",
//     recipeTitle: "Poulet au curry",

// },
// {
//     image: "https://placehold.co/600x400",
//     recipeTitle: "kiri",

// },
// {
//     image: "https://placehold.co/400x400",
//     recipeTitle: "viktor",

// },
// {
//     image: "https://placehold.co/300x400",
//     recipeTitle: "Fatoumata",

// },
// {
//     image: "https://placehold.co/100x400",
//     recipeTitle: "pipi raton",

// },
// {
//     image: "https://placehold.co/600x400",
//     recipeTitle: "Graine de mousse",

// }

// ];
const mainPageRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");
mainPageRouter.get("/MainPage", async (req, res) => {
  try {
    const recipes = await recipesModel.find();
    res.render("MainPage/index.html.twig", {
      recipes,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = mainPageRouter;
