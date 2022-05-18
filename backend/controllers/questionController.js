const { request } = require("express");
const asyncHandler = require("express-async-handler");
const Question = require("../models/questionModel");

const Test = require("../models/testModel");

const mongoose = require("mongoose");
// @desc    Fetch all question
// @route   GET /api/questions
// @access  Public

exports.getQuestion = asyncHandler(async (req, res) => {
  const test2 = await Test.aggregate([
  {
    '$match': {
      '_id': mongoose.Types.ObjectId(req.params.testId)
    }
  }, {
    '$lookup': {
      'from': 'questions', 
      'localField': 'question._id', 
      'foreignField': '_id', 
      'as': 'result'
    }
  }
]);

  if (test2) {

    const s = test2[0].result.sort((a, b) =>
      a.question > b.question ? 1 : -1
    );
    
    const grouped = groupBy(s, (item) => item.part);
    const z = new Map([...grouped.entries()].sort());

    const answer = [...z.values()];
    console.log(answer);

    const arr = [];
    for (const key of z.keys()) {
      arr.push(key);
    }

    const array = [];

    for (let i = 0; i < answer.length; i++) {
      var sum = 0;

      const part = answer[i]; // this an array
      part.forEach((element) => {
        if (element.types === "normal") {
          sum++;
        } else sum += element.questions.length;
      });
      array.push({ part: arr[i], numberQuestion: sum });
    }

    res.json({ answer, array });
  } else {
    res.status(404).json({ message: "Question not found" });
    throw new Error("Question not found");
  }
});



function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
