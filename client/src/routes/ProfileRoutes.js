import React from 'react'
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
function ProfileRoutes() {
  return (
    
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    
  );
}

export default ProfileRoutes