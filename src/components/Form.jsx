import React, { useEffect, useState } from "react";

export default function Form({ todos, setTodos, todo = null, onSubmit }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    todo && setValue(todo.title)
  }, [todo])

  const addTodo = event => {
    event.preventDefault();
    if (value) {
      let newTodo = {
        id: new Date().getTime(),
        title: value,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setValue("");
      return;
    }
    alert('You Did not Write Anything')
  };

  return (
    <form className="form" onSubmit={todos? event => addTodo(event) : event => onSubmit(event, value)}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Hit Enter To Add Task"
      />
    </form>
  );
}
