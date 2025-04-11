import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Form({ addTodo }) {
  const [newItem, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    addTodo(newItem);
    setItem("");
  }

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">New</label>
          <input
            value={newItem}
            onChange={(e) => setItem(e.target.value)}
            type="text"
            id="text"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
}

export default Form;
