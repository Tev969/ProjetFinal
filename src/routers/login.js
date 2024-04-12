const subscribeModel = require("../models/subscribeModels");
const loginRouter = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const authguard = require("../../services/authguard");
const recipesModel = require("../models/recipesModels");

loginRouter.get("/login", (req, res) => {
  res.render("login/index.html.twig");
});

const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    next(); // Si l'utilisateur est connecté, continuez
  } else {
    res.redirect("/login"); // Sinon, redirigez l'utilisateur vers la page de connexion
  }
};

loginRouter.post("/login", async (req, res) => {
  try {
    let user = await subscribeModel.findOne({ email: req.body.email }); // on recherche l'email
    if (user) {
      // si il existe
      if (bcrypt.compareSync(req.body.password, user.password)) {
        // on compare les mdp
        req.session.user = user; // on stockes user en session
        res.redirect("/MainPage"); // on redidrige vers le panel admin
      } else {
        throw { password: "Mauvais mot de passe" };
      }
    } else {
      throw { email: "Email incorect" };
    }
  } catch (error) {
    console.log(error);
    res.render("login/index.html.twig", {
      title: "Connexion",
      error: error,
    });
  }
});

loginRouter.get("/MainPage", isLoggedIn, (req, res) => {
  res.render("mainPage.html.twig", {
    user: req.session.user, // Envoyez les données de l'utilisateur à la page principale
  });
});

loginRouter.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/MainPage");
});

loginRouter.get("/search", async (req, res) => {
  try {
    let filterCriteria = {};

    if (req.query.findRecipe) {
      filterCriteria = {
        recipeTitle: { $regex: req.query.findRecipe, $options: "i" },
      };
    }

    // Récupérer les recettes en fonction des critères de filtrage
    const recipes = await recipesModel.find(filterCriteria);

    // Rendre la page des recettes avec les recettes récupérées
    res.render("allRecipes/index.html.twig", { recipes: recipes });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Une erreur s'est produite lors du chargement de la page principale."
      );
  }
});

module.exports = loginRouter;
