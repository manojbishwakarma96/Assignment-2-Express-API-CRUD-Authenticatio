/**
 * File Name: recipeController.js
 * Student's Name: Manoj Bishwakarma, LAxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-02-21
 */

const Recipe = require("../models/Recipe");

exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find(); // Using mongoose's find method to get recipes
        res.status(200).json({ success: true, data: recipes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
