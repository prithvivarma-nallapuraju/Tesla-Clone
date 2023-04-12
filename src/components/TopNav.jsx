import React from 'react'
import { Link } from 'react-router-dom'

function TopNav() {
  return (
    <>
        <div className='z-50 fixed w-full text-center py-4 text-sm text-black/70 bg-white'>
        Tax credit up to $7,500 available for eligible vehicles. 
        <Link to='/pageNotFound'>
           <span className='underline px-4'>
            Learn More
           </span>
        </Link>
      </div>
    </>
  )
}

export default TopNav