import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./singlepost.css"

export default function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  console.log(postId);

    useEffect(() => {
      axios
          .get(`http://localhost:5000/api/posts/${postId}`)
          .then(
              (response) => {
                  console.log(response);
                  setPost(response.data);
              },
              (error) => {
                  console.log(error);
              }
          );
  }, []);

  return (
    <div>
      {post.title}
    </div>
    // <div className='singlePost'>
    //     <div className="singlePostWrapper">
    //         <h1 className='singlePostTitle'>
    //             {post.title}
    //         </h1>
    //         <img className='singlePostImg'
    //         src={post.image}
    //         alt=""
    //         />
    //         <div className="singlePostInfo">
    //           <span  className="singlePostAuthor">{post.author}</span>
    //           <span className="singlePostDate">{post.createAt}</span>
    //         </div>
    //         <div className="singlePostContent">
    //         {post.content}
    //         </div>

    //     </div>
    // </div>
  )
}
