import React from "react";
import "./TaskDone.css";

export default function TaskDone(props) {
  return (
    <div className="TaskDone">
      <h2>Done:</h2>
      {props.doneList.map((todo, i) => {
        return (
          <div className="todoItem" key={i}>
            <h3>{todo}</h3>
            <input type="checkbox" checked readOnly></input>
          </div>
        );
      })}
    </div>
  );
}
