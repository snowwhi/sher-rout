
import './App.css'
import {Route,Routes } from 'react-router'
import Home from './Home'
import Contact from './Contact'
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
    </>
  )
}

export default App
