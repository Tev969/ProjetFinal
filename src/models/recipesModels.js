const mongoose = require("mongoose");
const recipesSchema = new mongoose.Schema({
 
    image: {
    type: String,
    required: [true, "url de recettes requis"],
    validate: {
      validator: function (v) {
        return /^https?:\/\/\S+?\.(?:jpg|jpeg|png|gif)$/g.test(v);
      },
      message: "Entrer un url de recettes valide",
    },
  },

  recipeTitle: {
    type: String,
    required: [true, "Titre de recettes requis"],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z\s'-]+$/g.test(v);
      },
      message: "Entrer un titre de recettes valide",
    },
  },

  duration: {
      type: Number,
      required: [true , "Temps de recettes necéssaire requis"],
      validate: {
          validator: function (v) {
            return /^[1-9]$/g.test(v);
          },
          message: "Entrer un nombre valide",
        },
  },

  difficulty: {
      type: String,
      required: [true , "Difficulé de recettes requis"],
      validate: {
          validator: function (v) {
            return /^[a-zA-Z\s'-]+$/g.test(v);
          },
          message: "Entrer une difficulté de recettes valide",
        },
  },

  numberOfPeoples: {
      type: Number,
      required: [true , "Nombre de personnes necéssaire requis"],
      validate: {
          validator: function (v) {
            return /^[1-9]$/g.test(v);
          },
          message: "Entrer un nombre valide",
        },
  },
  
//   instruction: {
//       type: [{}],
//   },

//   ingredients: {
//       type: [{}],
//   },
});

const recipesModel = mongoose.model("recipes", recipesSchema);
module.exports = recipesModel;
