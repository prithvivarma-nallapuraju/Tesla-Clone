import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <div className='z-50 fixed top-[11%] sm:top-12 w-full flex justify-between  items-center sm:px-12 p-4 text-sm font-bold'>
            <div>
                <Link to="/">
                    <img src="src/assets/logo.svg" alt="tesla logo" className='h-3' />
                </Link>
            </div>

            <div className='hidden xl:inline'>
                <ul className='flex justify-center hover:cursor-pointer'>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'> 
                       <Link to='/ModelS'>
                            Model S
                       </Link>
                    </li>

                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'> 
                        <Link to='/Model3'>
                            Model 3
                        </Link>
                    </li>

                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'>
                        <Link to='/ModelX'>
                            Model X
                        </Link>
                    </li>

                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'>
                        <Link to='/ModelY'>
                            Model Y
                        </Link>
                    </li>

                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'>
                        <Link to='/SolarRoof'>
                            Solar Roof
                        </Link>
                    </li>

                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'> 
                        <Link to='/SolarPanels'>
                            Solar Panels 
                        </Link>
                    </li>

                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'>
                        <Link to='/Powerwall'>
                            Powerwall
                        </Link>
                    </li>
                </ul>
            </div>
            
            <div className='hidden xl:inline'>
                <ul className='flex justify-center hover:cursor-pointer'>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'> 
                        <Link to='/pageNotFound'>
                            Shop
                        </Link>
                    </li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'>
                        <Link to='/pageNotFound'>
                            Account
                        </Link>
                    </li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'> 
                        <button className='inline-flex items-center rounded-md text-sm font-medium bg-transparent'>Menu</button>
                    </li>
                </ul>
            </div>

            <div className='xl:hidden'>
                <button className='inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5'>Menu</button>
            </div>
        </div>
    </>
  )
}

export default NavBar