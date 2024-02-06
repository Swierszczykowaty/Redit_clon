import { useState } from 'react'
import './App.css'
import { PiImageSquareLight } from "react-icons/pi";
import { GoLink } from "react-icons/go";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <div className='create'>
          <div className='avatar_circle'>
            <img src="./imagines/344308096_547741020772353_384304532245554270_n.jpg" alt="" className='avatar'/>
          </div>
          
            <input type="text" placeholder='Create Post' className='search' />
          <div className='icons'>
            <PiImageSquareLight className='imagine'/>
            <GoLink className='imagine'/>
          </div>
        </div>
        <div className='create'>
              s
        </div>
        
      </div>
    </>
  )
}

export default App
