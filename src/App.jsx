import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './myComponents/navbar/Navbar'
import { Home } from './pages/Home'
import Projects from './pages/Projects'
import { About } from './pages/About'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="mt-[80px]">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
