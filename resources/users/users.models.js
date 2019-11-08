const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'Usuario debe tener un id']
    },
    name: {
        type: String,
        required: [true, 'Usuario debe tener un name']
    },
    nickname: {
        type: String,
        maxlength: 20,
        minlength: 1,
        required: [true, 'Usuario debe tener una nickname']
    },
    email: {
        type: String,
        required: [true, 'Usuario debe tener un email']
    },
    password: {
        type: String,
        required: [true, 'Usuario debe tener un password']
    },
    cellphone: {
        type: String,
        required: [true, 'Usuario debe tener un cellphone']
    },
    validationCode: {
        type: String,
        required: [true, 'Usuario debe tener un validationCode']
    },
    validationStatus: {
        type: String,
        required: [true, 'Usuario debe tener un validationStatus']
    },
});

module.exports = mongoose.model('user', userSchema);