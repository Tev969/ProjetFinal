
const subscribeModel = require("../src/models/subscribeModels");

const authguard = async (req, res, next) => {
  try {
    if (req.session.user) {
      let user = await subscribeModel.findOne({ _id: req.session.user });
      if (user) {
        return next();
      }
    }
    throw new Error("utilisateur non connecté");
  } catch (error) {
    console.log(error.message);
    res.status(401).render("login/index.html.twig" , {
        errorAuth: error.message
    });
    
  }
};

module.exports = authguard
