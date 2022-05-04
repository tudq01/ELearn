const express = require('express')
const router = express.Router()
const TestCtrl = require('../controllers/testController')

const auth = require("../middleware/authMiddleware");

router.get('/toeic',auth.protect,TestCtrl.getToeicInfo);
router.get('/ielts', TestCtrl.getIeltsInfo);


module.exports = router