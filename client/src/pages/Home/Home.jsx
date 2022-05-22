import { useEffect,useState } from "react"
import CardItem from "../../components/CardItem/CardItem"
import "./Home.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({user}) => {
    const [resultItem,setItem] = useState([])
      const history = useNavigate();
    useEffect(()=>{
       
       if(user)
         axios
           .get("http://localhost:5000/api/results/".concat(user._id), {
             params: { limit: 4 }
           })
           .then(
             (response) => {
               setItem(response.data.result);
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
      <>
        <section className="home">
          <h1 className="info">Xin chào {user && user.name}</h1>
          <div className="hello">
            <p className="info">Bạn chưa đăng ký khóa học nào</p>
          </div>
        </section>

        <section className="course">
          <h1 className="info">Khóa học của bạn</h1>
          <div className="course-info">
            <p className="info">Bạn chưa đăng ký khóa học nào</p>
          </div>
        </section>

        <section>
          <div className="result">
            <h1 className="info">Kết quả luyện thi mới nhất</h1>

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
                    Bạn chưa thực hiện bài thi nào
                  </h1>
                </>
              )}
           </div>
            <a id="detail" onClick={handleClick}>
              Xem chi tiết>>>
            </a>
          </div>
        </section>

        <section className="course">
          <div className="online-course">
            <h1 className="heading">Khoa học online nổi bật</h1>
            <p>Bạn chưa đăng ký khóa học nào</p>
            <h1>Khóa học của tôi</h1>
            <p>Bạn chưa đăng ký khóa học nào</p>
            <h1>Kết quả luyện thi mới nhất</h1>
            <p>Bạn chưa đăng ký khóa học nào</p>
          </div>
        </section>
      </>
    );
}

export default Home
