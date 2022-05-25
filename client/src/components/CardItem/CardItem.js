import React from 'react'
import './CardItem.css'
import { useNavigate } from "react-router-dom";
function CardItem({date,time,result,score,name,id}) {

  const history = useNavigate();

  const handleClick = ()=>{
    console.log(id)
      history(`/result/${id}`, { state: { resultId: id } });
  }
  return (
    <div className='card-item'>
     <h1>ETS TOEIC 2020 Test 5</h1>
     <h3>Full Test</h3>
     <p>Ngày làm bài: {date}</p>
     <p>Thời gian hoàn thành: {time}</p>
     <p>Kết quả:{result}</p>
     <p>Điểm:{score}</p>
     <button >Xem chi tiet</button>
    </div>
  )
}

export default CardItem