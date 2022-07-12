import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import TokenService from '../../utils/tokenService';
import { useDispatch, useSelector } from "react-redux";
import "./Landing.css"
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
    <div className='Hero'>
          <h3 className='Heading'>Welcome to TOEIC<i class="fa fa-code" aria-hidden="true"></i></h3>
          <p className='TextStyled'>
          TOEIC<i class="fa fa-code" aria-hidden="true"></i> is designed to help you practice and improve your TOEIC skills to well prepare for the exam. The website assists you in improving Online TOEIC Test skills in particular and English skills in general through a variety of grammar and vocabulary exercises. Besides, the website provides various functions such as reviewing the test has done, some tips and tricks, and flashcard to learn vocabolary.
          </p>
    </div> 
  );
}

export default LandingPage