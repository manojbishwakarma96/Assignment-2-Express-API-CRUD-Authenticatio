/**
 * File Name: recipeController.js
 * Student's Name: Manoj Bishwakarma, LAxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-02-21
 */

const Recipe = require("../models/Recipe");


exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find(); 
        res.status(200).json({ success: true, data: recipes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

//Controller for getRecipeById
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
