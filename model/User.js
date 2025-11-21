const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin',  'doctor', 'nurse','receptionist','lab-technician', 'pharmacist'],
        required: true
    },
    password: { type: String, required: true },
    profileImage: { type: String },
    resetTken: { type: String },
    resetTkenExpiry: { type: Date },

    specialization: { type: String  }, 
    qualifications: { type: String  },
    yearsOfExperience: { type: Number },
    
    availability: [
        {
            day: { type: String },
            startTime: { type: String },
            endTime: { type: String }
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
 
