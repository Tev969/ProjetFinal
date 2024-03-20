const mainPageRouter = require("express").Router();

mainPageRouter.get('/MainPage' , (req,res) => {
res.render('MainPage/index.html.twig')
})


module.exports = mainPageRouter