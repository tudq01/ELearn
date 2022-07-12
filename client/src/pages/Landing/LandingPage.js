import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import TokenService from '../../service/tokenService';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
// TODO : build landing



const Nav = styled.nav`
height: 80px;
background: #3F72AF;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
    font-size: large;
`

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