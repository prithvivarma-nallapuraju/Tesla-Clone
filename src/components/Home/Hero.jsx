import React, { useEffect, useState } from 'react'
import Button from './Button'
import { FiChevronDown }  from 'react-icons/fi'

const Hero = (props) => {
    const [hidden, setHidden] = useState("")

    useEffect(()=>{
        if(props.name!="Model Y"){
            setHidden("hidden")
        }
    },[])


  return (
    <>
        <div className='relative' >
            <div className='text-center'>
                <h1 className='text-4xl pt-36 tracking-wider font-extrabold'>{props.name}</h1>
                <p className='underline text-sm pt-1 underline-offset-4'> {props.value} </p>
            </div>

            <div className='flex flex-col items-center justify-center text-sm lg:flex-row mt-80 lg:mt-96'>
                <Button value="Order Now" styleCustom="bg-[#393c41] text-white"/>
                <Button value="Demo Drive" styleCustom={`bg-[#f4f4f4] text-black`} />
            </div>

            <div className={`${hidden} flex justify-center animate-bounce lg:mt-4 hover:cursor-pointer`}>
                <FiChevronDown size={24}/>
            </div>
        </div>
    </>
  )
}

export default Hero