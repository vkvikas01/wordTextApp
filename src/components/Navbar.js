import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default memo(function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-dark`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/textform">TextForm</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"onClick={props.toogleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Change Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
})
// Navbar.PropTypes={
//     title:PropTypes.string.isRequired}
// Navbar.defaultProps={
//     title:"word app"
// }
// Navbar.propTypes = {
//     name: PropTypes.string
//   };