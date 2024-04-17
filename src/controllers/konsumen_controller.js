const konsumenService = require('../services/konsumen_service');

const register = async (req, res) => {
    try {
        const {
            email,
            password,
            nama
        } = req.body;
        const konsumen = await konsumenService.create(email, password, nama);
        res.status(201).json({
            message: 'Registrasi berhasil',
            data: konsumen
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
            konsumen,
            token
        } = await konsumenService.enter(email, password);
        res.status(200).json({
            message: 'Login berhasil',
            data: {
                konsumen,
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
    return res.status(200).json(req.konsumen);
};

module.exports = {
    register,
    login,
    me
};
