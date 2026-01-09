import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './Create'
import Update from './Update'
function App() {
 

  return (
    //Login Page using React + Node + MySQL | ReactJS, MySQL, NodeJS - Login Page Tutorial
            <>
              <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Create' element={<Create/>}/>
                    <Route path='/Update/:id' element={<Update/>}/>
                </Routes>
              </BrowserRouter>
            </>
  )
}

export default App
