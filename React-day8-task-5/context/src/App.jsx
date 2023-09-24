import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShopProvider } from './ShopContext'
import CardFetch from './CardFetch'

function App() {
  // const [count, setCount] = useState(0)

  return (
     <>
    <ShopProvider>
      <div>
      <h1 className='title'>context use to fetch card</h1>
       <CardFetch/> 
      </div>
      
    </ShopProvider>
    </>
  )
}

export default App
