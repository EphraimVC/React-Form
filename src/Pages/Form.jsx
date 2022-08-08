import React, { useState } from 'react';
import Submit from "../Components/SubmitBtn";

function Form() { 
    const [name, setName] = useState("");
    const [surName, setSurname] = useState("");
    const [nameHandler, setHandler] = useState("");
    const [surNameHandler, setSurHandler] = useState("");
    const [greeting, setGreeting] = useState("");
    const greetText = "Hello ";

    //  name with uppercase letter
    const nameFirstChar = name.slice(0, 1);
    const restChar = name.slice(1, name.length);
    const upperChar = nameFirstChar.toUpperCase();
    const nameUpperChar = upperChar + restChar;

    // surname with uppercase letter
    const surNameFirstChar = surName.slice(0, 1);
    const surRestChar = surName.slice(1, surName.length);
    const surUpperChar = surNameFirstChar.toUpperCase();
    const surNameUpperChar = surUpperChar + surRestChar;
    
    function showName(event) { 
        setName(event.target.value);
        
    }

    function ShowSurname(event) { 
        setSurname(event.target.value);
    }

    function handleClick() { 
        setHandler(nameUpperChar);
        setSurHandler(surNameUpperChar);
        setGreeting(greetText)
    }

    return (
        <div className=''>
            <h1>{greeting}<br></br> {nameHandler} { surNameHandler}</h1>
            <div className='form'>
            <input className='nameInput' onChange={showName} placeholder='  Whats your name?' value={name}></input>
            <input onChange={ShowSurname } placeholder=' Whats Your surname?' value={surName}></input>
            <Submit click={handleClick}/>
            </div>  
    </div>
)
};

export default Form;