/**
 * File Name: index.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-01-29
 */

const express = require("express");
const app = express();
const recipesRoutes = require("./Routes/recipeRoutes");
const mongoose = require("mongoose");

// Load environment variables from .env file
require("dotenv").config();

// MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

app.use(express.json());

app.use("/api/recipes", recipesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
