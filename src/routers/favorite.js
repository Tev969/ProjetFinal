const favorisRouter = require("express").Router();
const recipesModel = require("../models/recipesModels");
const user = require("../models/subscribeModels");
const subscribeModel = require("../models/subscribeModels");
const mongoose = require("mongoose");
const authguard = require("../../services/authguard");

favorisRouter.get("/addfavorite/:recipeid", authguard ,  async  (req,res)=> {
    let user = await subscribeModel.findById(req.session.user._id)
    let id = (req.params.recipeid) 
console.log(req.session);
    user.updateOne(
    {
        $addToSet: { favorites: id }
    }
    )
});





module.exports = favorisRouter;










const data = {
    "name": "Chris",
    "age": 23,
    "address": {
      "city": "New York",
      "country": "America"
    },
    "friends": [
      {
        "name": "Emily",
        "hobbies": [ "biking", "music", "gaming" ]
      },
      {
        "name": "John",
        "hobbies": [ "soccer", "gaming" ]
      }
    ]
  }
  
  console.log(/* ... */);