import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <Link className="navbar-brand" to="/First-React/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/First-React/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/First-React/about">{props.aboutText}</Link>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}

                <div className="d-flex">
                    <div className="bg-primary mx-1" onClick={()=>props.toggleMode('primary')} style={{ height: '25px', width: '25px', borderRadius: "50%", cursor: 'pointer' }}></div>
                    <div className="bg-dark mx-1" onClick={()=>props.toggleMode('dark')} style={{ height: '25px', width: '25px', borderRadius: "50%", cursor: 'pointer' }}></div>
                    <div className="bg-info mx-1" onClick={()=>props.toggleMode('info')} style={{ height: '25px', width: '25px', borderRadius: "50%", cursor: 'pointer' }}></div>
                    <div className="bg-warning mx-1" onClick={()=>props.toggleMode('warning')} style={{ height: '25px', width: '25px', borderRadius: "50%", cursor: 'pointer' }}></div>
                    <div className="bg-secondary mx-1" onClick={()=>props.toggleMode('secondary')} style={{ height: '25px', width: '25px', borderRadius: "50%", cursor: 'pointer' }}></div>
                    <div className="bg-success mx-1 mr-4" onClick={()=>props.toggleMode('success')} style={{ height: '25px', width: '25px', borderRadius: "50%", cursor: 'pointer' }}></div>
                </div>

                <div className={`custom-control custom-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggMode} />
                    <label className="custom-control-label" htmlFor="customSwitch1">Enable Mode</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
}