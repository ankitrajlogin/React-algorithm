import React from 'react'

import { useParams } from 'react-router-dom'

export default function User(){

    const {userid} = useParams() ; 
    const defaultUserId = 'ankitraj'

    return(
        <>
        
        <div>Welcome to the User Section </div>

        <div> Userid  {userid ? userid : defaultUserId}</div>

        
        </>
    )
}