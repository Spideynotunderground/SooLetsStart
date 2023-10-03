import React, { useState } from "react";
import TodoUpdate from "./TodoUpdate";

export default function Todo({ todo, todos, setTodos }) {
  const [showUpdate, setShowUpdate] = useState(false);
  const completeTodo = (todo) => {
    let newTodo = todos.map((task) => {
      if (todo.id === task.id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTodos(newTodo);
  };

  const deleteTodo = (todo) => {
    const confirmation = window.confirm(
      "Do  you really want to delete this task?"
    );
    if (confirmation) {
      setTodos(todos.filter((task) => task.id != todo.id));
    }
  };
  return (
    <div className="todo">
      {showUpdate ? (
        <TodoUpdate 
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}/>
      ) : (
        <div className={todo.completed ? "completed" : ""}>
          <input
            type="checkbox"
            id={`check-${todo.id}`}
            className="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo)}
          />
          <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
          <i className="icon" onClick={() => deleteTodo(todo)}>
            <img
              src="https://www.svgrepo.com/show/21045/delete-button.svg"
              alt=""
              width="30"
              height="30"
            />
          </i>
          <i className="icon" onClick={() => setShowUpdate(!showUpdate)}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_edit-ltr.svg/1024px-OOjs_UI_icon_edit-ltr.svg.png"
              alt=""
              width="30"
              height="30"
            />
          </i>
        </div>
      )}
    </div>
  );
}
