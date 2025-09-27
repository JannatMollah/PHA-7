import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import StatusCard from './components/StatusCard/StatusCard'
import Footer from './components/Footer/Footer'
import BottomFooter from './components/Footer/BottomFooter'
import AllTickets from './components/AllTickets/AllTickets'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchTickets = async () => {
  const res = await fetch('/tickets.json')
  return res.json();
}

const ticketsPromise = fetchTickets();

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <StatusCard inProgressCount={inProgressCount} resolvedCount={resolvedCount}></StatusCard>
      <AllTickets 
        ticketsPromise={ticketsPromise} 
        setInProgressCount={setInProgressCount}
        setResolvedCount={setResolvedCount}
      ></AllTickets>
      <Footer></Footer>
      <BottomFooter></BottomFooter>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  )
}

export default App