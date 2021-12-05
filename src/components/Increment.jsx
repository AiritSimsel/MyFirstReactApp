import React, { useState } from 'react';

export const AddNumber = () => {
    const[counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            {counter}
            <button onClick={increment}>+1</button>
        </>
    );
};

