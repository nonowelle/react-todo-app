import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { nanoid } from "nanoid";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (name) => {
    const newTodo = { id: nanoid(), name: name };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (newValue) => {
    const updatedTodo = { name: newValue };
    setTodos([...todos, updatedTodo]);
  };

  const deleteTodo = (id) => {
    const remainingTodos = todos.filter((todo) => id !== todo.id);
    setTodos(remainingTodos);
  };

  const todoList = todos.map((todo) => {
    return (
      <Todos
        id={todo.id}
        name={todo.name}
        key={todo.id}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    );
  });

  return (
    <div className="todo-list">
      <h1> What's on your agenda?</h1>
      <TodoForm addTodo={addTodo} />
      {todoList}
    </div>
  );
}

export default TodoList;
