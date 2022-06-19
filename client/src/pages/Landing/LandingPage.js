import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import TokenService from '../../service/tokenService';
import { useDispatch, useSelector } from "react-redux";
// TODO : build landing
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
    <div>
      <h1>LandingPage</h1>
      <p class="overline">The quick brown fox ...</p>
    </div>
  );
}

export default LandingPage