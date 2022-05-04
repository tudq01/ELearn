import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TestList from "./pages/TestList/TestList"
import Test from "./pages/Test/Test"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer"
import ToeicTest from "./pages/TOEIC/ToeicTest";
import RegisterScreen from "./pages/Login/RegisterScreen"
import { useSelector,useDispatch } from 'react-redux';
import TokenService from "./service/tokenService";
import * as types from './constant/User/userConstants'

const App = () => {
  

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 
  useEffect(()=>{
    if(TokenService.getuserInfo){
    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: TokenService.getuserInfo(),
    })
   
   
  }
  },[])
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
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
  },[]);




  return (
    <BrowserRouter>
    
        <Navbar user={userInfo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path='/register' element={<RegisterScreen/>}/>
        
        <Route path="/testlist" element={<TestList />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/toeic" element={<ToeicTest/>}/>
        </Routes>
        <Footer></Footer>
      
    </BrowserRouter>
  );
};

export default App;

/*    <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          /> */

          /*  */