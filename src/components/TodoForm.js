import React, { useState } from "react";

function TodoForm(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your new todo"
        value={name}
        onChange={handleChange}
      />
    </form>
  );
}

export default TodoForm;
