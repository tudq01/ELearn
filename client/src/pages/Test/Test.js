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
      "https://elearn-pz8y.onrender.com/api/questions/".concat(state._id)
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
              <button id="group">Test Info</button>
              <button id="group">Transcript</button>
            </div>
            <p>
              Time: {state.time} minutes | {state.part} parts |{" "}
              {state.numberQuestion} questions
            </p>
            <div></div>

            <div class="alert alert-warning" role="alert" id="alert">
              Are you ready to do full test? You should spend {state.time} minutes doing this test.
            </div>

            <button
              type="button"
              class="btn btn-primary"
              id="button-start"
              onClick={handleTest}
            >
              Take Test
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
