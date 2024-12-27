
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
      message: 'invalid credentials ',
    });

  }
}


exports.changePasswordController = async (req, res, next) => {
  try {
    let oldPassword = data.oldPassword;
    let newPassword = data.newPassword;

    let data = req.body;
    let userId = data._id;
    console.log(userId);
    let result = await Webuser.findById(userId);
    if (!result) {
      throw new Error(`User not found`)
    }

    let isValidPassword = await bcrypt.compare(oldPassword, user.password);


    if (isValidPassword) {
      let hashedPassword = await bcrypt.hash(newPassword, 10);

    }

    let newHashedPassword = await Webuser.findByIdAndUpdate(userId, { password: newHashedPassword }, { new: true })

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
      newHashedPassword: newHashedPassword
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

}



exports.forgotPasswordController = async (req, res, next) => {
  try {
    let data = req.body;
    let email = data.email;
    let user = await Webuser.findOne({ email: email });
    if (user) {
      let infoObj = {
        id: user._id,
      }
      expiryInfo = {
        expiresIn: "1d",
      };

      let token = await jwt.sign(infoObj, secretKey, expiryInfo);

      await sendEmail({
        to: data.email,
        subject: "Password Reset",
        html: `<h1>Click on the following link to reset your password</h1>
        <a href="http://localhost:9000/user/forgot-passowrd?token=${token}">http://localhost:9000/user/forgot-password?token=${token}</a>`,
      });

      res.status(200).json({
        success: true,
        message: "Reset password mail sent successfully",
        data: user,
      });
    }


  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Error sending email',
    })

  }
}

exports.resetPasswordController = async (req, res, next) => {
  try {

    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let infoObj = await jwt.verify(token, secretKey);
    let userId = infoObj.id;

    let { newPassword } = req.body;
    let hashedPassword = await bcrypt.hash(newPassword, 10);
    let result = await Webuser.findByIdAndUpdate(userId, { password: hashedPassword, }, { new: true });
    res.status(200).json({
      success: true,
      message: "Password reset successfully",
      data: result,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
}