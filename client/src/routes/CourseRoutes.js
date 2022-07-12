import React from "react";
import { Route, Routes } from "react-router-dom";
import Course from "../pages/Course/Course";
import CourseDetails from "../pages/Course/CourseDetails";

function CourseRoutes() {
  return (
    <Routes>
      <Route path="/courses" element={<Course />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
    </Routes>
  );
}

export default  CourseRoutes;
