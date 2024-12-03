import React, { useState } from 'react';

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((data) => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE)
    }
    return (
        <div>
            <h2>New Box Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="width">Width</label>
                <input 
                name="width" 
                type="text" 
                id="width" 
                onChange={handleChange} 
                value={formData.width} 
                />

                <label htmlFor="height">Height</label>
                <input 
                name="height" 
                type="text" 
                id="height" 
                onChange={handleChange} 
                value={formData.height} 
                />

                <label htmlFor="backgroundColor">Background Color</label>
                <input 
                name="backgroundColor" 
                type="text" 
                id="backgroundColor" 
                onChange={handleChange} 
                value={formData.backgroundColor} 
                />

                <button type="submit">Add Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;