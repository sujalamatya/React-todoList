import React,{useState} from 'react'

export default function colorPicker() {
    const [color,setColor]=useState("#FFFFFF");
    function handleColorChange(e){
        setColor(e.target.value);
    }
  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor:color}}>
            <p>Selected color: {color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}
