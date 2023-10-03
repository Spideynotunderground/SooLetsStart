import React from "react";

export default function Footer({todos}) {
  return (
    <div className="footer">
      <span>{todos ? todos.length : "0"} tasks</span>
      <span>
        {todos ? todos.filter((todo) => todo.completed).length : "0"} completed
      </span>
      <span>
        {todos ? todos.filter((todo) => !todo.completed).length : "0"} open
      </span>
    </div>
  );
}
