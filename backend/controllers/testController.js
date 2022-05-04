const asyncHandler = require('express-async-handler');
const Test = require('../models/testModel');




// @desc    Fetch all test
// @route   GET /api/tests
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