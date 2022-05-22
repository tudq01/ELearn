const express = require("express");
const router = express.Router();
const CommentCtrl = require("../controllers/commentController");

router.get("/", CommentCtrl.getAllComments);
router.post("/",CommentCtrl.saveComment)
module.exports = router;
