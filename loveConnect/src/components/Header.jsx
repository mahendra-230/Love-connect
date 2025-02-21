import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="title">
             Welcome to LoveConnect
        </div>
        <div className="menu">
        
          <nav>
            <Link to="/">Home</Link>
            
            <Link to="/about">About</Link>
            <Link to="/message">Message</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/dashboard">Dashboard</Link>
            <nav className='right-navBar'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
            </nav>
            </nav>
            
            </div>
        
    </div>
  )
}

export default Header