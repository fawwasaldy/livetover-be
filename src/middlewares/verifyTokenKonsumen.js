const jwt = require('jsonwebtoken');

const verifyTokenKonsumen = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Token tidak ditemukan'
        });
    }
    try {
        const veriviedKonsumen = jwt.verify(token, process.env.JWT_SECRET);
        req.konsumen = veriviedKonsumen;
        next();
    } catch (e) {
        return res.status(400).json({
            message: 'Token tidak valid'
        });
    }
}

module.exports = verifyTokenKonsumen;