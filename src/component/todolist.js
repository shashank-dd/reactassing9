import React, { useState } from "react";
 const Todolist=({text,iop,ondel})=>{
   
const[lol,setlol]=useState(false)
const[sop,setsop]=useState(text)

    return(
        <div id="card">
        {!lol&& <><div  id="op"  > {text} </div>
        
        <div>
                <button onClick={()=>{
                    setlol(true)
                }}>edit</button>
                <button  onClick={()=>{ondel(text)}}>delete</button>
            </div></>}
 
          
         {lol&&<>  <textarea required value={sop}  onChange={(e)=>{setsop(e.target.value)}}></textarea>
        <button  onClick={()=>{ 
            setlol(false)
             iop(text,sop)
        }}>save</button></>}
        </div>
           
           
       
    ) 
 }
 export default Todolist ;