const { request } = require('express');
const asyncHandler = require('express-async-handler');
const Question = require('../models/questionModel');

const Test =require('../models/testModel')
const ObjectID = require('bson').ObjectID;

// @desc    Fetch all question
// @route   GET /api/questions
// @access  Public
exports.getQuestion = asyncHandler(async (req, res) => {
    const filter = {
        "_id":req.params.testId  }
  
    const test2 = await Test.aggregate([{$lookup:{
        from: 'questions',
        localField: 'question._id',
        foreignField: '_id',
        as: 'result'}
    }])
      const element = test2.find(ele=>ele._id==req.params.testId)  // filter by id
    if (element) {
        res.json(element.result.sort((a, b) => (a.question > b.question) ? 1 : -1))
        console.log(element);

    } else {
        res.status(404).json({ message: "Question not found" });
        throw new Error('Question not found');
    }
})


