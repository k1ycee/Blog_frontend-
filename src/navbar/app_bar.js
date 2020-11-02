import React, { Component } from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js';

class NavBar extends Component {
    componentDidMount() {
        let sidenav = document.querySelector('#mobile-links');
        M.Sidenav.init(sidenav, {});
    }
    render() {
        return (
            <div className="navbar">
                <nav className="white z-depth-0 right">
                    <div className="nav-wrapper container">
                        <NavLink to="/" className="brand-logo"><span className="black-text change">Journal</span></NavLink>
                        <a href="#" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons black-text">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="https://twitter.com/denzel_joker" target="_blank" rel="noopener noreferrer" className="black-text change">Twitter</a></li>
                            {/* <li><NavLink to="/funds" className="black-text change">abeg</NavLink></li> */}
                            <li><NavLink to="/about" className="black-text change">About</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-links">
                    <li><a href="https://twitter.com/denzel_joker" target="_blank" rel="noopener noreferrer" className="black-text change">Twitter</a></li>
                    <li><NavLink to="/about" className="black-text change">About</NavLink></li>
                </ul>
            </div>
        )
    }
}
export default NavBar;