import React from "react";

function Task({item, updateTask}) {
  //destructuring item
//const {text, category} = item

  function handleDelete(){
    updateTask(item)
  }
  
  return (
    <div className="task">
      <div className="label">{item.category}</div>
      <div className="text">{item.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;

/** DELIVERABLE 2: onClick, delete task element from display / State
 * create a function to handle Click in Task Component
 * create callback function in App Component, and pass it down as prop to "TaskList Component" through to "Task Component"
 * call callback function from app component and pass item being clicked
 * In App Component, take item and filter state with it, set new return value to state.
 */