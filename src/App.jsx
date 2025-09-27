import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import StatusCard from './components/StatusCard/StatusCard'
import Footer from './components/Footer/Footer'
import BottomFooter from './components/Footer/BottomFooter'
import AllTickets from './components/AllTickets/AllTickets'

const fetchTickets = async () => {
  const res = await fetch('/tickets.json')
  return res.json();
}

const ticketsPromise = fetchTickets();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <StatusCard></StatusCard>
      <AllTickets ticketsPromise={ticketsPromise}></AllTickets>
      <Footer></Footer>
      <BottomFooter></BottomFooter>
    </>
  )
}

export default App
