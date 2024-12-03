import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo]);    
    }

    const removeTodo = (index) => {
        setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    }

    return(
        <div style={{textAlign: 'center'}}>
            <h2>Todo List</h2>
            <NewTodoForm addTodo={addTodo} />
            {todos.map((todo, index) => 
                <Todo 
                key={uuidv4()} 
                todo={todo} 
                removeTodo={() => removeTodo(index)}
                />
            )}
        </div>
    )
}

export default TodoList;