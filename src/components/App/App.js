import React, { useState } from "react";
import "./App.css";
import TaskInput from "../TaskInput/TaskInput";
import Tasklist from "../Tasklist/Tasklist";
import TaskDone from "../TaskDone/TaskDone";

function App() {
  // useState variables
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  // functions
  const onChange = (todo) => {
    setTodo(todo);
  };

  const onAdd = (todo) => {
    setTodoList([...todoList, todo]);
  };

  // return statement
  return (
    <div className="App">
      <h1>To Do App</h1>
      <TaskInput onChange={onChange} onAdd={onAdd} />
      <h2>Todo:{todo}</h2>
      <Tasklist todoList={todoList} />
      <TaskDone />
    </div>
  );
}

export default App;
