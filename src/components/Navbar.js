import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"  
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.abouttext}
                </Link>
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              
              <button type="button" className="btn btn-outline-secondary mx-1 my-1"  style={{backgroundColor:'blue',color:'white'}} onClick={props.toggleMode}>Dark Mode</button>
              <button type="button" className="btn btn-outline-danger mx-1 my-1" style={{backgroundColor:'#c23131',color:'white'}} onClick={props.RedtoggleMode}>Red Mode</button>
              <button type="button" className="btn btn-outline-success  mx-1 my-1" style={{backgroundColor:'#2e782e',color:'white'}} onClick={props.GreentoggleMode}>Green Mode</button>
              <button type="button" className="btn btn-outline-warning mx-1 my-1" style={{backgroundColor:'#c7c73c',color:'black'}} onClick={props.YellowtoggleMode}>Yellow Mode</button>
              <button type="button" className="btn btn-outline-light mx-1 my-1"  style={{backgroundColor:'white',color:'black'}} onClick={props.WhitetoggleMode}>Light Mode</button>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  tit: PropTypes.string.isRequired,
  abouttext: PropTypes.string,
};
// Navbar.defaultProps={tit:"set",abouttext:"set"};
