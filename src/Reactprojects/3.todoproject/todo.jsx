import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  // Store all todos
  const [todos, setTodos] = useState([]);

  // Store input value
  const [input, setInput] = useState("");

  // Add Todo
  function addTodo() {
    // Don't add empty todo
    if (input.trim() === "") {
      alert("Please enter a todo");
      return;
    }

    const newTodo = {
      id: nanoid(),
      text: input,
    };

    setTodos([...todos, newTodo]);

    // Clear input
    setInput("");
  }

  // Delete Todo
  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter your todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <p>{todo.text}</p>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;