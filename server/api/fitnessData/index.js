'use strict';

var express = require('express');
var controller = require('./fitnessData.controller');
//var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/weight', controller.getWeight);

router.put('/weight', controller.updateWeight);











// <-- weight panel requests -->
// router.get('/:userId/:date/weight', auth.isAuthenticated(), controller.getWeight);
// router.put('/:userId/:date/weight', auth.isAuthenticated(), controller.updateWeight);
//
// router.get('/:userId/:date/BF', auth.isAuthenticated(), controller.getBF);
// router.put('/:userId/:date/BF', auth.isAuthenticated(), controller.updateBF);


// <-- food panel requests -->
// router.get('/:userId/:date/protein', auth.isAuthenticated(), controller.getProtein);
// router.put('/:userId/:date/protein', auth.isAuthenticated(), controller.updateProtein);
//
// router.get('/:userId/:date/carb', auth.isAuthenticated(), controller.getCarbs);
// router.put('/:userId/:date/carb', auth.isAuthenticated(), controller.updateCarbs);
//
// router.get('/:userId/:date/fat', auth.isAuthenticated(), controller.getFat);
// router.put('/:userId/:date/fat', auth.isAuthenticated(), controller.updateFat);
//
// router.get('/:userId/:date/calories', auth.isAuthenticated(), controller.getCalories);
// router.put('/:userId/:date/calories', auth.isAuthenticated(), controller.updateCalories);

module.exports = router;

// /api/userData/1234/20130918/bf
// req.params('userId')
// req.params('date')
//router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
//router.get('/:id', auth.isAuthenticated(), controller.show);
