const {
    Schema,
    model
} = require('mongoose');

const Konsumen = Schema(
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
        },
        isValid: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: props => `${props.value} bukan bilangan integer`
            },
            required: true,
        }
    }
);

module.exports = model('Konsumen', Konsumen);