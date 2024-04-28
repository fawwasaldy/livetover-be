const Produk = require('../models/produk_model');

const createProduk = async (nama, deskripsi, harga, bestBefore, kuantitas, isValid, restoranId) => {
    const existingProduk = await Produk.findOne({ nama: nama });
    if (existingProduk) {
        throw new Error('Produk sudah terdaftar');
    } else {
        const produk = new Produk({
            nama: nama,
            deskripsi: deskripsi,
            harga: harga,
            bestBefore: bestBefore,
            kuantitas: kuantitas,
            isValid: isValid,
            restoranId: restoranId
        });
        return produk.save();
    }
}

const updateProduk = async (nama, deskripsi, harga, bestBefore, kuantitas, isValid, restoranId) => {
    try {
        const updateProduk = await Produk.findOneAndUpdate({ nama: nama }, {
            deskripsi: deskripsi,
            harga: harga,
            bestBefore: bestBefore,
            kuantitas: kuantitas,
            isValid: isValid,
            restoranId: restoranId
        },
            { new: true }
        );
    } catch (error) {
        console.log(error)
    }
}

const searchProduk = async (nama) => {
    try {
        const foundProduk = await Produk.find({ nama: { $regex: new RegExp(nama, 'i') } });
        if (foundProduk.length > 0) {
            return foundProduk;
        } else {
            throw new Error("Produk tidak ditemukan");
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// const updateProduk = async (nama, deskripsi, harga, bestBefore, kuantitas, isValid, restoranId) => {
//     try {
//         const updatedProduk = await Produk.findOneAndUpdate({ nama: nama }, {

//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

module.exports = {
    createProduk,
    updateProduk,
    searchProduk
}