import React, { useState } from "react";

function App() {
  //useState to hold user's input
  const [userInput, setInput] = useState("");

  //useState to hold in an Array, the user's input once button is clicked
  const [arrayItem, setArray] = useState([]);

  function handleChange(event) {
    //const to hold the user's input value
    const newValue = event.target.value;
    setInput(newValue);
  }

  function handleClick(event) {
    setArray(prevItem => {
      return [...prevItem, userInput];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} value={userInput} type="text" />
        <button onClick={handleClick}>
          <span> Add </span>
        </button>
      </div>

      <div>
        <ul>
          {arrayItem.map(userInput => (
            <li> {userInput} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
