

const nodemailer = require("nodemailer");

const transportInfo = ({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "xthaprabin125@gmail.com",
        pass: "fukf tsiw mesw xelp",
    },
});

exports.sendEmail = async (mailInfo) => {

    try {
        let transporter = nodemailer.createTransport(transportInfo);
        let info = await transporter.sendMail(mailInfo);
    } catch (error) {
        console.error(error);
    }

}