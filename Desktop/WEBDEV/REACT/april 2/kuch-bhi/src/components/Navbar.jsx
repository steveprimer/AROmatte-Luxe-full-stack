import React from 'react'
import './navbar.css'


const Navbar = ({user,time}) => {
  return (
    <div>
        <ul>
            <li>Navbar</li>
            <li>Home</li>
        </ul>
        <h2>Navbar {time} </h2>
        <h1> welcome {user.name} </h1>
        <p>college: {user.college} {user.year}</p>
    </div>
  )
}

export default Navbar
