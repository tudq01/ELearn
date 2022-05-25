import React from 'react'
import { Route, Routes } from "react-router-dom";
import ToeicTest from "../pages/TOEIC/ToeicTest";
import TestList from "../pages/TestList/TestList";
import Test from "../pages/Test/Test";
function TestRoutes() {
  return (
    <Routes>
      <Route path="/testlist" element={<TestList />} />
      <Route path="/test/:testId" element={<Test />} />
      <Route path="/toeic" element={<ToeicTest />} />
    </Routes>
  );
}

export default TestRoutes