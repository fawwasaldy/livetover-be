const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Token tidak ditemukan'
        });
    }
    try {
        const veriviedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = veriviedUser;
        next();
    } catch (e) {
        return res.status(400).json({
            message: 'Token tidak valid',
            error: e.message
        });
    }
}

module.exports = verifyToken;