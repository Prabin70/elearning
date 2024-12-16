const CompanyForm = require("../model/formModel");
const { sendEmail } = require("../sendEmail");

exports.createFormController = async (req, res, next) => {
    try {
        let result = await CompanyForm.create(req.body);

        let allData = req.body;

        let email = "xthaprabin125@gmail.com";


        await sendEmail({
            from: `${allData.email}`,
            to: "xthaprabin125@gmail.com",
            subject: `New message for you from ${allData.email}`,
            html: `
            ${allData.fullName} <br/> ${allData.message}`

        });

        await sendEmail({
            from: "xthaprabin125@gmail.com",
            to: `${allData.email}`,
            subject: "Thank you for your message",
            html: `<h3>Hello ${allData.fullName} Thank you for your message</h3 >
            <p>I appreciate your with your message</p>
            <p>We will be back as soon as possible </p>
            <p>Best Regrds</p>
            <p>Prabin Shrestha</p>
            <h2 style={{"color:green"}}>skillSphare</h2>
            ${email}`


        })
        res.status(200).json({
            success: true,
            message: "Form submitted successfully",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });

    }

}

