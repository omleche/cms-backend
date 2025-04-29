const jwt = ('jsonwebtoken');
const User =('../models/User');

const protect = async ( req, res, next) =>{
    let token;
    
    if (req.token.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');

            next();
    
        } catch (error){
            res.status(401).json ({ message: 'Not authorized token, token failed'});
        }
    }

    if (!token) {
        res.status (401).json({ message:'Not authorized, not token'});
    }
};

module.exports = { protect };