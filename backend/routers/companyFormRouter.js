const express = require("express");
const { createFormController } = require("../controller/FormController");

const router = express.Router();

router.route("/sent-form").post(createFormController)

module.exports = router;