import React from "react";
function ColorPicker()
{
    const [color, setColor] = React.useState("#FFFFFF");

    const handleChange = (e)=>
    {
        setColor(e.target.value)
    }
    return(
        <div className="all">
            <h1 className="heading">Color picker</h1>
            
            <div className="container" style={{backgroundColor: color}}>
                <p className="color-display">Selected color: {color} </p>
            </div>
            
            <label className="color-selector">
                Select a color: 
                <input type="color" value={color} onChange={handleChange}></input>
            </label>
        </div>
    )
}
export default ColorPicker;