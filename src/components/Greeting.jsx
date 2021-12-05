import React, {useEffect} from "react";
import {EnterName} from "./EnterName";


export function Greeting({name}) {
    const message = `Hello, ${name}!`;

    useEffect(() => {
      document.title = `Hello, ${name}!`;
    }, [name]);
    return <h1>{message}</h1>
  };