import React,{useState} from "react"

function ColorPicker(){
    const [color,setColor] = useState("green");
    const [bgcolor,setBgcolor]=useState("black")

    function handleColorChange(event){
    setColor(event.target.value)
    }

    function handleBgColorChange(event){
        setBgcolor(event.target.value)
    }

    return(

        <><body style={{ backgroundColor: bgcolor }}>

        </body>
        <div className="colorpicker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{ backgroundColor: color }}>
                    <p>Selected Color:{color}</p>
                </div>
                <label>Select a Color:</label>
                <input type="color" value={color} onChange={handleColorChange} />

                <label>Select for Background</label>
                <input type="color" value={bgcolor} onChange={handleBgColorChange} />

            </div></>
    )


}

export default ColorPicker