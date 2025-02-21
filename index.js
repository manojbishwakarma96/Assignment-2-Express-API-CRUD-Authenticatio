const express = require('express');
const app = express();
app.use(express.json());

const recipeRoutes = require('./Routes/recipeRoutes');

const { MongoClient } = require('mongodb');


// Set the port
const PORT = process.env.PORT || 3000;

app.use('/api/recipes', recipeRoutes);

// MongoDB connection URL
const url = 'mongodb+srv://manojbishwakarma88:manoj123@recipesdatabase.iogvl.mongodb.net/';
const dbName = 'RecipesDB'; 

const client = new MongoClient(url);

// Connect to the MongoDB server
async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
}

connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});