import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Todo = ({ todo, removeTodo }) => {
    const TodoStyle ={
        liststyleType: 'bullet',
        textAlign: 'left'
    };
    const DivStyle = {
        display: 'flex',        // Use flexbox for layout
        alignItems: 'center',   // Vertically align items
        justifyContent: 'center', // Center the div horizontally
        margin: '10px auto',    // Add margin and center the div in its container
        width: 'fit-content',   // Shrink div to fit its content
    };
    const XButtonStyle = {
        marginLeft: '10px',
        padding: '5px 10px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
    return (
        <div style={DivStyle}>
            <li style={TodoStyle}>{todo}</li>
            <button style={XButtonStyle} onClick={removeTodo}>X</button>
            <form style={{display: 'none'}}>
                    <label htmlFor="todo">Edit</label>
                    <input 
                    id={uuidv4()}
                    name="todo"
                    type="text"
                    />
                </form>
        </div>
        
    );
}

export default Todo