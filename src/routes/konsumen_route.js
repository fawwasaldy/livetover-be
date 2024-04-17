const express = require('express');
const router = express.Router();
const verifyTokenKonsumen = require('../middlewares/verifyTokenKonsumen');

const {
    register,
    login,
    me,
} = require('../controllers/konsumen_controller');

router.post('/register', register);
router.post('/login', login);
router.get('/me', verifyTokenKonsumen, me);

module.exports = router;