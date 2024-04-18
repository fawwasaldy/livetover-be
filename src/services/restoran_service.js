const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Restoran = require('../models/restoran_model');

const create = async (email, password, nama, alamat) => {
    const existingRestoran = await Restoran.findOne({ email: email });
    if (existingRestoran) {
        throw new Error('Restoran sudah terdaftar');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const restoran = new Restoran({
        email: email,
        hashPassword: hashPassword,
        nama: nama,
        alamat: alamat,
        isValid: 0
    });
    return restoran.save();
};

const enter = async (email, password) => {
    const existingRestoran = await Restoran.findOne({ email: email });
    if (!existingRestoran) {
        throw new Error('Restoran tidak ditemukan');
    }
    const validPassword = await bcrypt.compare(password, existingRestoran.hashPassword);
    if (!validPassword) {
        throw new Error('Password salah');
    }
    const token = jwt.sign({
        _id: existingRestoran._id,
        email: existingRestoran.email,
        nama: existingRestoran.nama,
        alamat: existingRestoran.alamat
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { existingRestoran, token };
};

module.exports = {
    create,
    enter
};