/**
 * File Name: Recipe.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-01-29
 */

const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  recipeName: String,
  ingredients: [String],
  cookingTime: Number,
  difficulty: String,
  cuisine: String,
  description: String,
  photoLink: String,
  averageRating: Number,
});

module.exports = mongoose.model("recipes", recipeSchema);
