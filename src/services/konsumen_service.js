const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Konsumen = require('../models/konsumen_model');

const create = async (email, password, nama) => {
    const existingKonsumen = await Konsumen.findOne({ email: email });
    if (existingKonsumen) {
        throw new Error('Konsumen sudah terdaftar');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const konsumen = new Konsumen({
        email: email,
        hashPassword: hashPassword,
        nama: nama,
        isValid: 0
    });
    return konsumen.save();
};

const enter = async (email, password) => {
    const existingKonsumen = await Konsumen.findOne({ email: email });
    if (!existingKonsumen) {
        throw new Error('Konsumen tidak ditemukan');
    }
    const validPassword = await bcrypt.compare(password, existingKonsumen.hashPassword);
    if (!validPassword) {
        throw new Error('Password salah');
    }
    const token = jwt.sign({
        _id: existingKonsumen._id,
        email: existingKonsumen.email,
        nama: existingKonsumen.nama
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { existingKonsumen, token };
};

module.exports = {
    create,
    enter
};