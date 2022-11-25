import React, { useState, useEffect } from "react";
import checkIcon from "./check.svg";
import errorIcon from "./error.svg";
import infoIcon from "./info.svg";
import warningIcon from "./warning.svg";
import "./Toast.css";
/*
{
    id: 1,
    title: 'Success',
    description: 'This is a success toast component',
    backgroundColor: '#5cb85c',
    icon: ''

    const testList = [
    {
      id: 1,
      title: 'Success',
      description: 'This is a success toast component',
      backgroundColor: '#5cb85c',
      icon: checkIcon
    },
    {
      id: 2,
      title: 'Danger',
      description: 'This is an error toast component',
      backgroundColor: '#d9534f',
      icon: errorIcon
    },{
    id: 3,
    title: 'Info',
    description: 'This is an info toast component',
    backgroundColor: '#5bc0de',
    icon: infoIcon
},
{
    id: 4,
    title: 'Warning',
    description: 'This is a warning toast component',
    backgroundColor: '#f0ad4e',
    icon: warningIcon
}
];


Top-right
Bottom-right
Top-left
Bottom-left
<Toast 
    toastList={testList}
    position="top-right"
/>
}

*/
const Toast = (props) => {
  const { toastList, position } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);
  
    const deleteToast = (id) => {
      const listItemIndex = list.findIndex((e) => e.id === id);
      const toastListItem = toastList.findIndex((e) => e.id === id);
      list.splice(listItemIndex, 1);
      toastList.splice(toastListItem, 1);
      setList([...list]);
    };
  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div className="notification-image">
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toast
