import { useState } from 'react'
import './App.css'
import Search1 from './components/Search1'
import Serching2 from './components/Serching2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Search1/>
     {/* <Serching2/> */}
    </>
  )
}

export default App
