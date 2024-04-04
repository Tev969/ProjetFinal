const subscribeModel = require("../models/subscribeModels");
const loginRouter = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const authguard = require("../../services/authguard");

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
      user: req.session.user // Envoyez les données de l'utilisateur à la page principale
    });
  });

loginRouter.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/MainPage");
});

module.exports = loginRouter;
