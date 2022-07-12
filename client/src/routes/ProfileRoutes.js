import React from 'react'
import { Route, Routes } from "react-router-dom";
import Flashcard from '../pages/Flashcard/Flashcard';
const FlashCard = React.lazy(() => import("../pages/Flashcard/Flashcard"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
function ProfileRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/flashcard" element={<Flashcard />} />
    </Routes>
  );
}

export default ProfileRoutes