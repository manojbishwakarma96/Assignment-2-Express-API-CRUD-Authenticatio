/**
 * File Name: userRoutes.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-02-21
 */

const express = require('express');
const passport = require('passport');
const User = require('../Models/User');
const router = express.Router();
const authController = require('../Controller/userController');

router.post('/register',authController.registerUser);

router.get('/login',passport.authenticate('local'),(req,res)=>{
    res.send('Looged in successfully');
})

//logout route
router.post('/logout', authController.logout);

module.exports = router;