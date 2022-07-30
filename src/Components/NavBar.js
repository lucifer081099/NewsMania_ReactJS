import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class NavBar extends Component {
    render() {
        return (
            <div className='sticky-top  mx-8'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
                    <Link className="navbar-brand" to="/"><h1>NewsMania</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container-fluid ">

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/general"><h4>Home</h4></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/"><h4>AboutUs</h4></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><h4>ContactUs</h4></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><h4>Career</h4></Link> */}
                            {/* </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar