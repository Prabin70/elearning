const { default: mongoose } = require("mongoose")

exports.dbConnection = () => {
    mongoose.connect("mongodb://localhost:27017/eLearn");
    console.log("Hello from database");
}