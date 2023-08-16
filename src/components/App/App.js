import React,{useState} from 'react';
import './App.css';
import TaskInput from '../TaskInput/TaskInput';

function App() {
  // useState variables
  const [todo,setTodo] = useState([
    {id:1,content:"Task 1", isChecked: false},
    {id:2,content:"Task 2", isChecked:false},
    {id:3,content:"Task 3", isChecked:false}
  ])

  // return statement
  return (
    <div className="App">
      <h1>To Do App</h1>
      <TaskInput/>
    </div>
  );
}

export default App;
