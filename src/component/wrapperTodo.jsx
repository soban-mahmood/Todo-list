import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import Todo from "./Todo";
import Todoform from "./Todoform";
import EditTodo from "./Edit";

const WrapperTodo = () => {
  const [todos, setTodos] = useState([]);
 
  const addTodo = (todo) => {
    let val = [
      ...todos,
      { id: uuidv4(), task: todo, isEditing: false, completed: false },
    ];
    setTodos(val);
    localStorage.setItem("val", JSON.stringify(val));
  };

  const removeTodos = (id) => {
    const val = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(val);
    localStorage.setItem("val", JSON.stringify(val));
  };

  const editTodo = (id) => {
    const val = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    setTodos(val);
    localStorage.setItem("val", JSON.stringify(val));
  };

  const editTask = (task, id) => {
    const val = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(val);

    localStorage.setItem("val", JSON.stringify(val));
  };

  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("val"));
    if (val) {
      setTodos(val);
    } else {
      localStorage.setItem("val", JSON.stringify(todos));
    }
  }, []);
  return (
    <div>
      <Todo addTodo={addTodo} />
      {todos.map((todo, index) => {
        return todo.isEditing ? (
          <EditTodo key={todo.id} task={todo} editTask={editTask} />
        ) : (
          <Todoform
            key={index}
            task={todo.task}
            removeTodos={removeTodos}
            editTodo={editTodo}
            todos={todo}
          />
        );
      })}
    </div>
  );
};

export default WrapperTodo;
