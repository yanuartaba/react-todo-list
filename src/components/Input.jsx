import React, {useEffect, useState} from 'react'
import { categories } from "../utils/data";

function Input(props) {
  const [inputTask, setInputTask] = useState('')
  const [category, setCategory] = useState(null)
  // const [newTask, setNewTask] = useState(null)
  
  const handleAddTask =(e) => {
    e.preventDefault();   
    
    if (!category) {
      return  alert('You not pick category, please choose one')
    }
    
    let dueDate = new Date().toLocaleDateString()
  
    const payload = {
      id: parseInt(props.tasks.length + 1),
      title: inputTask,
      categoryId: category,
      dueDate,
      isFinish: false
    }

     props.newTask(payload)
     setInputTask('')
  }
 
  return (
      <>
          <div className="text-center">
              <h1 className="font-bold underline">Todo List : Tanggal</h1>
            </div>

            <div className="flex justify-center mt-3 gap-3">
              <input
                type="text"
                className="w-96 px-3 py-1 shadow-sm border-inherit"
                placeholder="Add new task"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
              />
              <select className="px-3" onChange={(e) => setCategory(e.target.value)}>              
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
                <button className="px-3 py-1 bg-purple-500 rounded font-bold text-gray-100"
                onClick={handleAddTask}  
              >
                Add Task
              </button>
            </div>

      </>
  )
}

export default Input