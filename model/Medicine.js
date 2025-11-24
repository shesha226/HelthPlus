const mongoose = require('mongoose');
const MedicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    batchNumber: { type: String,  unique: true },
    ecxpiryDate: { type: Date },
    stockQuantity: { type: Number, required: true },
    price: { type: Number, required: true },
    lowStockThreshold: { type: Number, default: 10 }
}, { timestamps: true });

module.exports = mongoose.model('Medicine', MedicineSchema);