const asyncHandler = require('express-async-handler');
const Test = require('../models/testModel');
const mongoose = require("mongoose");

const TestResult = require("../models/resultModel");
// @desc    Fetch all toeic test
// @route   GET /api/tests/toeic
// @access  Public

exports.getToeicInfo = asyncHandler(async (req, res) => {
    const filter = { "tag": { "$regex": "ETS TOEIC", "$options": "i" } };
    const test = await Test.find(filter);
    console.log(test);
    if (test) {
        res.json(test);
       
    } else {
        res.status(404).json({message:"Test not found"});
        throw new Error('Test not found');
    }
})


// @desc    Fetch all ielts test
// @route   GET /api/tests/ielts
// @access  Public
exports.getIeltsInfo = asyncHandler(async (req, res) => {
    const filter = { "tag": { "$regex": "Cam IELTS ", "$options": "i" } };

    const test = await Test.find(filter);
    console.log(test);
    if (test) {
        res.json(test);

    } else {
        res.status(404).json({ message: "Test not found" });
        throw new Error('Test not found');
    }
})


// @desc    Fetch all test
// @route   GET /api/tests/
// @access  Public
exports.getAllTest = asyncHandler(async (req, res) => {

  const test = await Test.find();
  console.log(test);
  if (test) {
    res.json(test);
  } else {
    res.status(404).json({ message: "Test not found" });
    throw new Error("Test not found");
  }
});



exports.getTestByResult = asyncHandler(async (req, res) => {
  const resultId = mongoose.Types.ObjectId(req.params.resultId);
  const test = await TestResult.aggregate([
    {
      $match: {
        _id: resultId,
      },
    },
    {
      $project: {
        test: 1,
      },
    },
    {
      $lookup: {
        from: "tests",
        localField: "test",
        foreignField: "_id",
        as: "result",
      },
    },
    {
      $unwind: {
        path: "$result",
      },
    },
    {
      $project: {
        result: {
          question: 0,
        },
      },
    },
  ]);
  
  if (test) {
    res.json(test);
  } else {
    res.status(404).json({ message: "Test not found" });
    throw new Error("Test not found");
  }
});