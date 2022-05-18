
const asyncHandler = require("express-async-handler");
const express = require("express");
const Comment = require("../models/commentModel");


exports.getAllComments = asyncHandler(async (req, res) => {
 
  const comments = await Comment.find({
    'testId': mongoose.Types.ObjectId(req.params.testId),
  });
  
  if (comments) {
    res.json(comments);
  } else {
    res.status(404).json({ message: "Test not found" });
    throw new Error("Test not found");
  }
});
