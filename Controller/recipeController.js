/**
 * File Name: recipesController.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-01-29
 */
const Recipe = require("../Models/Recipe");

exports.getRecipes = async (req, res) => {
  try {
    // Fetch all recipes from the database
    const recipes = await Recipe.find();
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
