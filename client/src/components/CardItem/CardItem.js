import React from 'react'
import './CardItem.css'
import { useNavigate } from "react-router-dom";
function CardItem({date,time,result,score,name,id}) {

  const history = useNavigate();

  const handleClick = ()=>{
    console.log(id)
      history("/result", { state: { resultId: id } });
  }
  return (
    <div className='card-item'>
     <h1>{name}</h1>
     <p>Ngày làm bài: {date}</p>
     <p>Thời gian hoàn thành: {time}</p>
     <p>Kết quả:{result}</p>
     <p>Điểm:{score}</p>
     <button id="but" onClick={handleClick}>Xem chi tiet</button>
    </div>
  )
}

export default CardItem