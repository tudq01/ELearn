import React from "react";
import "./CardBlog.css";
import { Link } from "react-router-dom";
import TokenService from "../../utils/tokenService";
function CardBlog(props) {
  const handleClick = () => {
    if (!TokenService.getuserInfo()) {
      alert("You need to Login");
    }
  };
  return (
    <>
      <div className="blog-item">
        <h1>
          {props.name} TEST {props.test}
        </h1>
        <span>{props.time} phut </span> <br></br>
        <span>
          {props.part} phan thi | {props.numberQuestion} cau hoi{" "}
        </span>
        {TokenService.getuserInfo() ? (
          <Link to={`/test/${props._id}`} state={props}>
            <button onClick={handleClick}>Xem ket qua</button>
          </Link>
        ) : (
          <Link to={`/login`} state={props}>
            <button onClick={handleClick}>Xem ket qua</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default CardBlog;
