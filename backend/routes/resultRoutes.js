const express = require('express')
const router = express.Router()
const ResultCtrl = require('../controllers/resultController')



router.post('/:testId/', ResultCtrl.saveResult);
router.get('/:userId/', ResultCtrl.getAllResult);  // body is userId (getAllResult test have done)

router.get("/test/:resultId", ResultCtrl.getTestResult); // query string with userId and testId

module.exports = router