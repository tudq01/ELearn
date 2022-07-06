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
     <h1>{name}</h1>
     <p> <i class='far fa-calendar-alt' ></i> Ngày làm bài: {date}</p>
     <p> <i class='far fa-clock'></i> Thời gian hoàn thành: {time}</p>
     <p><i class="fa fa-list-alt"></i> Kết quả:{result}</p>
     <p><i class="fas fa-flag-checkered"></i> Điểm:{score}</p>
     <button id="butt" onClick={handleClick}>Xem chi tiet</button>
    </div>
  )
}

export default CardItem