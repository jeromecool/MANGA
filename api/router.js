// Import
const express = require('express'),
    router = express.Router(),
    path = require('path')

// Controller
            //accueil
const homeController = require('./controllers/homeController'),
            //article
    articleController = require('./controllers/articleController'),
            //contact
    contactController = require('./controllers/contactController'),
            //reference
    referenceController = require('./controllers/referenceController'),
            //admin
    adminController = require('./controllers/adminController'),
            //partie du admin
    adminpartController = require('./controllers/adminpartController'),
            // utilisateur
    userController = require('./controllers/userController'),
            //book de livre
    bookingController = require('./controllers/bookingController')

// Home
router.route('/')
    .get(homeController.get)

// Article
router.route('/article')
    .get(articleController.get)

// Contact
router.route('/contact')
    .get(contactController.get)

// reférence
router.route('/reference')
.get(referenceController.get)

// admin
router.route('/admin')
    .get(adminController.get)

// adminpart
router.route('/adminpart')
    .get(adminpartController.get)

// user
router.route('/user')
    .get(userController.get)

// booking
router.route('/booking')
    .get(bookingController.get)

module.exports = router;