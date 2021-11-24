let db = require("./db");

const Outil = db.sequelize.define("tblPlats", {
  nom: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },
  description: {
    type: db.Sequelize.STRING,
    notEmpty: true,
  },

});


module.exports = Outil;//export = const ln 3
