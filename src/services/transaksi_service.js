const Transaksi = require('../models/transaksi_model');
const Produk = require('../models/produk_model');

const buyProduk = async (nama, kuantitasBeli, konsumenId, produkId, isValid) => {
    try {
        const updateProduk = await Produk.findOneAndUpdate(
            { nama: nama },
            { $inc: { kuantitas: -kuantitasBeli } },
            { new: true }
        );

        if (!updateProduk) {
            throw new Error('Produk tidak ditemukan');
        }

        const transaksi = new Transaksi({
            isValid : isValid,
            konsumenId : konsumenId,
            produkId : produkId
        });

        const transaksiBaru = await transaksi.save();
        if (!savedTransaksi) {
            throw new Error('Gagal menyimpan transaksi');
        }
        return transaksiBaru;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    buyProduk
}