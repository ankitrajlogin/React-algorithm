import React from 'react' 

import {NavLink} from 'react-router-dom' ; 

import './Header.css'



function Header() {
  return (
    <>
    <div>Header</div>

    <div className='header'>
        <NavLink 
        to="/"
        className={({isActive})=>
         isActive ? 'active-link' : ""}
        > Home</NavLink>

        <NavLink 
        to="/about"
        className={({isActive})=>
          (isActive ? 'active-link' : "")}
        >About</NavLink>

        <NavLink 
        to="/contact"
        className={({isActive})=>
          isActive ? 'active-link' : ""}
        > contact</NavLink>

        <NavLink 
        to="/github"
        className={({isActive})=>
          isActive ? 'active-link' : ""}
        > Github</NavLink>

        <NavLink 
        to="/github2"
        className={({isActive})=>
          isActive ? 'active-link' : ""}
        > Github2</NavLink>


        <NavLink 
        to="/About2/first"
        className={({isActive})=>
          isActive ? 'active-link' : ""}
        > About2 first</NavLink>

        <NavLink 
        to="/About2/second"
        className={({isActive})=>
          isActive ? 'active-link' : ""}
        > About2 second</NavLink>


    </div>
    </>
  )
}

export default Header