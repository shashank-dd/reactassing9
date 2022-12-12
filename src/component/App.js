import React, { useState } from "react";
import "./../styles/App.css";
import Todoin from "./todoin";
import Todolist from "./todolist";

function App() 
{   
   const[list,setlist]=useState("")
   const[tolist,settolist]=useState([])
   function dop (pop){
	 setlist(pop)
   }
   function push(list){
	
	  tolist.push(list)
	 
       settolist([...tolist])
   }
	return (
	<div id="main">
 
	<Todoin  dop={dop} push={push} list={list}/>

 	{ tolist.length ?tolist.map((text,index) => 
        <Todolist text={text} key={index} iop={(oldvalue,newvalue)=>{
			settolist((list)=>{
			return	list.map((lis)=>{ return lis===oldvalue? newvalue :oldvalue})


			})
           
		}} 
		ondel={(kop)=>{
			 settolist( (list)=>{
			
			return  list.filter((val)=>{ 
		
					return  val!==kop   
				   })
		}) 
	
	}}
		
		
		/>
      ) : null}
	</div>
	);
}


export default App;
