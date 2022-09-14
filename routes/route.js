const express = require("express");

const router = express.Router();

const employeeData = require("./Employee");

router.use(employeeData);

module.exports = router;