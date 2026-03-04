import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'
import Form from './Form'
import Count from './Count'

function eventBtn(){
  console.log('your btn was clicked')
}
function App() {
  

  return (
    <>
    <Button/>
    <Form/>
    <Count/>
      <button onClick={eventBtn}>Click me!</button>
    </>
  )
}

export default App
