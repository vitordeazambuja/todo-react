import React, { useState } from "react";
import "./TaskInput.css";

export default function TaskInput(props) {
  // useState variables
  const [inputValue, setInputValue] = useState("");
  
  // functions
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputAdd = (e) => {
    props.onAdd(inputValue);
    setInputValue("");
  };

  // return statement
  return (
    <div className="TaskInput">
      <input
        type="text"
        placeholder="Type a task"
        onChange={handleInputChange}
        value={inputValue}
      ></input>
      <button onClick={handleInputAdd}>Add</button>
    </div>
  );
}
