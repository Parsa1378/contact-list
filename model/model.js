const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
        maxlength: 20,
        trim: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 20
    },
    lName: {
        type: String,
        required: true,
        maxlength: 20,
        trim: true
    },
    phone: {
        type: String,
        required: true,
    },
    contacts: [{
        contact: {
            fName: {
                type: String
            },
            lName: {
                type: String
            },
            phone: {
                type: String
            }
        },
        required: false
    }],
    email: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;