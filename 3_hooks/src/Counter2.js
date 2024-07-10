import React from "react";
import { useState } from "react";


function Counter2() {

    


  let [counter , setCounter] = useState(15)

let value1 = `
    This code will not increase value by 4 because it just update final one. 

    const addValue = ()=>{
    setCounter(counter+1) ; 
    setCounter(counter+1) ; 
    setCounter(counter+1) ; 
    setCounter(counter+1) ; 
   }
`


    // so for final value ; 

let value2 = `
    const addValue = () =>{
        // setcounter require function. 
        // not function value ; 

        setCounter((prevCounter) => {
            console.log(prevCounter)
            return prevCounter = prevCounter+1 ; 
        }) ; 
        setCounter((prevCounter) => {
            console.log(prevCounter)
            return prevCounter = prevCounter+1 ; 
        }) ; 
        setCounter((prevCounter) => {
            console.log(prevCounter)
            return prevCounter = prevCounter+1 ; 
        }) ; 
    }
`

    // const addValue = () =>{
    //     // setcounter require function. 
    //     // not function value ; 

    //     setCounter((prevCounter) => {
    //         console.log(prevCounter)
    //         return prevCounter = prevCounter+1 ; 
    //     }) ; 
    //     setCounter((prevCounter) => {
    //         console.log(prevCounter)
    //         return prevCounter = prevCounter+1 ; 
    //     }) ; 
    //     setCounter((prevCounter) => {
    //         console.log(prevCounter)
    //         return prevCounter = prevCounter+1 ; 
    //     }) ; 
    // }


const value3 = `
 const addValue = () =>{
        setCounter((prevCounter) => prevCounter+1)
        setCounter((prevCounter) => prevCounter+1)
        setCounter((prevCounter) => prevCounter+1)
        setCounter((prevCounter) => prevCounter+1)
    }
`

    const addValue = () =>{
        setCounter((prevCounter) => prevCounter+1)
        setCounter((prevCounter) => prevCounter+1)
        setCounter((prevCounter) => prevCounter+1)
        setCounter((prevCounter) => prevCounter+1)
    }

   


  const removeValue = ()=>{ 
    setCounter(counter-1) ; 
  }


    return(
        <>
           <h1>Conter App 2</h1>
    <p>This is for understanding hooks functionality in fiber</p>
    <p>If we continueouly changing any component , it again and again have to change. </p>
    <p>To overcomes this, it send data in banches so that it only send final change and update</p>

    <h2>Lets take a example , what if we have to increase by 4</h2>
      <h2>Counter value : {counter}</h2>
      <pre>
        <code>
            {value1}
        </code>
      </pre>

      <h3>Correct ways to do it</h3>
      <pre>
        <code>
            {value2}
        </code>
      </pre>
      <h3>we can also do this</h3>
      <pre>
        <code>
            {value3}
        </code>
      </pre>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Reduce value {counter}</button>
    
        
        </>


    )
}; 

export default Counter2 ; 