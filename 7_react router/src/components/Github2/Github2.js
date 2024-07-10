import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

export default function Github2(){

    const data = useLoaderData() ; 
    console.log(data) ; 

    return(
        <>
        
        <div>Welcome to the Github2 Section </div>

        {/* <div>github followers : {followers}</div> */}
        <div>github followers : {data?.followers}</div>
        
        <img src={data.avatar_url}/>
        
        
        </>
    )
}



export const github2InfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/ankitrajlogin')
    
    return  await response.json() ; 
}