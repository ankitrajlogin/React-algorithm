import React from 'react'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>

    <h3>about 2 layout header  </h3>
    <div className='flex-divs'>

    <Outlet />

    </div>
    <h3>about 2 layout footer </h3>

    </>
  )
}

export default Layout