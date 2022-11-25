import React, { useState, useEffect, useCallback } from "react";
import FormInput from "./FormInput";
import CommentC from "./CommentC";
import $ from "jquery";
let showComments = [];

function CommentItem({ comment, socket ,id}) {
  const [reply, setReply] = useState(false);
  const [name, setName] = useState("");
 ;
  const [replyComment, setReplyComment] = useState([]);
  const [hideReplyComment, setHideReplyComment] = useState([]);
  const [next, setNext] = useState(3);
  const [repStr,setRepStr]=useState([]);
  
  const loadMore = () => {
    setNext(next + hideReplyComment);
  };

  useEffect(() => {
    if(comment.childComments){
    const loopWithSlice = () => {
      
      let start =
        comment.childComments.length - next < 0
          ? 0
          : comment.childComments.length - next;

      showComments = comment.childComments.slice(
        start,
        comment.childComments.length
      );

      setHideReplyComment(start);  
      setReplyComment(showComments);
      
    };
   
    loopWithSlice();}
  }, [comment.childComments, next]);

   
  const handleReply = (username,id) => {
    
    

    setReply(true);
    setName(username);
    // id of comment
    // $(selector).parents("div.id");
    const ans =$("#".concat(id)).parents("div.comment_card")
 
 if(ans.length===0){
   setRepStr([...repStr, ans["prevObject"][0].id]);
 // console.log(ans["prevObject"][0].id); 
}
  else{
    for(let i=ans.length-1;i>=0;i--){
      setRepStr([...repStr, ans[i].id]);
   // console.log(ans[i].id);
    }
    // console.log(ans["prevObject"][0].id);
     setRepStr([...repStr, ans["prevObject"][0].id]);
  }
    
  }
   

   
    const handle=()=>{
      setRepStr([])
    }
  
useEffect(()=>{
 console.log(repStr);
},[repStr])
  const hideReply = () => {
    setReply(false);
    setNext(0);
  };
  return (
    <>
      <CommentC comment={comment}>
        <div className="nav_comment">
          <p onClick={() => handleReply(comment.username,comment._id)}>Reply</p>
          {hideReplyComment > 0 && (
            <p onClick={loadMore}>Load more {hideReplyComment} comments</p>
          )}

          <p onClick={hideReply}>Hide Reply</p>
        </div>

        <div className="reply_comment">
          {replyComment.map((rep) => (
            <>
                <CommentItem key={rep._id} comment={rep} socket={socket} id={id}/>
            </>
          ))}
        </div>

        {reply && (
          <FormInput
            id={comment._id}
            socket={socket}
            name={name}
            setReply={setReply}
            str={repStr}
            commentId={id}
            setRepStr={handle}
            send="replyComment"
          />
        )}
      </CommentC>
    </>
  );
}
export default CommentItem;
/*
 {rep.childComments ? (
                <CommentC comment={rep} key={rep._id}>
                  <div className="nav_comment">
                    <p onClick={() => handleReply(rep.username)}>Reply</p>
                  </div>
                  {rep.childComments.map((res) => (
                    <CommentC
                      comment={res}
                      key={res._id}
                    >
                      <div className="nav_comment">
                        <p onClick={() => handleReply(res.username)}>Reply</p>
                      </div>
                    </CommentC>
                  ))}
                  
                </CommentC>
              ) : (
                <CommentC comment={rep} key={rep._id}>
                  <div className="nav_comment">
                    <p onClick={() => handleReply(rep.username)}>Reply</p>
                  </div>
                </CommentC>
              )}

*/


/* {replyComment.map((rep) => (
            <>
              <CommentC comment={rep} key={rep._id}>
                <div className="nav_comment">
                  <p onClick={() => handleReply(rep.username)}>Reply</p>
                  {hideReplyComment > 0 && (
                    <p onClick={loadMore}>
                      Load more {hideReplyComment} comments
                    </p>
                  )}

                  <p onClick={hideReply}>Hide Reply</p>
                </div>
                {rep.childComments ? (
                  <>
                    {rep.childComments.map((comment) => (
                      <CommentItem
                        key={comment._id}
                        comment={comment}
                        socket={socket}
                      />
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </CommentC>
            </>
          ))}

          */


