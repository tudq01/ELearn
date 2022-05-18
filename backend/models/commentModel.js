const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  parentNodeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  isRootNode: Boolean,
  commentText: String,

  childComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
});

module.exports = Comment = mongoose.model("Comment", CommentSchema);
