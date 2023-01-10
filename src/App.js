import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Sidebar from "./components/Sidebar";
import Task from "./components/Task";
import { tasks } from "./utils/data";

function App() {
  const [lists, setLists] = useState(tasks);

  const addTask = (data) => {
    if (data) {
      setLists((lists) => [...lists, data]);
    }
  };

  const finishTask = (data) => {
    const taskList = [...lists];
    taskList[data].isFinish = true;
    setLists(taskList);
  };

  const filterTask = (categoryId) => {
    if (categoryId !== "All") {
      const filterList = lists.filter((list) => list.categoryId === categoryId);
      setLists(filterList);
    } else {
      setLists(tasks);
    }
  };

  useEffect(() => {
    addTask();
  }, [lists]);

  return (
    <>
      <div className="flex justify-center bg-gray-200 min-h-screen">
        <div className="container h-auto flex flex-col">
          <Header />

          <div className="bg-gray-200 h-full p-5">
            {/* input */}
            <Input newTask={addTask} tasks={lists} />
            <div className="flex flex-row mt-10">
              <Sidebar categoryId={filterTask} />
              <div className="px-5 flex flex-wrap gap-3  md:w-8/12 lg:w-10/12">
                {lists.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    taskId={finishTask}
                    tasks={lists}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
