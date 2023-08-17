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
    if(todo.trim() !== ""){
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  const onCheck = (index) => {
    const completedTodo = todoList[index];
    setTodoList(todoList.filter((never, i) => i !== index));
    setDoneList([...doneList, completedTodo]);
  };

  // return statement
  return (
    <div className="App">
      <h1>To Do App</h1>
      <TaskInput todo={todo} onChange={onChange} onAdd={onAdd} />
      <h2>Todo:{todo}</h2>
      <Tasklist todoList={todoList} onCheck={onCheck} />
      <TaskDone doneList={doneList} />
    </div>
  );
}

export default App;
