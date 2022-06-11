import React from 'react'
import { Route, Routes } from "react-router-dom";
import DetailResult from '../pages/TestResult/Detail/DetailResult';
import TestResult from "../pages/TestResult/TestResult";
function ResultRoutes() {
  return (
    <Routes>
      <Route path="/result/:resultId" element={<TestResult />} />
      <Route path="/result/details/:resultId" element={<DetailResult />} />
    </Routes>
  );
}

export default ResultRoutes