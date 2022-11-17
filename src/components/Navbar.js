import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          
          
          <a className="navbar-item">
          <NavLink to="/dashboard" style={{ textDecoration: "none " }}>
            Home Aaja
          </NavLink>
          </a>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <a className="button is-light">
                Log Out
              </a>
            </NavLink>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar