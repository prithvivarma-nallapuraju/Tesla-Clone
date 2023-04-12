import React from 'react'
import Button from './Button'
import Footer from '../Footer'

const secondComponent = (props) => {
  return (
    <>
      <div className={`${props.styleCustom} h-screen bg-cover bg-center pt-5`}>
         <div className='relative' >
            <div className='text-center'>
                <h1 className='text-4xl pt-36 tracking-wider font-extrabold'>{props.name}</h1>
            </div>

            <div className='flex flex-col items-center justify-center text-sm lg:flex-row mt-80 lg:mt-96'>
                <Button value="Shop Now" styleCustom="bg-[#393c41] text-white"/>
            </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default secondComponent