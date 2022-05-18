import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import "./TestResult.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function TestResult(props) {

  const location = useLocation();
  const { resultId } = location.state;
  const [data,setData] = useState([])
  const history = useNavigate();
  useEffect(()=>{

      axios.get("http://localhost:5000/api/results/test/".concat(resultId)).then(
        (response) => {
          console.log(response);  
          setData(response.data.result[0]);
          
        },
        (error) => {
          console.log(error);
        }
      ); 
  },[])
   
   useEffect(()=>{
    console.log(data);
   },[data])
   


   const handleAgain = ()=>{
    axios.get("http://localhost:5000/api/test/".concat(resultId)).then(
      (response) => {
        console.log(response.data[0].result);
      history("/test", { state: response.data[0].result }); 
      },
      (error) => {
        console.log(error);
      }
    ); 
   }
  return (
    <>
      {resultId} Use this resultId to get info result
      <section id="test-result">
        <div className="content">
          <div className="head-content">
            <h1>
              {" "}
              Ket qua thi : {data.testResult&&data.testResult[0].name} Test{" "}
              {data.testResult&&data.testResult[0].test}
            </h1>
            <button> Xem dap an </button>
            <button onClick={handleAgain}> Lam lai bai thi </button>
          </div>
          <div className="result-content">
            <div className="result-item">
              <p>
                <i class="fa fa-list-alt" aria-hidden="true"></i>Ket qua lam bai{" "}
                {data.result}
              </p>
              <p>
                {" "}
                <i id="correct" class="fa fa-check" aria-hidden="true"></i>Do
                chinh xac {data.accuracy} %
              </p>
              <p>
                <i class="fas fa-clock"></i>Thoi gian lam bai {data.time}
              </p>
            </div>
            <div className="result-item">
              <i id="correct" class="fa fa-check" aria-hidden="true"></i>
              <p>Tra loi dung </p>
              <p>{data.correct}</p>
            </div>
            <div className="result-item">
              <i id="wrong" class="fa fa-times" aria-hidden="true"></i>
              <p>Tra loi sai </p>
              <p>{data.wrong}</p>
            </div>
            <div className="result-item">
              {" "}
              <i class="fa fa-minus-circle" aria-hidden="true"></i>
              <p>Bo qua </p>
              <p>{data.skip}</p>
            </div>
            <div className="result-item">
              {" "}
              <i class="fas fa-flag-checkered"></i>
              <p>Diem </p>
              <p>{data.score}</p>
            </div>
          </div>
          <div className="test-result">
            Dap An{" "}
            <span>
              <button>Xem chi tiet dap an</button>
            </span>
          </div>
        </div>
        <div className="content">
          <Comments
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"
          />
        </div>
      </section>
    </>
  );
}

export default TestResult;
