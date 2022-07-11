const express = require('express');
const router = express.Router();
const CourseCtrl = require('../controllers/couseController');

router.get("/", CourseCtrl.getCourses);
router.get("/:courseId", CourseCtrl.getCourseById);

router.post("/enrollment/:courseId", CourseCtrl.enrollCourse);

module.exports = router;