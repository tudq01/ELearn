const { request } = require("express");
const asyncHandler = require("express-async-handler");
const Post = require("../models/postsModel");
const mongoose = require('mongoose')

exports.createPost = asyncHandler(async (req, res) => {
    const newPost = new Post(req.body);
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  });

  exports.getPosts = asyncHandler(async (req, res) => {
    try {
      const posts = await Post.find().exec();
      //res.status(200).json(posts);
      res.send(posts);
    } catch (error) {
        console.log("Error")
      res.status(404).json({
        message: error.message,
      });
    }
  }
  );
  
  exports.getSinglePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.postId);

    if (post){
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: "Course not found" });
        throw new Error("Course not found");
    }
  });
  