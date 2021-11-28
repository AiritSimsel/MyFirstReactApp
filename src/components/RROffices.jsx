import React from "react";


function Offices (props) {
    return (
        <div>
            <h1>{props.company}</h1>
            <p>{props.company} has offices in {props.country[0]} and {props.country[1]}.<br/>                 
            In {props.country[0]} there are two in {props.city[0]} and {props.city[1]}. Bangladesh has one in {props.city[2]}.</p>
        </div>
    )
}

export default Offices;