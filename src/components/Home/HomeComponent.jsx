import React from 'react'
import Hero from './Hero'
import NavBar from '../NavBar'

const HomeComponent = (props) => {
  return (
    <div className={`${props.styleCustom} h-screen bg-cover bg-center`}>
        <Hero name={props.name} value ={props.value}/>
    </div>
  )
}

export default HomeComponent