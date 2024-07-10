import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github';

import Github2, {github2InfoLoader} from './components/Github2/Github2';

import Layout from './Layout';

import About2Layout from './About2Layout' ; 

import About2first from './components/About2first/About2first';

import About2second from './components/About2second/About2second';


// const router = createBrowserRouter([
//   {
//     path : '/' , 
//     element : <Layout/> , 
//     children : [
//       {
//         path : "" , 
//         element : <Home/>
//       },
//       {
//         path : 'home' , 
//         element : <Home/>
//       },
//       {
//         path : "about" , 
//         element : <About/>
//       },
//       {
//         path : "contact" , 
//         element : <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home/>} />
      <Route path = "home" element = {<Home/>} />
      <Route path = "about" element = {<About/>} />

      <Route path = "about2/" element = {<About2Layout/>} >
        <Route path = 'first' element = {<About2first/>} />
        <Route path = 'second' element = {<About2second/>} />
      </Route>

      <Route path = "contact" element = {<Contact/>} />
      <Route path = "github" element = {<Github/>} />
      <Route path = 'user'  element = {<User />}/>
      <Route path = "user/:userid" element = {<User/>} />


      <Route 
      loader = {github2InfoLoader}
      path = "github2" 
      element = {<Github2/>} 
      />




    </Route>
  )
)





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

