import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  //saving task to state
  const [task, setTask] = useState(TASKS)
  const [category, setCategory] = useState("All")
  
function updateTask(item){
  const minusDelete = task
  .filter((i) => i !== item)
  console.log(minusDelete)
  setTask(minusDelete)
}


function handleSubmitNewTask(newText){
  setTask([...task, newText])
}

//DELIVERABLE 2 - 5: filtering "task" to display based on "category selected"
const catBasedDisplay = task
.filter((task) => category === "All" || task.category === category)


  // const catBasedDisplay = task.filter((task) => {
  //   if (category === "All") return true;

  //   return task.category === category
  // })
  // setTask(catBasedDisplay)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryList={CATEGORIES} selCategory={category}  updateCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All") } handleSubmitNewTask={handleSubmitNewTask}/>
      <TaskList tasks={catBasedDisplay} updateTask={updateTask}/>
    </div>
  );
}

export default App;
