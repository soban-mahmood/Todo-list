import React, { useState } from "react";

const Todo = ({ addTodo }) => {
  const [input, setInput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter your title"
        className="py-3 px-3 rounded-lg bg-slate-500 w-[500px] outline-none"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-800  px-8 py-3" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default Todo;
