const mongoose = require("mongoose");
const subscribeModel = require('./subscribeModels')
const recipesSchema = new mongoose.Schema({
 
    image: {
    type: String,
    required: [true, "url de recettes requis"],
    validate: {
      validator: function (v) {
        return /^\S+?\.(?:jpg|jpeg|png|gif)$/g.test(v);
      },
      message: "Entrer un url de recettes valide",
    },
  },

  recipeTitle: {
    type: String,
    required: [true, "Titre de recettes requis"],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z\s'éèàâêîôûùç'-]+$/g.test(v);
      },
      message: "Entrer un titre de recettes valide",
    },
  },

  duration: {
      type: String,
      required: [true , "Temps de recettes necéssaire requis"],
  },

  difficulty: {
      type: String,
      required: [true , "Difficulé de recettes requis"],
  },

  price: {
    type: String,
    required: [true , "prixde recettes requis"],
},

    steps: {
      type: [String],
  },


    ingredients: {
      type: [{name:String , quantity:Number}],
  },
});

recipesSchema.pre("save", async function (next) {
    await subscribeModel.updateOne(
      { _id: this._user },
      { $addToSet: { recipeCollection: this._id } }
    );
    next();
  });
  
//   recipesSchema.post("deleteOne", async function (next) {
//     const deletedEmployeeId = this.getQuery()._id;
//     await subscribeModel.updateOne(
//       { recipeCollection: { $in: [deletedEmployeeId] } },
//       { $pull: { recipeCollection: deletedEmployeeId } }
//     );
//   });
  

const recipesModel = mongoose.model("recipes", recipesSchema);
module.exports = recipesModel;
