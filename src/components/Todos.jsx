import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, setTodos }) {
  return (
    <div className="todos">
      {todos &&
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  );
}
