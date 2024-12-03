import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = ({addTodo}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e.target.todo.value);
        e.target.todo.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo</label>
            <input 
            id={uuidv4()}
            name="todo"
            type="text"
            />

            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodoForm