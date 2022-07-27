import React from "react";

function CategoryFilter({categories, selectedCategory, setCategory}) {

  const myCategories = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button 
          key={category} 
          className={className}
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {myCategories}
    </div>
  );
}

export default CategoryFilter;
