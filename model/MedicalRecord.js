const mongoose = require('mongoose');
const Patient = require('./Patient');

const MedicalRecordSchema = new mongoose.Schema({
    Patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    visitDate: { type: Date, default: Date.now },
    diagnosis: { type: String },
    testResult: [{
        testName: { type: String },
        fileUrl: { type: String },
        uploadedAt: { type: Date, default: Date.now }
    }]


}, { timestamps: true });
module.exports = mongoose.model('MedicalRecord', MedicalRecordSchema);