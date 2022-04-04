import React, { Component } from 'react'; // React is the default export of the base react file. Component is not a default export, so we have to add {} around it
import { Link } from 'react-router-dom';
import './Navbar.css' // This css had to be imported manually so we could style our navbar

export default class Navbar extends Component { // You can only have one "default" export (which is the main thing that the module exports). When importing in another file, if the thing you are trying to export is not the default, you have to put it in {}. If it's the default, you don't need the {} when importing
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light my-nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a> {/* when we copied the bootstrap navbar code, it had href="#" which is not valid in JSX, so we had to change it to "/" */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/instagram">Instagram</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              {this.props.currentUser.username ? // syntax for if statements in JSX -> condition ? resultIfTrue : resultIfFalse
                <li className="nav-item" onClick={()=>this.props.logMeOut()}> 
                  <Link className="nav-link" to="/login">Log Out</Link>
                </li>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                </>
              }
              <li className="nav-item">
                
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">{this.props.currentUser.username}</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
