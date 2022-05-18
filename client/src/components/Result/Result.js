import React from 'react'
import { useNavigate } from "react-router-dom";
function Result({resultItem,loading}) {
      const history = useNavigate();
     if (loading) {
       return <h2>Loading...</h2>;
     }
  return (
    <table>
      <tr>
        <th>De thi</th>
        <th>Ngay lam bai</th>
        <th>Thoi gian</th>
        <th>Ket qua</th>
        <th>Diem</th>
        <th></th>
      </tr>
      {resultItem.map((item) => (
        <>
          <tr>
            <td>
              {" "}
              {item.testResult[0].name + " Test " + item.testResult[0].test}
            </td>
            <td>{item.finishDate}</td>
            <td>{item.time}</td>
            <td>{item.correct}</td>
            <td>{item.score}</td>

            <td>
              <button
                onClick={() => {
                  history("/result", {
                    state: { resultId: item._id },
                  });
                }}
              >
                Xem chi tiet
              </button>
            </td>
          </tr>
        </>
      ))}
    </table>
  );
}

export default Result