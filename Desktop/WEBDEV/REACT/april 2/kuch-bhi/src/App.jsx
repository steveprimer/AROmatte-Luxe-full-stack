import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const user = {
    name: "anson",
    college: "Somerville",
    college_year:2026
  }

  return (
    <>
      <Navbar user={user} time = {(new Date()).getTime()}/>
    </>
  )
}

export default App
