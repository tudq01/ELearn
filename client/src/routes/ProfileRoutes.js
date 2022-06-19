import React from 'react'
import { Route, Routes } from "react-router-dom";
import FlashCard from '../pages/FlashCard/FlashCard';
import Profile from "../pages/Profile/Profile";
function ProfileRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/flashcard" element={<FlashCard />} />
    </Routes>
  );
}

export default ProfileRoutes