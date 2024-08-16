const User = require('../models/user');
const jwt = require('jsonwebtoken');
const comparePassword = require('../utils/comparePassword');
const { use } = require('../routes/routes');

// Sign Up
const signUp = async (req, res, next) => {
   
    try {
        const {name,email, password , phone, address,role} = req.body;// The signup was not working cuz the required fields were not parsed or handled

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({error: "Email is already in use" });
        }

        // Create and save the user
        const user = new User({name, email, password, phone, address, role });
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
        if (!email || !password) {
            return res.status(400).json({ error: 'Email or password is missing' });
        }
        console.log('Received password:', password);

        // This code Checks if user exists
        const user = await User.findOne({email });
        if (!user) {
            return res.status(400).json({error: "Invalid credentials" });
        }

        //For checking password against hashed one in db
        const isMatch = await comparePassword(password, user.password);
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
