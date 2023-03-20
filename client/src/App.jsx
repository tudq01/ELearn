import Navbar from "./components/Navbar";
import "./app.css";

import { BrowserRouter } from "react-router-dom";
import React,{ useEffect } from "react";
import Footer from "./components/Footer/Footer"


import { useSelector,useDispatch } from 'react-redux';
import TokenService from "./utils/tokenService";
import * as types from './constant/User/userConstants'

import AuthRoutes from "./routes/AuthRoutes";
import TestRoutes from "./routes/TestRoutes";
import ProfileRoutes from "./routes/ProfileRoutes";
import ResultRoutes from "./routes/ResultRoutes";
import CourseRoutes from "./routes/CourseRoutes";
import TipsRoutes from "./routes/TipsRoutes";


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 
  useEffect(()=>{
    if(TokenService.getuserInfo()){
    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: TokenService.getuserInfo(),
    })
   
  }
  },[dispatch])
  useEffect(() => {
    const getUser = () => {
      fetch("https://elearn-pz8y.onrender.com/auth/login/success", {
        method: "GET", 
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {

          dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: resObject.user,
          })
          
          TokenService.setuserInfo(resObject.user);
          console.log(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  },[dispatch]);



  return (
    <BrowserRouter>
      <Navbar user={userInfo} />
      <React.Suspense fallback={loading}>
        <AuthRoutes />
        <CourseRoutes />
        <TestRoutes />
        <ProfileRoutes />
        <ResultRoutes />
        <TipsRoutes />
        <Footer></Footer>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;

/*    <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          /> */

          /* 
           <Routes>
        <Route path="/" element={<Home user={userInfo} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterScreen />} />

        <Route path="/testlist" element={<TestList />} />
        <Route path="/test" element={<Test />} />
        <Route path="/toeic" element={<ToeicTest />} />
        
        <Route path="/result" element={<TestResult />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
          */