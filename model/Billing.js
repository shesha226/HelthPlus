const mongoose = require('mongoose');
const Patient = require('./Patient');
const BillingSchema = new mongoose.Schema({

    Patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    type: {
        type: String,
        enum: ['inpatient', 'outpatient', 'emergency'],
        default: 'outpatient'
    },
    items: [{
        name: { type: String },
        price: { type: Number },
        totle: { type: Number },
        quantity: { type: Number }
    }],
    totalAmount: { type: Number, required: true },
    paidAmount: { type: Number, default: 0 },
    paymentStatus: {
        type: String,
        enum: ['paid', 'unpaid', 'partial'],
        default: 'unpaid'
    },
  
  
}, { timestamps: true });
module.exports = mongoose.model('Billing', BillingSchema);