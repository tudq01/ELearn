import React from "react";
import { Route, Routes } from "react-router-dom";
import Course from "../pages/Course/Course";

function CourseRoutes() {
  return (
    <Routes>
      <Route path="/courses" element={<Course />} />
      
    </Routes>
  );
}

export default  CourseRoutes;
