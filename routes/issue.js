const express = require("express");
const { getUnresolvedIssues, getResolvedIssues, updateIssueStatus } = require("../controller/issue");
const router = express.Router();


router.get("/pending/v1",getUnresolvedIssues);
router.get("/resolved/v1",getResolvedIssues);
router.patch("/update/v1", updateIssueStatus);
module.exports = router;