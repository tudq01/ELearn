const express = require("express");
const router = express.Router();
const CommentCtrl = require("../controllers/commentController");

router.get("/:testId", CommentCtrl.getAllComments);

module.exports = router;
