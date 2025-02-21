/**
 * File Name: recipeController.js
 * Student's Name: Manoj Bishwakarma, LAxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-02-21
 */

const Recipe = require("../models/Recipe");

// Get all recipes
exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find(); 
        res.status(200).json({ success: true, data: recipes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ success: false, message: "Recipe not found" });
        }
        res.status(200).json({ success: true, data: recipe });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, cookingTime, difficulty, servings } = req.body;

        // Validate required fields
        if (!title || !ingredients || !instructions) {
            return res.status(400).json({
                success: false,
                message: "Please provide title, ingredients, and instructions"
            });
        }

        // Create new recipe
        const recipe = await Recipe.create({
            title,
            ingredients,
            instructions,
            cookingTime,
            difficulty,
            servings
        });

        res.status(201).json({
            success: true,
            message: "Recipe created successfully",
            data: recipe
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a recipe by ID
exports.updateRecipeById = async (req, res) => {
    try {
        const { title, ingredients, instructions, cookingTime, difficulty, servings } = req.body;

        // Find and update the recipe
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id, 
            { title, ingredients, instructions, cookingTime, difficulty, servings },
            { new: true } // Return the updated document
        );

        if (!recipe) {
            return res.status(404).json({ success: false, message: "Recipe not found" });
        }

        res.status(200).json({
            success: true,
            message: "Recipe updated successfully",
            data: recipe
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
 

// Delete a recipe by ID
exports.deleteRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({ success: false, message: "Recipe not found" });
        }
        res.status(200).json({
            success: true,
            message: "Recipe deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};