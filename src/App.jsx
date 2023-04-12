import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Model3 from './pages/Model3'
import ModelS from './pages/ModelS'
import ModelX from './pages/ModelX'
import ModelY from './pages/ModelY'
import SolarRoof from './pages/SolarRoof'
import SolarPanels from './pages/SolarPanels'
import PowerWall from './pages/PowerWall'
import PageNotFound from './pages/PageNotFound'

function App() {
  
  return (
    <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/Model3' element ={<Model3/>} />
        <Route path='/ModelS' element ={<ModelS/>} />
        <Route path='/ModelX' element = {<ModelX/>} />
        <Route path='/ModelY' element = {<ModelY/>} />
        <Route path='/SolarRoof' element = {<SolarRoof/>} />
        <Route path='/SolarPanels' element = {<SolarPanels/>}/>
        <Route path='/Powerwall' element = {<PowerWall/>} />
        <Route path='/pageNotFound' element = {<PageNotFound/>} />
    </Routes>
  )
}

export default App
