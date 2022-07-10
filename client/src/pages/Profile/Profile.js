import React, { useEffect, useState } from "react";
import axios from "axios";
import TokenService from "../../service/tokenService";
import {Result,Pagination} from "../../components/Result"

import "./Profile.css";

import { useNavigate } from "react-router-dom";
import {getAscending,getDescending} from "../../service/dateService"

function Profile() {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [increase,setIncrease]=useState(false);
  const [resultItem, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

 
  
  

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "http://localhost:5000/api/results/".concat(
          TokenService.getuserInfo()._id
        ),
        {
          params: { limit: "all" },
        }
      )
      .then(
        (response) => {

          //response.data.result
        
          // giam dan
        // 
          
          
          response.data.result = getDescending(response.data.result);
          setItem(response.data.result);

          setLoading(false);
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

 
 const handleColor= (e)=>{
    console.log(e.target.value);
 }
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resultItem.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); //handleClick
  return (
    <>
      <section className="profile">
        <div className="card">
          <div id="sort-bar">
            <select name="sort" onClick={(e)=>{
               if(e.target.value==="inc"){
                 const s = getAscending(resultItem);
                 setItem(s)
               }else {
                 const s = getDescending(resultItem);
                 setItem(s);}
            }}>
              <option
                value="dec"
               
              >
                Mới nhất
              </option>
              <option
                value="inc"
             
              >
                Cũ nhất
              </option>
            </select>
          </div>
          <Result resultItem={currentPosts} loading={loading} status={increase}/>

          <Pagination
            resultsPerPage={postsPerPage}
            totalResults={resultItem.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
}

export default Profile;
