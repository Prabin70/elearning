const { default: mongoose } = require("mongoose");

const formModel = new mongoose.Schema({


    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

})

const CompanyForm = mongoose.model("CompanyFrom", formModel);

module.exports = CompanyForm;

