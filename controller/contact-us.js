const { User } = require("../models/user");
const { Issue } = require("../models/issues");
const emailTemplate = require("../utils/emailTemplate");
const { main } = require("../utils/nodemailer");

exports.createIssue = async (req, res) => {
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        user = new User({
          name: req.body.name,
          email: req.body.email,
        });
        await user.save();
      }
      const issue = new Issue({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        topic: req.body.topic,
        message: req.body.message,
        status: "pending",
        user: user._id,
      });
  
      await issue.save();
      const html = emailTemplate(req.body.name, req.body.topic);
      main(req.body.email, "Issue you are having with To-Let Globe", html);
      return res.status(201).json({ message: "Issue created successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
        message: "Failed to submit your issue",
      });
    }
}