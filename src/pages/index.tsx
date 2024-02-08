
import Navigation from './navbar/components/Navigation'
import { Route, Routes } from 'react-router-dom'

import About from './about/About'
import Homemain from './home/Homemain'

const Index = () => {
  return (
    <div>
    <Navigation/>
    <Routes>
     <Route path='/home' element={<Homemain/>}/>
     <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
  )
}

export default Index