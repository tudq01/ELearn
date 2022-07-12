import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Toeic.css";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TokenService from "../../utils/tokenService";
import { Tabs, Tab } from "react-bootstrap";
function ToeicTest() {
  // component rerender by the  time
  const location = useLocation();
  const state = useRef(location.state);
  

  /*   test data  table  time part question */
  const [value, setValue] = useState(0);
  /* navigate things */
  const history = useNavigate();
  //  time and minute countdown
  const [seconds, setSecond] = useState(0);
  const [minutes, setMinute] = useState(state.current.time);
  const keyAnswer = useRef([]);
  const lists = useRef([]);

  useEffect(() => {
    var number = 0;
    state.current.parts.forEach((value, index) => {
      if (index === 0) {
        lists.current.push(takeSpan(1, value.numberQuestion));
      } else {
        number =
          lists.current[index - 1][lists.current[index - 1].length - 1].props
            .children + value.numberQuestion;
        console.log(number);
        lists.current.push(takeSpan(number - value.numberQuestion + 1, number));
      }
    });

    console.log(state.current.parts);
  }, [state]);

  // update time and minute
  useEffect(() => {
    const time = setTimeout(() => {
      if (minutes === 0 && seconds === 0) {
        clearTimeout(time);
        handleSubmit();
      }

      if (seconds === 0) {
        setSecond(59);
        setMinute(minutes - 1);
      } else setSecond(seconds - 1);
    }, 1000);
  }, [seconds, state]);

  // get answer key
  useEffect(() => {
    for (let i = 0; i < state.current.questions.length; i++) {
      const part = state.current.questions[i]; // this an array
      part.forEach((element) => {
        if (element.types === "normal") {
          keyAnswer.current.push(element.answer);
        } else {
          const ans = element.questions;
          ans.forEach((ele) => {
            keyAnswer.current.push(ele.answer);
          });
        }
      });
    }
  }, [state]);

  // update ui in question answer box
  useEffect(() => {
    if (value !== 0) {
      const s = "1".concat(value);
      var element = document.getElementById(s);

      element.className = "finish";
      console.log(s);
    }
  }, [value]);

  const handleExit = () => {
    history("/");
  };

  const handleSubmit = useCallback(() => {
    const userChoice = [];
    for (let i = 1; i <= 200; i++) {
      var s = document.querySelector(
        'input[name="'.concat(i).concat('"]:checked')
      );
      if (s) {
        userChoice.push(s.value[0]);
      } else userChoice.push("");
    }

    const key = getKeyArray(userChoice, keyAnswer.current);
    axios
      .post("http://localhost:5000/api/results/" + state.current._id, {
        user: TokenService.getuserInfo()._id,
        answer: userChoice,
        time: getFinishTime(minutes, seconds, state.current.time),
        correct: key,
      })
      .then(
        (response) => {
          console.log(response);
          history(`/result/${response.data.result._id}`, {
            state: { resultId: response.data.result._id },
          }); //pass resultId to result page
        },
        (error) => {
          console.log(error);
        }
      );

    const time = getFinishTime(minutes, seconds, state.current.time);
    console.log(time);
  },[state]);
   if(lists.current.length!=7){
    return <h1>Loading ...</h1>
   }
  return (
    <section id="toeic-test">
      <div className="time-bar">
        <h1>
          {state.current.name} Test {state.current.test}
        </h1>
        <h3>Bo de thi: {state.current.name}</h3>
        <button onClick={handleExit}>Thoat</button>
      </div>

      <div className="container">
        <div className="question-context">
          <audio controls>
            <source
              src={state.current.audio}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>

          {state.current.questions.map((item) =>
            item.map((ques) => (
              <>
                {ques.types === "group" ? (
                  <>
                    <div id="question-wrapper">
                       
                      <p>{ques.content}</p>
                      <p>
                        {ques.question < 100 ? (
                          <p></p>
                        ) : (
                          <img src={ques.upload} />
                        )}
                      </p>
                      {ques.questions.map((q) => (
                        <>
                          <div id={"section".concat(q.question)}>
                            <p>
                              <span id="light">{q.question}</span>{" "}
                              {q.content && <em>{q.content}</em>}
                              <p> {q.answer}</p>
                            </p>

                            {q.option.map((op) => (
                              <>
                                <input
                                  type="radio"
                                  id={op.concat(ques.upload).concat(q.question)}
                                  value={op} //option
                                  name={q.question}
                                  onClick={(e) => {
                                    setValue(e.target.name);
                                  }}
                                />
                                <span>
                                  <label
                                    htmlFor={op
                                      .concat(ques.upload)
                                      .concat(q.question)}
                                  >
                                    {" "}
                                    {op}{" "}
                                  </label>
                                </span>
                                <br></br>
                              </>
                            ))}
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div id="question-wrapper">
                      <div id={"section".concat(ques.question)}>
                        {ques.upload && <img src={ques.upload} />}
                        <br></br>
                        <span id="light">{ques.question}</span>{" "}
                        <p> {ques.answer}</p>
                        <em>{ques.content}</em>
                        
                        <br></br>
                        <p>
                          {Array.from(ques.options).map((opt) => (
                            <>
                              <input
                                className="selection"
                                type="radio"
                                id={opt
                                  .concat(ques.upload)
                                  .concat(ques.question)}
                                //option
                                name={ques.question}
                                value={opt}
                                onClick={(e) => {
                                  setValue(e.target.name);
                                }}
                              />
                              <span>
                                <label
                                  htmlFor={opt
                                    .concat(ques.upload)
                                    .concat(ques.question)}
                                >
                                  {" "}
                                  {opt}{" "}
                                </label>
                              </span>
                              <br></br>
                            </>
                          ))}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </>
            ))
          )}
        </div>

        <div className="question-bar">
          <div className="time">
            <h2>Thoi gian con lai</h2>
            <h2>
              {minutes < 10 ? "0" + minutes : minutes} :{" "}
              {seconds < 10 ? "0" + seconds : seconds}
            </h2>

            {state.current.parts.map((part, index) => (
              <>
                <div className="part">
                  <h2>Part {part.part}</h2>
                  <div id="question-wrap">{lists.current[index]}</div>
                </div>
              </>
            ))}
          </div>

          <button id="turn-in" type="submit" onClick={handleSubmit}>
            Nop bai{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

function takeSpan(i, j) {
  const list = [];
  for (var s = i; s <= j; s++) {
    const text = "#section".concat(s);

    const id = "1".concat(s);
    list.push(
      <a className="not" id={id} href={text} value={s}>
        {s}
      </a>
    );
  }
  return list;
}

function getKeyArray(userChoice, answerKey) {
  const correct = [];
  for (let i = 0; i < answerKey.length; i++) {
    if (answerKey[i] === userChoice[i]) {
      correct.push(1);
    } else if (userChoice[i] === "") {
      correct.push(-1);
    } else correct.push(0);
  }
  return correct;
}

function getFinishTime(minutes, seconds, testTime) {
  if (seconds === 0) {
    return testTime - minutes + ":00";
  } else {
    return testTime - 1 - minutes + ":" + (60 - seconds);
  }
}

export default ToeicTest;
