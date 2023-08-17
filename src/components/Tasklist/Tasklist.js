import React from "react";
import "./Tasklist.css";

export default function Tasklist(props) {
  return (
    <div className="Tasklist">
      <h2>To Do:</h2>
      {props.todoList.map((todo, i) => {
        return (
          <div className="todoItem" key={i}>
            <h3>{todo}</h3>
            <input
              type="checkbox"
              onChange={() => props.onCheck(i)}
              checked={props.lastCheckedIndex === i}
            ></input>
          </div>
        );
      })}
    </div>
  );
}
