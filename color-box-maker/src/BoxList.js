import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuidv4 } from 'uuid';

const BoxList = () => {
    let INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE); 

    const addBox = ({width, height, backgroundColor}) => {
        let newBox = {
            width, height, backgroundColor
        }
        setBoxes([...boxes, newBox]);
    }

    const removeBox = (index) => {
        setBoxes([...boxes.slice(0, index), ...boxes.slice(index + 1)]);
    }

    return (
        <div>
            <h1>Box List</h1>
            <NewBoxForm addBox={addBox} />
            {boxes.map((box, index) => 
                <Box 
                key={uuidv4()}
                width={box.width} 
                height={box.height} 
                backgroundColor={box.backgroundColor}
                removeBox={() => removeBox(index)}
                />
            )}
        </div>
    )
}

export default BoxList;