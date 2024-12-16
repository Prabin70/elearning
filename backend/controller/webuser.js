
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const Webuser = require("../model/webUserModel");
const secretKey = require("../utils/constant");
const { sendEmail } = require("../sendEmail");

exports.createWebUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);

    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashedPassword,
    };

    let result = await Webuser.create(data);

    //generate token ...
    let infoObj = {
      id: result._id,
    };

    let expiryInfo = {
      expiresIn: "1d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    //send verify message to the user in email

    await sendEmail({
      to: data.email,
      subject: "Account Registration",
      html: `<h1> Your account has been registered Successfully</h1>
        <a href="http://localhost:3000/verify?token=${token}">http://localhost:3000/verify?token=${token}</a>`,
    });

    res.json({
      success: true,
      message: "Verificaation mail sent",
      resut: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.verifyEmail = async (req, res, next) => {

  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let infoObj = await jwt.verify(token, secretKey);
    let userId = infoObj.id;

    console.log(infoObj);


    let result = await Webuser.findByIdAndUpdate(userId, { isVerifiedEmail: true, }, { new: true });

    res.status(200).json({
      success: true,
      message: "Account verified successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginWebUserController = async (req, res, next) => {
  try {

    let data = req.body;
    let email = data.email;
    let password = data.password;

    let user = await Webuser.findOne({ email });
    if (!user) {
      throw new Error(`User not found`)
    }

    if (user.isVerifiedEmail === "false") {
      throw new Error("Email is not verified")
    }


    let isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid credentials")
    }

    let infoObj = {
      id: user._id,
    };
    let expiryInfo = {
      expiresIn: "1d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);
    console.log(token);
    res.status(200).json({
      success: true,
      message: "Web user login successfully",
      data: user,
      token: token,
    });


  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
}