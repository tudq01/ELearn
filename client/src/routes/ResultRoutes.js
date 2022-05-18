import React from 'react'
import { Route, Routes } from "react-router-dom";
import TestResult from "../pages/Result/TestResult";
function ResultRoutes() {
  return (
    <Routes>
      <Route path="/result" element={<TestResult />} />
    </Routes>
  );
}

export default ResultRoutes