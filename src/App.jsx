import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import StatusCard from './components/StatusCard/StatusCard'
import Footer from './components/Footer/Footer'
import BottomFooter from './components/Footer/BottomFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <StatusCard></StatusCard>
      <Footer></Footer>
      <BottomFooter></BottomFooter>
    </>
  )
}

export default App
