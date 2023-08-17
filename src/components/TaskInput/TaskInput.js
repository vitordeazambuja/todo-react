import React from "react";
import "./TaskInput.css";

export default function TaskInput(props) {
  // functions
  const handleInputChange = (e) => {
    props.onChange(e.target.value);
  };

  const handleInputAdd = (todo) => {
    props.onAdd(props.todo);
  };

  // return statement
  return (
    <div className="TaskInput">
      <input
        className="todo-input"
        type="text"
        placeholder="Type a task"
        onChange={handleInputChange}
        value={props.todo}
        maxLength={50}
      ></input>
      <button className="todo-btn" onClick={handleInputAdd}>
        Add
      </button>
    </div>
  );
}
