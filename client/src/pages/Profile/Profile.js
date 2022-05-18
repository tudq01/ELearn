import React,{useEffect,useState} from 'react'
import axios from 'axios';
import TokenService from '../../service/tokenService';
import CardItem from '../../components/CardItem/CardItem';
import { Suspense } from 'react';
import Result from '../../components/Result/Result';
import "./Profile.css"
import Pagination from "../../components/Result/Pagination";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [resultItem, setItem] = useState([]);
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
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
          setItem(response.data.result);

          setLoading(false);
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resultItem.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <section className="profile">
        <div className="card">
          <Result resultItem={currentPosts} loading={loading} />

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

export default Profile