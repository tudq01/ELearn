import React, { useEffect, useState } from "react";
import "./Toeic.css";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ToeicTest() {
  const location = useLocation();
  const state = location.state; /*   test data  table  time part question */
  const [value, setValue] = useState(0);
  
  /* navigate things */
  const history = useNavigate();
  const questionList = useSelector((state) => state.questionList);
  const { questions, loadding, error } = questionList;
   
  var list1,
    list2,
    list3,
    list4,
    list5,
    list6,
    list7 = [];
  list1 = takeSpan(1, 6);
  list2 = takeSpan(7, 31);
  list3 = takeSpan(32, 70);
  list4 = takeSpan(71, 100);
  list5 = takeSpan(101, 130);
  list6 = takeSpan(131, 146);
  list7 = takeSpan(147, 200);

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

  const handleSubmit = () => {
    const result = [];
    for (let i = 1; i < 200; i++) {
      var s = document.querySelector(
        'input[name="'.concat(i).concat('"]:checked')
      );
      if (s) {
        result.push(s.value);
      } else result.push("");
    }
    console.log(result);
    console.log(minutes);
    console.log(seconds);
  };

  const [seconds, setSecond] = useState(0);
  const [minutes, setMinute] = useState(state.time);
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
  }, [seconds]);

  return (
    <section id="toeic-test">
      <div className="time-bar">
        <h1>
          {state.name} Test {state.testNumber}
        </h1>
        <h3>Bo de thi: {state.name}</h3>
        <button onClick={handleExit}>Thoat</button>
      </div>

      <div className="container">
        <div className="question-context">
          <div className="audio">
            <audio controls>
              <source
                src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
          <form>
            {questions.map((ques) => (
              <>
                {ques.types === "group" ? (
                  <>
                    <div className={ques.question}>
                      <p>{ques.content}</p>
                      <p>
                        <img src={ques.upload} />
                      </p>
                   

                      {ques.questions.map((q) => (
                        <>
                          <p><span id='light'>{q.question}</span> {q.content && <em>{q.content}</em> }</p>
                          
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
                        </>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={ques.question}>
                      <p>
                        <img src={ques.upload} />
                      </p>
                        <p><span id='light'>{ques.question}</span> <em>{ques.content}</em></p> 
                      <br></br>
                      <p>
                        {Array.from(ques.options).map((opt) => (
                          <>
                            <input className="selection"
                              type="radio"
                              id={opt.concat(ques.upload).concat(ques.question)}
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
                  </>
                )}
              </>
            ))}
          </form>
        </div>

        <div className="question-bar">
          <div className="time">
            <h2>Thoi gian con lai</h2>
            <h2>
              {minutes < 10 ? "0" + minutes : minutes} :{" "}
              {seconds < 10 ? "0" + seconds : seconds}
            </h2>
            <div className="part">
              <h2>Part 1</h2>
              <div id="question-wrap">{list1}</div>
            </div>
            <div className="part">
              <h2>Part 2</h2>
              <div id="question-wrap">{list2}</div>
            </div>
            <div className="part">
              <h2>Part 3</h2>
              <div id="question-wrap">{list3}</div>
            </div>
            <div className="part">
              <h2>Part 4</h2>
              <div id="question-wrap">{list4}</div>
            </div>
            <div className="part">
              <h2>Part 5</h2>
              <div id="question-wrap">{list5}</div>
            </div>
            <div className="part">
              <h2>Part 6</h2>
              <div id="question-wrap">{list6}</div>
            </div>
            <div className="part">
              <h2>Part 7</h2>
              <div id="question-wrap">{list7}</div>
            </div>
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
    const text = "#".concat(s).concat(1);

    const id = "1".concat(s);
    list.push(
      <a className="not" id={id}>
        {s}
      </a>
    );
  }
  return list;
}
export default ToeicTest;

/*   {ques.types === "normal" && 
                
             
             
                <>
                <p>
                  <img src={ques.upload} />
                </p>
                <p>{ques.question}</p> <em>{ques.content}</em>
                <br></br>
                {ques.options.map((option) => (
                  <>
                    <input
                      type="radio"
                      id={option.concat(ques.upload).concat(ques.question)}
                      value={ques.question}  //option
                      name={ques.question}
                      onClick={(e) => {
                        setValue(e.target.value);
                      }}
                    />
                    <span>
                      <label
                        htmlFor  ={option.concat(ques.upload).concat(ques.question)}  
                      >
                        {" "}
                        {option}{" "}
                      </label>
                    </span>
                    <br></br>
                  </>
                ))}
              </>
              
              }*/
