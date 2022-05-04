import { Link } from "react-router-dom";
import "./NavBar.css"
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import  {logout}  from '../actions/userAction';
const Navbar = ({user}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  const dispatch = useDispatch();


  const logoutHandler = () => {
 window.open("http://localhost:5000/auth/logout", "_self");
 dispatch(logout());
  };

  return (
    <>
    <nav className="nav-bar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          TOEIC
            <i class="fa fa-code" aria-hidden="true"></i>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <Link

                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link

                to="/toeic"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Course
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/testlist"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                TestList
              </Link>
            </li>
            {user ? (

              <li className="nav-item" >
                <Link
                  to='/'
                  activeClassName="active"
                  className="nav-links"
                  onClick={logoutHandler}
                >
                 <img id='userPic'
                    src={user.photo}
                 
                    className="avatar"/>{user.name} 
                  <span id="logout">Logout</span>
                </Link>
            
              </li>
            ) : (
              <li className="nav-item" id="login">
                <Link to="login"

                  className="nav-links"
                  onClick={handleClick}>
                  Login
                </Link>
              </li>
            )}
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars" }></i>
        </div>
      </div>
    </nav>
    </>


  );
};

export default Navbar;
/*  


                    const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
                />  */