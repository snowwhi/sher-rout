
import './App.css'
import {Route,Routes } from 'react-router'
import Layout from './Layout'
import Contact from './Componenets/Contact'
import Classes from './Componenets/Classes'
import Event from './Componenets/Event'
import Memebership from './Componenets/Membership'
import Resources from './Componenets/Resources'
import Donate from './Componenets/Donate'
import NotFound from './Componenets/NotFound/NotFound'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contact" element={<Contact />} />
        <Route path="Classes" element={<Classes />} />
        <Route path="Event" element={<Event />} />
        <Route path="Memebership" element={<Memebership />} />
        <Route path="Resources" element={<Resources />} />
        <Route path="Donate" element={<Donate />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
