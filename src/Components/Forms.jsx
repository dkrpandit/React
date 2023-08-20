import React, { useState } from 'react'
import '../CSS/Forms.css'
const Forms = ()=>{
    const [userName,setUserName] = useState("");
    const [name , setName ] = useState("");

    const [LastName ,setLastName] = useState("");
    const[LName ,setLName] = useState();
    const inputEvent = (event)=>{
        // console.log(event.target.value);
        setName(event.target.value);
    }
    const inputEvent2 = (event)=>{
        // console.log(event.target.value);
        setLastName(event.target.value);
    }

    const submit = (event)=>{
        event.preventDefault();
        setUserName(name)
        setLName(LastName)
        setName("")
        setLastName("")
    }
    return(
        <>
         <form onSubmit={submit}>
        <div className="container">
         <h1 className="name">Hello {userName} {LName}</h1>
         <input onChange={inputEvent} type="text" placeholder="Enter Your Name" 
         value={name}
         className="inputField"
         />
         <input onChange={inputEvent2} type="text" placeholder="Enter Your Last Name" 
         value={LastName}
         className="inputField"
         />
         <button className="submit" type='submit'>Submit</button>
        </div>
         </form>
       
        </>
    );
}
export default Forms;