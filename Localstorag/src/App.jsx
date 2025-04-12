import { useState } from 'react'
import './App.css'
import Localstoreg from './Component/Localstoreg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Localstoreg/>
    </>
  )
}

export default App
