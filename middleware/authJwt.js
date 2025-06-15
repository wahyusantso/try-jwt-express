require('dotenv').config();
const jwt = require('jsonwebtoken');


function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({message: 'Access denied'});

    try {
        const secretKey = process.env.SECRET_KEY_TOKEN;
        const decode = jwt.verify(token, secretKey);
        console.log(`Access token: ${decode.name}`);
        next();
    } catch (error) {
        res.status(401).json({message: error});
    }
}

module.exports = {
    verifyToken
}