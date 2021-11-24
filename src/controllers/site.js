let lePlat = require("../models/tablePlats.js");

exports.getHomepage = async (req, res, next) => {
  let lesPlats = await lePlat.findAll();
  res.render("index", {
    nom: lesPlats,
  });
};

exports.postHomepage = async (req, res, next) => {
  let lesPlats = await lePlat.findAll();
  // await newData.save();
  let newData = lePlat.create({
    nom: req.body.nom,
    description: req.body.description,
  });
  
  res.render("index", {
    nom: lesPlats,
    description: lesPlats,
  });
};

// exports.getAfficher = async (req, res, next) => {
//   let lesEtudiants = await Etudiant.findAll();
//   res.render("display", {
//     nom: lesEtudiants,
//   });
// };
