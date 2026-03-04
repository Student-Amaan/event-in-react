import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function eventBtn(){
  console.log('your btn was clicked')
}
function App() {
  

  return (
    <>
      <button onClick={eventBtn}>Click me!</button>
    </>
  )
}

export default App
