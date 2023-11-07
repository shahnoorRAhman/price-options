import LineChart from './Components/LineChart/LineChart'

import './App.css'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'


function App() {


  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl text-white font-bold text-center p-2 bg-teal-800'>Vite + React</h1> 
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
