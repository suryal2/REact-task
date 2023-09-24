import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShopProvider } from './ShopContexts'
import CardF from './cardF.jsx'
 
 

function App() {
  // const [count, setCount] = useState(0)

  return (
     <>
    <ShopProvider>
      <div>
      <h1 className='title'>context use to fetch card</h1>
      <CardF></CardF>
      </div>

    </ShopProvider>
    </>
  )
}

export default App
