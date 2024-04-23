const express = require('express');
const router = express.Router();
const produkControl = require('../controllers/produk_controller');

router.post('/addMenu', produkControl.createProduk);
router.put('/updateMenu', produkControl.updateProduk);

module.exports = router