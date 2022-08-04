import React from "react";
import Task from "./Task";

function TaskList({tasks, updateTask}) {

 const displayTasks = tasks.map((item) => {
  return <Task 
  key={item.text} 
  item={item}
  updateTask={updateTask}
  />
 })
  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;

 /**DELIVERABLE 1: Display task using Task Component
   * save tasks to state
   * pass tasks as prop to "Tasklist" through to "TaskCompnent"
   * map through task and for each item in task, call "Task Component" to display it
   */