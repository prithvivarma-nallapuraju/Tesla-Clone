import React from 'react'
import TopNav from '../components/TopNav'
import NavBar from '../components/NavBar'
import HomeComponent from '../components/Home/HomeComponent'
import ShopComponent from '../components/Home/ShopComponent'


function Home() {
  return (
    <>
      <TopNav/>
      <NavBar/>
      <HomeComponent styleCustom="bg-[url('./assets/asset_0.jpeg')]" name="Model Y" value="View Inventory"/>
      <HomeComponent styleCustom="bg-[url('./assets/asset_1.jpeg')]" name="Model 3" value="View Inventory"/>
      <HomeComponent styleCustom="bg-[url('./assets/asset_2.jpeg')]" name="Model S" value="View Inventory"/>
      <HomeComponent styleCustom="bg-[url('./assets/asset_3.jpeg')]" name="Model X" value="View Inventory"/>
      <HomeComponent styleCustom="bg-[url('./assets/asset_4.jpeg')]" name="Solar Panels" value="View Inventory"/>
      <HomeComponent styleCustom="bg-[url('./assets/asset_5.webp')]" name="Solar Roof" value="View Inventory"/>
      <ShopComponent styleCustom="bg-[url('./assets/asset_6.jpeg')]" name="Accessories"/>
    </>
    
  )
}

export default Home