const mongoose = require("mongoose");
const Schema = mongoose.Schema
const IssueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    topic: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      maxlength: 500,
    },
    status: {
      type: String,
      default: "Pending",
    },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", IssueSchema);

module.exports = { Issue };
