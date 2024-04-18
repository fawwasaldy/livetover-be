const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

const {
    register,
    login,
    me,
} = require('../controllers/restoran_controller');

router.post('/register', register);
router.post('/login', login);
router.get('/me', verifyToken, me);

module.exports = router;