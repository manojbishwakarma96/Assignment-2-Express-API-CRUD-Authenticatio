/**
 * File Name: userController.js
 * Student's Name: Manoj Bishwakarma, Laxman Rokaya
 * Student ID: 200594681, 200562874
 * Date: 2025-02-21
 */


const User = require('../Models/User');
exports.registerUser = async(req,res)=>{
    const{username,email,password} = req.body;

    try{
        //validate
        if(!username || !email || !password){
            return res.status(400).json({message:'All fields are required'});
        }

        //check if email is valid
        if(typeof email !=='string' || email.trim() === ''){
            return res.status(400).json({message:'Invalid email address'});
        }
        //check for existing user
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'Email is already in use'});
        }

        const newUser = new User({
            username, email,password
        });

        await newUser.save();
        return res.status(201).json({message:'User registerd succesfully'});

    }
    catch(error){
        console.error('Error details: ', error);
        return res.status(500).json({message:'Error registering user'});
    }
}

exports.loginUser = async(req,res)=>{
    const{email,password}=req.body;

    try{
            //Validate
            if(!email || !password){
                return res.status(401).json({message:'All fields are required'});
            }

           
            //Check for existing user

            const user = await User.findOne({email});
            if(!user){
                return res.status(401).json({message:'Imvalid email or password'});
            }
            //Compare password with hashed password
            const isPasswordValid = await bcrypt.compare(password,user.password);
            if(!isPasswordValid){
                return res.status(401).json({message:'Password does not match'});
            }
            //Succseful login
            res.status(200).json({message:'Login succesful',userId:user._id});       
          
    }

    catch(error){
        console.error('Error details: ',error);
        res.status(500).json({message:'Error loggin in user'});
    }
}

/*Manoj Bisghwakarma
student id:200594681
*/

//logout function
exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error("Logout error:", err);
            return res.status(500).json({ message: "Error logging out" });
        }
// clearing session
        req.session.destroy((err) => {
            if (err) {
                console.error("Session destroy error:", err);
                return res.status(500).json({ message: "Error clearing session" });
            }
// Clears session cookie
            res.clearCookie('connect.sid'); 
            res.status(200).json({ message: "Logged out successfully!" });
        });
    });
};
