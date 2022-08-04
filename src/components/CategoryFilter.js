import React from "react";

function CategoryFilter({categoryList, selCategory, updateCategory}) {

  
const categoryDisplay = categoryList.map((category) => {
  const className = category === selCategory ? "selected" : null
  return (
    <button 
    className={className} 
    key={category} 
    onClick={() => updateCategory(category)}>
      {category}
    </button>
  )
})


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryDisplay}
    </div>
  );
}

export default CategoryFilter;

/**DELIVERABLE 2
 * DISPLAYING ALL CATEGORIES, displaying TASK based Selected Category
 * 1. In "APP Component" save category to STATE, initial value = "All"
 * 2. pass "CATEGORIES" as prop to "CategoryFilter Component"
 * 3. In "CategoryFilter Component", map through categories and display each of them using <button/>
 * 4. when any button is clicked, save that button's category to Category STATE
 * 5. In "APP Component", filter task to display based on category, and save to STATE
 * 
 * 
 * 
 */