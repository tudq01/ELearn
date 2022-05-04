const express = require('express')
const router = express.Router()
const QuestCtrl = require('../controllers/questionController')


router.get('/:testId', QuestCtrl.getQuestion);

module.exports = router