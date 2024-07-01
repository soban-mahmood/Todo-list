import React, { useState } from "react";

const Edit = ({ editTask ,task }) => {
  const [input, setInput] = useState([task.task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(input,task.id);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter your title"
        className="py-3 px-3 rounded-lg bg-slate-500 w-[500px] outline-none mt-20"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-800  px-8 py-3" onClick={handleSubmit}>
     update Todo
      </button>
    </div>
  );
};

export default Edit;
