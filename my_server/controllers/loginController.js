const User = require('../models/user');
const jwt = require('jsonwebtoken');


// Sign Up
const signUp = async (req, res, next) => {
    console.log("POST /api/signup called");
    try {
        const {email, password } = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({error: "Email is already in use" });
        }

        // Create and save the user
        const user = new User({email, password });
        await user.save();

        res.status(201).json({message: "User registered successfully!", user });
    } catch (error) {
        res.status(500).json({error: error.message });
    }
}


const signIn = async (req, res, next) => {
    console.log("POST /api/signin called");
    try {
        const {email, password } = req.body;

        // This code Checks if user exists
        const user = await User.findOne({email });
        if (!user) {
            return res.status(400).json({error: "Invalid credentials" });
        }

        //For checking password against hashed one in db
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        
        //This code generates jwt token
        const token = jwt.sign({id: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });

        res.status(200).json({message: "Login successful!", token });
    } 
    catch (error) {
        res.status(500).json({error: error.message });
    }
}

module.exports = {
    signUp,
    signIn,
};
