/**
 * File Name: recipeRoutes.js
 * Student's Name: Manoj Bishwakarma, LAxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-02-21
 */


const express = require("express");
const router = express.Router();
const recipesController = require("../Controller/recipeController");

// Fetch recipes from the database
router.get("/getAllRecipes", recipesController.getRecipes);

module.exports = router;
