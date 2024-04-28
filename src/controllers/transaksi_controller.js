const transaksiService = require('../services/transaksi_service');

const buyProduk = async (req, res) => {
    try {
        const {
            nama,
            kuantitasBeli,
            konsumenId, 
            produkId, 
            isValid
        } = req.body;

        const newTransaksi = await transaksiService.buyProduk(
            nama,
            kuantitasBeli,
            konsumenId, 
            produkId, 
            isValid
        );
        res.status(201).json(newTransaksi);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    buyProduk
}