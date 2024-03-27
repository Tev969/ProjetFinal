const subscribeModel = require("../models/subscribeModels");
const subscribeRouter = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const authguard = require("../../services/authguard");

subscribeRouter.get("/subscribe", (req, res) => {
  res.render("subscribe/index.html.twig");
});

subscribeRouter.post("/subscribe", async (req, res) => {
  try {
    const user = new subscribeModel(req.body);
    user.validateSync();
    await user.save();
    req.session.user = user._id;
    res.redirect("/MainPage");
  } catch (error) {
    console.log(error);
    console.log(req.body);
    res.render("subscribe/index.html.twig", { error: error });
  }
});


module.exports = subscribeRouter;