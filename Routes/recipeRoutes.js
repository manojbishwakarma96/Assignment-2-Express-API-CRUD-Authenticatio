/**
 * File Name: recipeRoutes.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-02-21
 */

const express = require("express");
const router = express.Router();
const recipesController = require("../Controller/recipeController");

// Fetch recipes from the database
router.get("/getAllRecipes", recipesController.getRecipes);

// Fetch a single recipe by ID
router.get("/recipe/:id", recipesController.getRecipeById);

// Create a new recipe
router.post("/create", recipesController.createRecipe);

// Update a recipe by ID
router.put("/update/:id", recipesController.updateRecipeById);


module.exports = router;
