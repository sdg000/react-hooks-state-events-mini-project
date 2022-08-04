import React, {useState} from "react";

function NewTaskForm({categories, handleSubmitNewTask}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")
  const newTaskCat = categories.map((cat) => {
    return (
      <option key={cat}>
        {cat}
      </option>
    )
  })
  
  function handleSubmit(e){
    e.preventDefault()
    handleSubmitNewTask({text, category})
    setText("")
    setCategory("Code")
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {newTaskCat}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

/**DELIVERY 3: SUBMIT  NEW TASK
 * 1.In APP, pass filtered (CATEGORY) as prop to "NewTaskForm Component"
 * In APP, pass cb function to hanlde Newtask as prop to "NewTaskForm Component"
* 2. In "NewTaskForm" save Task, Category to state
 * 2. In "NewTaskForm" ,Map Category to save each item to <option/>
 * 3. Add event listerners to forms
 * 4 update state, pass values to cbfunction from APP 
 */