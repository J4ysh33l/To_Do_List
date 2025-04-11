import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function List({ todo, deleteTodo, toggleTodo }) {
  function createList(todo) {
    return todo.map((todo) => {
      return (
        <>
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                value={todo.title}
                checked={todo.complete}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </label>
          </li>
        </>
      );
    });
  }

  return (
    <>
      <h1 className="headergi">List</h1>
      <ul className="list">{createList(todo)}</ul>
    </>
  );
}

export default List;
