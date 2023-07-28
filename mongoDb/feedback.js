const mongoose = require('mongoose');

const FeedBackSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  feedback: { type: String },
  date: { type: Date, default: Date.now },
});

const NewFeedback = mongoose.model("Feedback", FeedBackSchema); // model Feedback

module.exports = NewFeedback;