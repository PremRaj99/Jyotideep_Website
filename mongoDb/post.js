const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: { type: String, required: true },
    authorName: { type: String },
    date: { type: String },
    summary: { type: String, maxLength: 200 },
    disc: { type: String },
    img: {
      type: String,
    },
  });

const NewPost = mongoose.model("Post", PostSchema); // model Post

module.exports = NewPost;