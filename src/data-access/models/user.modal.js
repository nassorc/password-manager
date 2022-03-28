const mongoose = require('mongoose')

const validateEmail = (email) => {
    return email
}

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, trim: true, unique: true, validate: [validateEmail, 'Please fill a valid email address']},
    password: {type: String, required: true},
    passwordList: [{
        service: {type: String},
        email: {type: String},
        password: {type: String}
    }]
})

const model = mongoose.model('UserModel', UserSchema)

module.exports = model