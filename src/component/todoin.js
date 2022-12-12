import React from "react";
 const Todoin=({dop,push,list})=>{

 
    return(
        <div>
            
        <textarea   id="task"   value={list} onChange={(e)=>{dop(e.target.value)}}></textarea>
      
        <div>  <button id="btn" onClick={ ()=>{
            push(list)
            dop("")
        }
    }>Add</button></div>
        </div>
    ) 
 }
 export default Todoin ;