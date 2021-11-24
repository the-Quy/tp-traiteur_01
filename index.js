const express = require("express");
let session = require("express-session");
let route = require("./src/routes/site.js");
const app = express();
const port = 3000;
// new imports
let db = require("./src/models/db.js");
let Etudiant = require("./src/models/tablePlats.js");

/*
    Question 5

    Avec une  architecture MVC nous vous demandons d'ajouter des étudiants (leur nom)
    dans la base de donnée et de pouvoir les affiches dans la page secondaire.
    Assurez-vous de bien concevoir les différents partis du MVC.

*/

// ICI les middleware !
app.set("view engine", "pug");
app.use(express.static("public"));

// get et post
app.use(express.json());
app.use(express.urlencoded());

// Session avec notre cle
app.use(
  session({
    secret: "loremipsumasdfasfasdw423o84hp437wfhp34w78hfp98hpf98awe3454",
    cookie: { maxAge: 600000 },
  })
);

app.use(route);

(async () => {
  //ligne mandatoire pour creation DB
  await db.sequelize.sync({ force: true });
})();

// Server Start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
