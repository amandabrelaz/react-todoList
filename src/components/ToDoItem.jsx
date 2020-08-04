import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setClick] = useState(false);

  function handleClick() {
    setClick(prevValue => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isClicked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
