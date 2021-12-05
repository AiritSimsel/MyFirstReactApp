import React, { useState, useEffect } from "react";


export function EnterName() {
    const [name, setName] = useState("Stranger");
  
    const handleSubmit = (event) => {
      setName(event.target.value)
    }
    console.log(name);
        
    return (  
    <>   
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form> 
    </>    
    )
  };


