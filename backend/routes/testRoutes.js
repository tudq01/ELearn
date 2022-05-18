const express = require('express')
const router = express.Router()
const TestCtrl = require('../controllers/testController')

const auth = require("../middleware/authMiddleware");

//router.get('/toeic',auth.protect,TestCtrl.getToeicInfo);  // for protected routes
router.get('/ielts', TestCtrl.getIeltsInfo);
router.get("/toeic",  TestCtrl.getToeicInfo);
router.get("/", TestCtrl.getAllTest);
router.get("/:resultId", TestCtrl.getTestByResult);  //get Test by resultid
module.exports = router