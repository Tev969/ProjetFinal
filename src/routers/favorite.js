const favorisRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");
const user = require("../models/subscribeModels");
const subscribeModel = require("../models/subscribeModels");
const mongoose = require("mongoose");
const authguard = require("../../services/authguard");

// Notre route d'ajout en favoris 

favorisRouter.get("/addfavorite/:recipeid", authguard, async (req, res) => {
  let user = await subscribeModel.findById(req.session.user._id);
  let id = req.params.recipeid;

  try {
    await user.updateOne({
      $addToSet: { favorites: [id] },
    });

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    return res;
  }
  res.status(200).send();
//   Permet de valider la requête 
});


// Suppresion de favoris

favorisRouter.get("/removefavorite/:recipeid", authguard, async (req, res) => {
  let user = await subscribeModel.findById(req.session.user._id);
  let id = req.params.recipeid;

  try {
    await user.updateOne({
      $pull: { favorites: id },
    });

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    return res;
  }
  res.status(200).send();
});

module.exports = favorisRouter;
