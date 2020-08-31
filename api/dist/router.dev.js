"use strict";

// Import
var express = require('express'),
    router = express.Router(),
    path = require('path'); // Controller


var homeController = require('./controllers/homeController'),
    articleController = require('./controllers/articleController'),
    contactController = require('./controllers/contactController'),
    referenceController = require('./controllers/referenceController'); // Home


router.route('/').get(homeController.get); // Article

router.route('/article').get(articleController.get); // Contact

router.route('/contact').get(contactController.get); // reférence

router.route('/reference').get(referenceController.get);
module.exports = router;