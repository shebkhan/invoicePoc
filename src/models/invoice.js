import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    customerName: {
        type: String,
        required: true
    }, 
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Paid', 'Pending', 'Cancelled'],
        default: 'Pending'
    }
});

const invoiceModel = mongoose.model('Invoice', invoiceSchema);

export default invoiceModel;