const mongoose = require('mongoose');
const Patient = require('./Patient');
const AddmissionSchema = new mongoose.Schema({
    Patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    bedNumber: { type: String, required: true },
    ward: { type: String, required: true },
    admissionDate: { type: Date, default: Date.now },
    dischargeDate: { type: Date },
    progressNotes: [{
        note: { type: String },
        date: { type: Date, default: Date.now }
    }]
}, { timestamps: true });
module.exports = mongoose.model('Admission', AddmissionSchema); 
