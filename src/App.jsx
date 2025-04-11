import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Form from "./Form.jsx";
import List from "./List.jsx";
import "./style.css";

function App() {
  const [todo, setTodo] = useState(() => {
    const localVar = localStorage.getItem("ITEMS");
    if (localVar == null) return [];
    return JSON.parse(localVar);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo));
  }, [todo]);

  function addTodo(title) {
    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title: title,
          complete: false,
        },
      ];
    });
    console.log(todo)
  }

  function deleteTodo(id) {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => {
        return todo.id !== id;
      });
    });
  }

  function toggleTodo(id, complete) {
    setTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete };
        }
        return todo;
      });
    });
  }

  return (
    <>
      <Form addTodo={addTodo} />
      <List todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
