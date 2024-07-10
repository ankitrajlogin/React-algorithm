import React from "react";
import Card from '../src/Components/Card'
// import UserComponent from "./Components/UserComponent";



import './App.css'
import UserComponent from "./Components/UserComponent";

function App() {

  const someobject = {
    user : "rahul" ,  
    togo : "click me " , 
    Password : "anktit" ,
    myArray : [2 , 342 , 24] , 
  }



  // console.log(someobject.user) ; 
  // console.log(someobject.myArray) ; 

  return (
    <>
    <h1 className="bg-gren-400 text-black p-4
    rounded-xl mb-4">Tailwind</h1>


    <div id="main-container">
    <Card someobj = {someobject}/>
    <Card />

    </div>

    <h1 style={{fontSize : '30px'}}>If we do not send the value , it takes default</h1>
    <UserComponent
        name="Ankit Raj"
        userid="AR123"
        address="123 Main St"
        // place, pincode, and dob are omitted and will use default values
    />
   

    </>
  );
}

export default App;
