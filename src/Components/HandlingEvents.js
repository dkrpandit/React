import React, { useState } from 'react'
import '../CSS/HandlingEvents.css'
// const onLeave = ()=>{
//    console.log("Thik hai");
// }
// const onMove =()=>{
//    console.log("Jaldi vaha se hato");
// }
const HandlingEvents = () => {
   
   const[name,setName] = useState("Thik hai")
   const[css,setCss] = useState("green")
   const onLeave = ()=>{
      setName("Thik hai !!")
      setCss("green")
   }
   const onMove =()=>{
      setName("📢 Jaldi vaha se hato")
      setCss("red")
   }
   return(
    <>
    <div className="container">
       <button style={{backgroundColor : css}} className="Events" onMouseLeave={onLeave} onMouseMove={onMove}>{name}</button> 
    </div>
    </>
   );
}
export default HandlingEvents;