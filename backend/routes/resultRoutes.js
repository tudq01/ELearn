const express = require('express')
const router = express.Router()
const ResultCtrl = require('../controllers/resultController')



router.post('/:testId/:userId', ResultCtrl.saveResult);


module.exports = router