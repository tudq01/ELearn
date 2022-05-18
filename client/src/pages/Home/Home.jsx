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
            <section className='home'>
                <div className='hello'>
                    <h1 className='info'>Xin chào,dangquoctuhn!</h1>
                    <p className='info'>Bạn chưa đăng ký khóa học nào</p>
                    <h1 className='info'>Khóa học của tôi</h1>
                    <p className='info'>Bạn chưa đăng ký khóa học nào</p>
                    <h1 className='info'>Kết quả luyện thi mới nhất</h1>
                    <p className='info'>Bạn chưa đăng ký khóa học nào</p>
                    <div className='card'>
                       
                        {resultItem && resultItem.map((item) =>
                            <>
                              <CardItem
                                date={item.finishDate}
                                time={item.time}
                                result={item.correct}
                                score={item.score}
                                name ={item.testResult[0].name+" Test "+item.testResult[0].test}
                                id= {item._id}
                              />
                            </>
                        )}
                    </div>
                    <a id ="detail" onClick={handleClick}>Xem chi tiet>>></a>
                </div>
            </section>
            <section className='course'>
                <div className='online-course'>
                    <h1 className='heading'>Khoa hoc online noi bat</h1>
                    <p>Bạn chưa đăng ký khóa học nào</p>
                    <h1>Khóa học của tôi</h1>
                    <p>Bạn chưa đăng ký khóa học nào</p>
                    <h1>Kết quả luyện thi mới nhất</h1>
                    <p>Bạn chưa đăng ký khóa học nào</p>

                </div>
            </section>
        </>
       
    )
}

export default Home
