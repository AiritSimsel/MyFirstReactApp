import React, { useState } from "react";


function EnterName() {
    const [name, setName] = useState("Stranger");
  
    const handleSubmit = (event) => {
      setName(event.target.value)
    }
    
    const greeting = <h1>Hello, {name}!</h1>

    return (     
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
        {greeting}
      </form>      
    )
  }


  export default EnterName;