import React, { useEffect, useState } from 'react'

export default function Github(){

    useEffect(()=>{
        fetch('https://api.github.com/users/ankitrajlogin')
    .then(response => response.json())
    .then(data => {
        console.log(data) ; 
        // setfollowers(data.followers) ; 
        setdata(data) ; 
    })
    })



    // const [followers , setfollowers] = useState('') ; 
    const [data , setdata] = useState([]) ; 

    return(
        <>
        
        <div>Welcome to the Github Section </div>

        {/* <div>github followers : {followers}</div> */}
        <div>github followers : {data?.followers}</div>
        
        <img src={data.avatar_url}/>
        
        
        </>
    )
}