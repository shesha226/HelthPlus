const mongoose = require('mongoose');
const LabTestSchema = new mongoose.Schema({
    Patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    testName: { type: String, required: true },
    testDate: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['Pending', 'in-sample-collection', 'Processed', 'completed', 'canceled'],
        default: 'Pending'
    },
    assignedLabTechnician: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    testResult: { type: String },
    updatedDate: { type: Date, default: Date.now }
},{ timestamps: true});

module.exports = mongoose.model('LabTest', LabTestSchema);
