const {
    Schema,
    model
} = require('mongoose');

const Admin = Schema(
    {
        email: {
            type: String,
            required: true
        },
        hashPassword: {
            type: String,
            required: true
        },
        nama: {
            type: String,
            required: true
        }
    }
);

module.exports = model('Admin', Admin);