import React from 'react'
import NavBar from '../components/NavBar'
import TopNav from '../components/TopNav'


function Home() {
  return (
    <>
      <TopNav/>
      <div className="bg-[url('./assets/asset_0.jpeg')] h-screen bg-cover bg-center">
        <NavBar/>
      </div>
    </>
    
  )
}

export default Home