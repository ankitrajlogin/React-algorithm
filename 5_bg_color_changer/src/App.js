import { useState } from "react";
import React from 'react';

function App() {
  const [color, setColor] = useState('black');



  const setRed = ()=>{
    setColor('red') ;
  }

  const fun = `
  we can't do this : onClick = {setColor('green')}
  onClick need a function that execute on click 
  but this will execute itself and return value ; 
  sor onClick = ()=>{
    setColor('green')}; 

  Note: setColor is also funtion but setColor('red') => return the value ;
  `


  return (
    <>
    <div>
      Notes: onClick method require a function. not return. 
    </div>
    <div>
      {fun}
    </div>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={setRed}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor('green')}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor('blue')}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor('yellow')}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor('purple')}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor('pink')}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor('orange')}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
