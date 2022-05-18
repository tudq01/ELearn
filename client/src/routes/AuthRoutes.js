import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import RegisterScreen from "../pages/Login/RegisterScreen";


export default function AuthRoutes() {
     const userLogin = useSelector((state) => state.userLogin);
     const { userInfo } = userLogin;
    return (
      
      <Routes>
        <Route path="/" element={<Home user={userInfo} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      
    );
};