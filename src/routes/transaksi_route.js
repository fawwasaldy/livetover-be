const express = require('express');
const router = express.Router();
const transaksiControl = require('../controllers/transaksi_controller');

router.post('/buyMenu', transaksiControl.buyProduk);

module.exports = router