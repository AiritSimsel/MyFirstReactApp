import React, { useState } from 'react';

let currentTime = new Date().toLocaleTimeString();

function Time() {
    const [time, setTime] = useState(currentTime);
   

    const oneSecond = 1;
    
    setInterval(() => {
        setTime(currentTime + oneSecond);
    })

    return (
        <div>{time}</div>
    )
}

export default Time;

