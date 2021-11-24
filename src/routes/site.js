var express = require('express');
var router = express.Router();
var controllerSite = require('../controllers/site.js');

router.get("/", controllerSite.getHomepage);

router.post("/", controllerSite.postHomepage);

// router.get("/afficher", controllerSite.getAfficher);


module.exports = router;
