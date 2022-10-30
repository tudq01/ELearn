/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect,useState } from "react"
import CardItem from "../../components/CardItem/CardItem"
import CourseItem from "../../components/CourseItem/CourseItem";
import "./Home.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = ({user}) => {
    const [resultItem,setItem] = useState([])
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const history = useNavigate();
    useEffect(()=>{
       
       if(user)
         axios
           .get("http://localhost:5000/api/results/".concat(user._id), {
             params: { limit: 4 }
           })
           .then(
             (response) => {
             //  response.data.result = getDate(response.data.result);
               setItem(response.data.result);
               console.log(response);
             },
             (error) => {
               console.log(error);
             }
           );
         axios
           .get("http://localhost:5000/api/courses/by-user/".concat(user._id))
           .then(
             (response) => {
               setEnrolledCourses(response.data);
               console.log(response);
             },
             (error) => {
               console.log(error);
             }
           );
    },[user])


    const handleClick =()=>{
      console.log("hello");
      history("/profile")
      
    }
    return (
      /*
        <div className="home">
            {posts.map(post=>(
                <Card key={post.id} post={post}/>
            ))}
        </div>  */
      <div className='body'>
        <section className="home">
          <h1 className="info">Welcome {user && user.name}</h1>
        </section>

        <section className="course">
          <h1 className="info">Your Course</h1>
          <div className="course-info">
            {enrolledCourses[0] ? (
              enrolledCourses.map((course) => (
                <CourseItem course={ course } />
              ))
            ) : <p className="info">Bạn chưa đăng ký khóa học nào</p>}
          </div>
        </section>

        <section>
          <div className="result">
            <h1 className="info">Test Results</h1>

          <div className="cards">
              {resultItem[0] ? (
                resultItem.map((item) => (
                  <>
                    
                    <CardItem
                      date={item.finishDate}
                      time={item.time}
                      result={item.correct}
                      score={item.score}
                      name={
                        item.testResult[0].name +
                        " Test " +
                        item.testResult[0].test
                      }
                      id={item._id}
                    />
                    
                  </>
                ))
              ) : (
                <>
                  <h1 style={{ color: "red" }}>
                    You have not done any test
                  </h1>
                </>
              )}
           </div>

            <a id="detail" onClick={handleClick}>
              See more &gt;&gt;&gt;
            </a>
          </div>
        </section>

        <section className="course">
          <div className="online-course">
            <h1 className="info">Courses</h1>
          
          </div>
        </section>
      </div>
    );
}

export default Home
