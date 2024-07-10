import React from "react";
import { useState } from "react";


function Counter1() {

    
  // let counter = 35 ; 


  // this code change the value of counter ; 
  // but it not updating the value of counter in UX ; 


  // const addValue = ()=>{
  //   counter++ ; 
  //   console.log(counter) ; 
  // }

  // const removeValue = ()=>{
  //   counter-- ; 
  //   console.log(counter) ; 
  // }


  let [counter , setCounter] = useState(15)

  const addValue = ()=>{
    console.log("before click" , counter) ; 
    setCounter(counter+1) ; 
    console.log("after counter" , counter) ; 
  }

  const removeValue = ()=>{
    console.log("before click" , counter) ; 
    setCounter(counter-1) ; 
    console.log("after counter" , counter) ; 
  }


    return(
        <>
           <h1>Conter App 1</h1>
    <p>This is for understanding hooks</p>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Reduce value {counter}</button>
    
        
        </>


    )
}; 

export default Counter1 ; 