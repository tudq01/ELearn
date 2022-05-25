const mongoose = require("mongoose");



const CommentSchema = new mongoose.Schema({
  username: String,
  commentText: String,

  childComments: Array,
  createdAt: {
    type: Date,
    required: true,
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
});

module.exports = Comment = mongoose.model("Comment", CommentSchema);
