import React from "react";
import "./TaskDone.css";

export default function TaskDone(props) {
  return (
    <div className="TaskDone">
      <h2 className="subtitle">Done:</h2>
      {props.doneList.map((todo, i) => {
        return (
          <div className="todoItem" key={i}>
            <h3 className="todo-description">{todo}</h3>
            <p className="check-emoji">✅</p>
          </div>
        );
      })}
    </div>
  );
}
