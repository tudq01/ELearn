
const asyncHandler = require("express-async-handler");
const express = require("express");
const Comment = require("../models/commentModel");
const mongoose = require('mongoose')

exports.getAllComments = asyncHandler(async (req, res) => {
 
  const comments = await Comment.find({
    'testId': mongoose.Types.ObjectId(req.query.testId),
  });
  
  if (comments) {
    res.json(arrayToObject(comments,'_id'));
  } else {
    res.status(404).json({ message: "Test not found" });
    throw new Error("Test not found");
  }
});


exports.saveComment = asyncHandler(async (req, res) => {
    const  {testId,childComments,parentNodeId,isRootNode,commentText,userId}    =req.body
  
    const comment = await Comment.create({
      testId,
      childComments,
      parentNodeId,
      isRootNode,
      commentText,
      userId
    });
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ message: "Test not found" });
    throw new Error("Test not found");
  }
});


const arrayToObject = (arr, key) => {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
};