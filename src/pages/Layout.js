import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
function Layout() {
    return (
        <div className='bg-gray-300'>
            <div><Header /></div>
            <div className='h-full bg-gray-300'><Sidebar /></div>
        </div>
    )
}

export default Layout
