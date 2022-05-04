import React from 'react'
import "./CardBlog.css"
import { Link } from "react-router-dom";
function CardBlog(props) {

  

  const handleClick = () => {
    console.log("hello");
  }
  return (
    <>
      <div className="blog-item">
        <h1>{props.name}  TEST {props.testNumber}</h1>
        <span>{props.time} phut  </span> <br></br>
        <span>{props.part} phan thi |  {props.numberQuestion} cau hoi  </span>
        <Link to=
        
        "/test"
            state={props}
          
        
          
        >
          <button onClick={handleClick}>Xem ket qua</button> 
        </Link>

      </div>
    </>
  )
}

export default CardBlog