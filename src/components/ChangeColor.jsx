import React, {useState} from "react";

const green = '#39D1B4';
const yellow = '#FFD712';

function Color () {
    const[color, setColor] = useState(green);
    
    const changeColor = () => {
        setColor(color === green ? yellow : green);
    }


return (
    <div >
        <button onClick = {changeColor} style = {{background: color}} >Click</button>
    </div>
)};

export default Color;