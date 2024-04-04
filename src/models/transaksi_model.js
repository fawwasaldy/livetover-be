const {
    Schema,
    model
} = require('mongoose');

const transaksi = Schema(
    {
        isValid: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: props => `${props.value} bukan bilangan integer`
            },
            required: true
        },
        konsumenId: {
            type: Schema.Types.ObjectId,
            ref: 'Konsumen',
            required: true
        },
        produkId: {
            type: Schema.Types.ObjectId,
            ref: 'Produk',
            required: true
        }
    }
);

module.exports = model('transaksi', transaksi);