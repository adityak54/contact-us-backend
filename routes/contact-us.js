const express = require("express");
const { createIssue } = require("../controller/contact-us");
const router = express.Router();


router.post("/v1",createIssue);

module.exports = router;