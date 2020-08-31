// Import
const express = require('express'),
    router = express.Router(),
    path = require('path')

// Controller
const homeController = require('./controllers/homeController'),
    articleController = require('./controllers/articleController'),
    contactController = require('./controllers/contactController'),
    referenceController = require('./controllers/referenceController'),
    adminController = require('./controllers/adminController'),
    adminpartController = require('./controllers/adminpartController'),
    userController = require('./controllers/userController')

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

module.exports = router;