import React from 'react';
import ReactDOM from 'react-dom' ;
import App from './App';


// function App2() {

//   const ankit = "ankit raj ji"
//   return (
//     <>
//     <h1>Welcome to the {ankit} </h1>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // we can run react components like this also
  // App2()

  <React.StrictMode>
    <App />
  </React.StrictMode>
);


