import React from "react";

const Todoform = ({ task, removeTodos, todos,editTodo }) => {
  console.log(task);
  return (
    <div>
      <p className="mt-10 text-[30px]  rounded-full bg-blue-800 outline-none">
        {task}
      </p>
      <br />
      {task ? (
        <>
        <span
          className="cursor-pointer px-4 py-2 text-black bg-blue-800  rounded"
          onClick={() => editTodo(todos?.id)}
        >
      &#9997;
        </span>
        <span
          className="cursor-pointer px-4 py-2 text-black bg-blue-800  rounded"
          onClick={() => removeTodos(todos?.id)}
        >
          &#9747;
        </span>

        </>
      ) : null}
    </div>
  );
};

export default Todoform;
