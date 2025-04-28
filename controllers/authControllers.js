const User = require ('../models/User');
const generateToken = require('../utils/generateToken');

//@desc Register new User

exports.registerUser = async (req,res) => {
    const { name, email, password, role} = req.body;
    
    const userExist = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists'});
    }

    const user = await User.create({ name, email, password, role });

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user_id),
    });
};

//@desc Authenticate user & get token
exports.loginUser = async (req,res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user_id),
        });
    } else{
        res.status(401).json({ message: 'Invalid email or password'});
    }
   
};

// @desc Get user profile
exports.getUserProfile = async (req,res) => {  
    const user = await User.findById(req.user.id).select('-password');

    if (user) {
        res.json(user);
    } else{
        res.status(404).json({ message: 'User not found'});
    }
   
};
