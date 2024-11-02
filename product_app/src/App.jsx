import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import Usertable from './components/Usertable'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
        <Routes>
          <Route path='/h' element={<Usertable/>}></Route>
          <Route path='/a' element={ <Form/>}></Route>
        </Routes>
    
   
    </>
  )
}

export default App
