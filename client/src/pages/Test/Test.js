import React from "react";
import "./Test.css";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import axios from "axios";


import CommentCard from "../../components/comment/CommentCard";

function Test() {
  const location = useLocation();
  const state = location.state; /*   test data  table     */
  console.log(state.audio)
  const history = useNavigate();

  const handleTest = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/questions/".concat(state._id)
    );
    state.questions = data.answer;
    state.parts = data.array;
    
    
    history("/toeic", { state: state });
  };

  return (
    <>
      <section>
        <div className="test">
          <div className="test-info">
            <h1>
              {state.name} Test {state.test}
            </h1>
            <div class="btn-group">
              <button id="group">Thong tin de thi</button>
              <button id="group">Dap an/Transcript</button>
            </div>
            <p>
              Thoi gian lam bai: {state.time} phut | {state.part} phan thi |{" "}
              {state.numberQuestion} cau hoi
            </p>
            <div></div>

            <div class="alert alert-warning" role="alert" id="alert">
              Sẵn sàng để bắt đầu làm full test? Để đạt được kết quả tốt nhất,
              bạn cần dành ra {state.time} phút cho bài test này.
            </div>

            <button
              type="button"
              class="btn btn-primary"
              id="button-start"
              onClick={handleTest}
            >
              Bat dau lam bai thi
            </button>
          </div>

          <CommentCard id={state._id} />
        </div>
      </section>
    </>
  );
}
// comment card   testId
export default Test;
