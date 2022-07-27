import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  const catChange = (e) => {setCategory(e.target.value)}

  const detailsChange = (e) => setText(e.target.value)

  const renderCategories = categories.map((category) => {
    return (
      <option key={category}>{category}</option>
    )
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={detailsChange}/>
      </label>
      <label>
        Category
        <select value={category} onChange={catChange}>
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
