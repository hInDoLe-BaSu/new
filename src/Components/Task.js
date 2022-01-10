import {FaTimes} from 'react-icons/fa';
const Task = ({task, deleteTask, toggleReminder, colorOfCross})=>{
    
    const message = `Task Number : ${task.id}`
    return(
        <div className = {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>toggleReminder(task.id)}>
            <h1>{task.title}</h1>
            <h3>{task.time}</h3>
            <h5>{message}</h5>
            <FaTimes style={{color:colorOfCross}} onClick={()=>deleteTask(task.id)}/>
        </div>
    )
}
export default Task;