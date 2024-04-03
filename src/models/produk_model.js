const {
    Schema,
    model
} = require('mongoose');

const Produk = Schema(
    {
        nama: {
            type: String,
            required: true
        },
        deskripsi: {
            type: String,
            required: true
        },
        harga: {
            type: Number,
            required: true
        },
        bestBefore: {
            type: Date,
            required: true
        },
        gambar: {
            type: Buffer,
            required: false
        },
        kuantitas: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: props => `${props.value} bukan bilangan integer`
            },
            required: true
        },
        isValid: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: props => `${props.value} bukan bilangan integer`
            },
            required: true
        },
        restoranId: {
            type: Schema.Types.ObjectId,
            ref: 'Restoran',
            required: true
        }
    }
);

module.exports = model('Produk', Produk);