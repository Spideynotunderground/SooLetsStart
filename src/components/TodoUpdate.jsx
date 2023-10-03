import React from 'react'
import Form from './Form'

const TodoUpdate = ({ todo, todos, setTodos, showUpdate, setShowUpdate}) => {
    const handleUpdate = (event, value) => {
        event.preventDefault()

        let newTodo = todos.map(task => {
            if (task.id === todo.id) task.title = value
            return task
        })
        setTodos(newTodo)
        setShowUpdate(!showUpdate)
    }
    return (
        <Form todo={todo} onSubmit={handleUpdate}/>
  )
}

export default  TodoUpdate