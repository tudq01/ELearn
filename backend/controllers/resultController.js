const asyncHandler = require('express-async-handler');
const express = require('express')
const mongoose = require("mongoose");
const TestResult = require('../models/resultModel');


exports.saveResult = asyncHandler(async (req, res) => {
   
    const test = mongoose.Types.ObjectId(req.params.testId);
    const user = mongoose.Types.ObjectId(req.params.userId);
    const {answer,time,correct} = req.body;

    const arr=['A','B','D','Z']  // need to get array of answer
  
    var finishDate= new Date();
   /* var dd = String(finishDate.getDate()).padStart(2, '0');
    var mm = String(finishDate.getMonth() + 1).padStart(2, '0'); 
    var yyyy = finishDate.getFullYear();
    finishDate = dd + '/' + mm + '/' + yyyy;
*/   
    

     const result = await TestResult.create({
       user,test,answer,correct,finishDate,time
     });

     if (result) {
       res.status(201).json({
          result
       });
     } else {
       res.status(400).json({ message: "Fail to save" });
       throw new Error("Fail to save");
     }
});

