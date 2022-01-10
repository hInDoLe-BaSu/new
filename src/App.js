// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {useState} from 'react';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';


function App() {  
  const onClick = ()=>{
    console.log(`button was clicked`)
  }
  const [tasks, setTasks] = useState(
    [
      {
        id:1,
        title:'Task',
        time:'21 Jan 2021',
        reminder:true
      },
      {
        id:2,
        title:'Task',
        time:'21 Jan 2021',
        reminder:true
      },
      {
        id:3,
        title:'Task',
        time:'21 Jan 2021',
        reminder:true
      },
      {
        id:4,
        title:'Task',
        time:'21 Jan 2021',
        reminder:true
      }
    ]
  )
  const deleteTask = (id)=>{
    setTasks(tasks.filter((tasks)=>id !== tasks.id))

  }
  const toggleTask = (id)=>{
    setTasks(tasks.map((task)=>
    task.id === id ? 
    {...task ,reminder:!task.reminder} 
    : task ))
  }
  const AddTask = (task)=>{
    console.log(task);
  }
  return (
    <div className="App">
      <Header onClick={onClick}/>
      <AddTask onAdd = {AddTask} ></AddTask>
      {tasks.length > 0 ? <Tasks toggleReminder={toggleTask} tasks={tasks} deleteTask={deleteTask} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
