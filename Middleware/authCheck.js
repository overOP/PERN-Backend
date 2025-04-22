const jwt = require('jsonwebtoken');

//authCheck is used to check if the user is authenticated to access the route
const authCheck = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ 
                message: 'Unauthorized',
                error: 'No token provided'
            });
        }
  
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ 
                message: 'Unauthorized',
                error: 'Invalid token'
            });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ 
            message: 'Unauthorized',
            error: error.message
        });
    }
}

module.exports = authCheck;