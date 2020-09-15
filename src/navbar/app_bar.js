import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className= " white z-depth-0 right">
            <div className="nav-wrapper ">
                <NavLink to="/" className="brand-logo"><span className = "black-text change">My Journal</span></NavLink>
                <ul className="right">
                    <li><a href="https://twitter.com/denzel_joker" target="_blank" rel="noopener noreferrer" className="black-text change">Twitter</a></li>
                    <li><NavLink to="/funds" className="black-text change">Buy me a Laptop</NavLink></li>
                    <li><NavLink to="/about" className="black-text change">About</NavLink></li>
                </ul>
            </div>
        </nav>
    ) 
}
export default NavBar;