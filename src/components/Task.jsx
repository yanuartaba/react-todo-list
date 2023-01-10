import React, {useState} from 'react'
import { monthNames, categories } from "../utils/data";

function Task({task, taskId, tasks}) {
  const [finishTask, setFinishTask] = useState(null)
  
  const unFinishClass =
    "bg-gray-300 p-5 m-5 w-48 h-48 rounded-lg shadow-lg cursor-pointer";
  const finishClass =
    "bg-gray-100 text-gray-400 p-5 m-5 w-48 h-48 rounded-lg shadow-lg";

  const getDate = (date) => {
    let dateFormat = date.split("/");
    return dateFormat[1];
    };  
    
const getMonth = (date) => {
    let dateFormat = date.split("/");
    let month = parseInt(dateFormat[0] - 1);

    return monthNames[month];
  };

  const getYear = (date) => {
    let dateFormat = date.split("/");
    return dateFormat[2];
  };

  const handleFinishTask = (id) => {  
  
    if (tasks[id - 1].isFinish !== true) {   
      taskId(id - 1)
    }    
  }

  return (
    <div onClick={() => handleFinishTask(task.id)} className={task.isFinish ? finishClass : unFinishClass} >
        <div className="flex flex-row">
            <h1 className="text-6xl font-bold">
            {getDate(task.dueDate)}
            </h1>
            <div className="flex flex-col justify-end">
            <h5 className="text-xs">{getMonth(task.dueDate)}</h5>
            <h3>{getYear(task.dueDate)}</h3>
            </div>
        </div>
          
        <p className="text-center font-extrabold my-3">
            "{task.title}"
        </p>
        <p className="italic">{categories[task.categoryId-1].name}</p>
    </div>
  )
}

export default Task