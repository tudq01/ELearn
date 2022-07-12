import React from 'react'
import { Route, Routes } from "react-router-dom";

const FlashCard = React.lazy(() => import("../pages/FlashCard/FlashCard"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
function ProfileRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/flashcard" element={<FlashCard />} />
    </Routes>
  );
}

export default ProfileRoutes