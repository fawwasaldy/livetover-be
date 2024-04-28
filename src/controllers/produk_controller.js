const produkService = require('../services/produk_service');

const createProduk = async (req, res) => {
    try {
        const {
            nama,
            deskripsi,
            harga,
            bestBefore,
            kuantitas,
            isValid,
            restoranId
        } = req.body;

        const newProduk = await produkService.createProduk(
            nama,
            deskripsi,
            harga,
            bestBefore,
            kuantitas,
            isValid,
            restoranId
        );
        res.status(201).json(newProduk);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateProduk = async (req, res) => {
    try {
        const {
            nama,
            deskripsi,
            harga,
            bestBefore,
            kuantitas,
            isValid,
            restoranId
        } = req.body;

        const updatedProduk = await produkService.updateProduk(
            nama,
            deskripsi,
            harga,
            bestBefore,
            kuantitas,
            isValid,
            restoranId

        );
        res.status(200).json({ message: 'Menu item updated successfully', data: updatedProduk });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const searchProduk = async (req, res) => {
    try {
        const nama = req.body.nama;
        const foundProduk = await produkService.searchProduk(nama);
        res.status(200).json(foundProduk);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createProduk,
    updateProduk,
    searchProduk
}