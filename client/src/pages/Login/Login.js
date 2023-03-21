import Google from "../../img/google.png";
import Facebook from "../../img/facebook.png";
import Github from "../../img/github.png";
import "./Login.css"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userAction';
import {  Button, Row, Col } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { Loader, Message} from "../../components/shared";
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;


  
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo)
      console.log("Success")
      history("/home")
    }
  }, [history,userInfo]);
 


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  

  const google = () => {
    window.open("https://elearn-pz8y.onrender.com/auth/google", "_self");
  };  

  const github = () => {
    window.open("https://elearn-pz8y.onrender.com/auth/github", "_self");
  };

  const facebook = () => {
    window.open("https://elearn-pz8y.onrender.com/auth/facebook", "_self");
  };

  return (
    <section>
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <div className="left">
         
            Sign In
              {error && <Message variant='danger'>{error}</Message>}
              {loading && <Loader />}
              <div className="form">
            <form onSubmit={submitHandler}>
              
               
                <input
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              

                
                <input
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              

              <Button id='signIn' type='py-3' variant='primary'>
                Sign In
              </Button>

              <Row className='py-3'>
                <Col>
                  New Customer ? {' '}
                  <Link to="/register">
                    Register
                  </Link>
                </Col>
              </Row>
            </form>
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <div className="loginButton google" onClick={google}>
              <img src={Google} alt="" className="icon" />
              Google
            </div>
            <div className="loginButton facebook" onClick={facebook}>
              <img src={Facebook} alt="" className="icon" />
              Facebook
            </div>
            <div className="loginButton github" onClick={github}>
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Login;

/*  
              
              
              
              
              
              */