import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import TokenService from '../../service/tokenService';
import { useDispatch, useSelector } from "react-redux";
function LandingPage() {
    const history = useNavigate();
     const userLogin = useSelector((state) => state.userLogin);
     const { userInfo } = userLogin;
   useEffect(()=>{
    if(TokenService.getuserInfo()){
        history("/home")
    }
   },[userInfo])

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage