const express = require('express');
const { createWebUserController, verifyEmail, loginWebUserController } = require('../controller/webuser');


const router = express.Router()
router.route("/register").post(createWebUserController)
router.route("/verify-email").post(verifyEmail)
router.route("/login").post(loginWebUserController)

module.exports = router;