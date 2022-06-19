import React from "react";

import "./TestList.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TestTable from "../../components/TestList/TestTable";
import SearchBar from "../../components/TestList/SearchBar";
import TokenService from "../../service/tokenService";
import { useEffect } from "react";
function TestList() {
  //serachBar

  const [test, setTest] = useState([]); // pass the data getfrom API
  const [filterText, setFilterText] = useState("");
  const history = useNavigate();
  //handle user input
  const handleFilterText = (e) => {};
  // take all Test
   useEffect(()=>{
    if(!TokenService.getuserInfo()){
      alert("Login first");
    }
   },[TokenService.getuserInfo()]);
  //filter test by button
   if(!TokenService.getuserInfo()){
    history("/login");
   }
  return (
    <section>
      <div className="container">
        <SearchBar
          setTest={setTest}
          tests={test}
          filterText={filterText}
          onTextChange={handleFilterText}
        ></SearchBar>
        <div className="user" id="card">
          <img
            src={TokenService.getuserInfo() && TokenService.getuserInfo().photo}
            className="avatar"
          />
          <p>{TokenService.getuserInfo() && TokenService.getuserInfo().name}</p>
          <hr></hr>
          <Link to="/profile">
            <button id="button">Xem thong ke ket qua</button>
          </Link>
        </div>
      </div>
      <div className="search-result">
        <div className="blog-card">
          <div className="blog-wrap">
            <TestTable tests={test}></TestTable>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestList;
