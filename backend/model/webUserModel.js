const { default: mongoose } = require("mongoose");

const webUserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },

    isVerifiedEmail: {
        type: Boolean,
        default: false
    }

})

const Webuser = mongoose.model('Webuser', webUserModel);

module.exports = Webuser;