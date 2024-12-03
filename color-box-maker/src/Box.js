import React from 'react';

const Box = ({width, height, backgroundColor, removeBox}) => {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        display: 'inline-block',
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        position: 'relative',
    };

    return (
        <div style={boxStyle}>
            <button onClick={removeBox}>X</button>
        </div>
    )
}

export default Box;