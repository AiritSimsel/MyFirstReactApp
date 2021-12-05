import React, {useState, useEffect} from 'react';

export function Time() {
    const [date, setDate] = useState(new Date());

    function Seconds() {
        setDate(new Date());
    }

    useEffect(() => {
        const countingSeconds = setInterval(Seconds, 1000);
        return function cleanup() {
            clearInterval(countingSeconds);
        };
    }, []);   // tühi massiiv [] kasutab effekti ühe korra peale esimest renderdust, ilma selleta(nii: "});" ) iga renderdusega


    return (
        <>
        kell {date.toLocaleTimeString()}
        </>
    )
};



