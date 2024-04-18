const restoranService = require('../services/restoran_service');

const register = async (req, res) => {
    try {
        const {
            email,
            password,
            nama,
            alamat
        } = req.body;
        const restoran = await restoranService.create(email, password, nama, alamat);
        res.status(201).json({
            message: 'Registrasi berhasil',
            data: restoran
        });
        
    } catch (e) {
        res.status(501).json({
            message: "Registrasi gagal",
            data: e.message
        });
    }
};

const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        const {
            restoran,
            token
        } = await restoranService.enter(email, password);
        res.status(200).json({
            message: 'Login berhasil',
            data: {
                restoran,
                token
            }
        });
    } catch (e) {
        res.status(401).json({
            message: 'Login gagal',
            data: e.message
        });
    }
};

const me = async (req, res) => {
    return res.status(200).json(req.user);
};

module.exports = {
    register,
    login,
    me
};
