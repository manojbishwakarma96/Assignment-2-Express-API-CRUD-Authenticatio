// Name: Manoj Bishwakarma
// Student ID: 200594681



const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

//Encrypt the password before saving the user

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    const salt =await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

//Method to validate pasword

UserSchema.methods.isValidPassword = function(password){
    return bcrypt.compare(password,this.password);
};

const User = mongoose.model('User',UserSchema);
module.exports = User;
