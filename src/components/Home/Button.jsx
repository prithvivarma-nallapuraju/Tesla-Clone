import React from 'react'

const Button = (props) => {
  return (
    <button className={`rounded-md w-64 sm:w-96 lg:w-72 mx-2 my-1 p-2 py-2.5 ${props.styleCustom}`}> 
        {props.value}
    </button>
  )
}

export default Button