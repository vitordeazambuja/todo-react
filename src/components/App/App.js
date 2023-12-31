import React, { useEffect, useState } from "react";
import "./App.css";
import TaskInput from "../TaskInput/TaskInput";
import Tasklist from "../Tasklist/Tasklist";
import TaskDone from "../TaskDone/TaskDone";

function App() {
  // useState variables
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [lastCheckedIndex, setLastCheckedIndex] = useState(-1);

  //useEffect
  useEffect(() => {
    if (lastCheckedIndex !== -1) {
      const completedTodo = todoList[lastCheckedIndex];
      setTodoList(todoList.filter((never, i) => i !== lastCheckedIndex));
      setDoneList([...doneList, completedTodo]);
      setLastCheckedIndex(-1);
    }
  }, [lastCheckedIndex, todoList, doneList]);

  // functions
  const onChange = (todo) => {
    setTodo(todo);
  };

  const onAdd = (todo) => {
    if (todo.trim() !== "") {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  const onCheck = (index) => {
    setLastCheckedIndex(index);
  };

  // return statement
  return (
    <div className="App">
      <div className="container-head">
        <h1 className="title">To Do App</h1>
        <TaskInput todo={todo} onChange={onChange} onAdd={onAdd} />
      </div>
      <Tasklist
        todoList={todoList}
        onCheck={onCheck}
        lastCheckedIndex={lastCheckedIndex}
      />
      <TaskDone doneList={doneList} />
    </div>
  );
}

export default App;
