/**
 * File Name: index.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-02-21
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session= require('express-session');
const recipeRoutes = require('./Routes/recipeRoutes');
const userRoutes = require('./Routes/userRoutes');
const crypto = require('crypto');
require('dotenv').config();
require('./config/passportConfig');

//Intialize the app
const app = express();

app.use(bodyParser.json());


//SEt the session and passport
const secretKey = crypto.randomBytes(64).toString('hex');
console.log(`Generated secret key:${secretKey}`); 
app.use(session({
        secret: secretKey,
        resave: false,
        saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/user',userRoutes);
app.use('/api/recipe',recipeRoutes);


//MongoB connection
const MONGO_URI = process.env.MONGO_URI;
;
mongoose.connect(MONGO_URI)
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.error("MongoDb connection error",err));

//listen the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}` );
})