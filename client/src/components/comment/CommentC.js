import "./CommentCard.js";
import React, { useEffect } from "react";
import moment from "moment";

import CommentItem from "./CommentItem.js";

function CommentC({ children, comment, socket }) {
  useEffect(()=>{
    console.log(children);
  },[])
  return (
    <>
    
      <div className="comment_card"  id={comment._id}>
        <div className="comment_card_row">
          <h3>{comment.username}</h3>
        </div>

        <span>{moment(comment.createdAt).fromNow()}</span>

        <span>{new Date(comment.createdAt).toLocaleString()}</span>

        <p dangerouslySetInnerHTML={{ __html: comment.commentText }} />
              
        {children}
      </div>
    </>
  );
}

export default CommentC;

/*  {comment.childComments &&
          comment.childComments.map((child) => (
            <>
              <CommentC comment={child} >
               
              </CommentC>
            </>
          ))}
          */
