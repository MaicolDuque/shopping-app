import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <Link className="navbar-brand" to="/">Ecommerce ForMe</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="https://medellinjs.org" target="_blank" rel="noopener noreferrer">Contact</a>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
)

export default Header