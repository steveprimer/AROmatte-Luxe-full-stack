import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = " anson";

  // if(name){

  // }

  const arr = [1,2,3,4,5,6,7,8,9]

  const sumOfEvens = arr.reduce((accum, it) =>{
    if (it % 2==0){
      return accum + it;
    }
    return accum;
  }, 0);
  console.log(sumOfEvens);

  const n=5;

  return (
    <>
    <p>{(n===4)?name: "Go Back"}</p>
    
    </>
  )

}

export default App
