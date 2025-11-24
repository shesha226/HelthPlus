const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    medicine: [{
        medicine: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' },
        dosage: { type: String, required: true },
        duration: { type: String },
        quntity: { type: Number}
    }],
    note: { type: String },
    
}, { timestamps: true });
module.exports = mongoose.model('Prescription', PrescriptionSchema);
