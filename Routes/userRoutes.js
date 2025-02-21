/**
 * File Name: userRoutes.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-02-21
 */

const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;