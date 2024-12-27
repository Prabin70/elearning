const express = require('express');
const { createWebUserController, verifyEmail, loginWebUserController, forgotPasswordController, resetPasswordController } = require('../controller/webuser');


const router = express.Router()
router.route("/register").post(createWebUserController)
router.route("/verify-email").patch(verifyEmail)
router.route("/login").post(loginWebUserController)
router.route("/change-password").patch(loginWebUserController)
router.route("/forgot-password").post(forgotPasswordController);
router.route("/reset-password").post(resetPasswordController);

module.exports = router;