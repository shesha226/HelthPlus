const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
    patientId: { type: String, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    contact: { type: String },
    address: { type: String },
    medicalHistory: { type: String },
    documents: [
        {
            documentName: { type: String },
            fileUrl: { type: String },
            uploadedAt: { type: Date}
        }]
    
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);