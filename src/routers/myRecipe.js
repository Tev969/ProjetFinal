const myRecipeRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");
const user = require("../models/subscribeModels");
const subscribeModel = require("../models/subscribeModels");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const authguard = require("../../services/authguard");
const multer = require("../../services/multer-config");

myRecipeRouter.get("/addRecipe", async (req, res) => {
  res.render("myRecipe/index.html.twig", {
    user: await subscribeModel
      .findById(req.session.user._id)
      .populate("recipeCollection"),
  });
});

myRecipeRouter.get("/addOneRecipe", async (req, res) => {
  res.render("addRecipe/index.html.twig", {
    user: await subscribeModel.findById(req.session.user._id),
  });
});

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

myRecipeRouter.get("/deleteRecipe/:recipeid", authguard, async (req, res) => {
  try {
    await recipesModel.deleteOne({ _id: req.params.recipeid });
    res.redirect("/addRecipe");
  } catch (error) {
    console.log(error);
    res.render("addRecipe/index.html.twig", {
      errorDelete: "Probleme survenue lors du delete",
      user: await subscribeModel
        .findById(req.session.user._id)
        .populate("recipeCollection"),
    });
  }
});



myRecipeRouter.get("/updateRecipe/:recipeid", authguard , async (req, res) => {
  try {
    let recipe = await recipesModel.findById(req.params.recipeid);
    res.render("addRecipe/index.html.twig", {
      user: await recipesModel.findById(req.session.user._id),
      recipe: recipe,
    });
  } catch (error) {
    console.log(error);
    res.render("MainPage/index.html.twig", {
      user: await subscribeModel
        .findById(req.session.user._id)
        .populate("employeeCollection"),
      errorMessage: "Utilisateur que vous souhaitez modifier n'existe pas",
      user: await employeeModel.findById(req.session.user._id),
    });
  }
});

//   employeeRouter.post(
//     "/update/:employeeid",
//     authguard,
//     upload.single("photo"),
//     async (req, res) => {
//       try {
//         if (req.file) {
//           req.body.photo = req.file.filename;
//         }
//         await employeeModel.updateOne({ _id: req.params.employeeid }, req.body);
//         res.redirect("/principalPage");
//       } catch (error) {
//         res.render("principalPage/index.html.twig", {
//           errorDelete: "Probleme survenue ",
//         });
//       }
//     }
//   );

module.exports = myRecipeRouter;
