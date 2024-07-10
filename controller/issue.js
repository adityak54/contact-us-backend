const { Issue } = require("../models/issues");
const emailTemplate = require("../utils/emailTemplate");
const { main } = require("../utils/nodemailer");

exports.getUnresolvedIssues = async (req, res) => {
  try {
    const pendingIssues = await Issue.find({ status: "pending" });
    res.status(200).send(pendingIssues);
  } catch (e) {
    console.log("Something went wrong", error);
    res.status(500).send("Internal server error");
  }
};
exports.getResolvedIssues = async (req, res) => {
  try {
    const resolvedIssues = await Issue.find({ status: "resolved" });
    res.status(200).send(resolvedIssues);
  } catch (e) {
    console.log("Something went wrong", error);
    res.status(500).send("Internal server error");
  }
};

exports.updateIssueStatus = async (req, res) => {
  const { id, status } = req.body;
  try {
    // Validate status
    if (!["pending", "resolved"].includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    // Find and update the issue
    const result = await Issue.updateOne(
      { _id: id },
      { $set: { status: status } }
    );

    // Check if the update was successful
    if (result.nModified === 0) {
      return res
        .status(404)
        .json({ error: "Issue not found or status unchanged" });
    }

    // send email if issue has been resolved
    const issue = await Issue.findById(id);
    if (status == "resolved") {
      const html = emailTemplate(issue.name, issue.topic, issue.status);
      main(issue.email, "Issue Resolved!", html);
      console.log("Resolved email sent");
    }
    res.status(200).json({ message: "Status updated successfully" });
  } catch (error) {
    console.error("Error updating issue status:", error);
    res.status(500).json({ error: "Failed to update issue status" });
  }
};
