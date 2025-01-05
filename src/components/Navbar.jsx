import React, { useState } from 'react'
import {Link,Outlet} from 'react-router-dom'
import ContactMe from './ContactMe';

export default function Navbar() {
    const[toggle,setToggle] = useState(0);

    const changeProps =()=>{
        setToggle(1);
    }


    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/logo.png" alt="" width="40" height="30" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={()=>{setToggle(0)}}>{toggle===0?'Home':'Pranav Sutar'}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={changeProps}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resume " onClick={changeProps}>Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/achievements" onClick={changeProps}>Achievements/Extra Curriculars</Link>
                            </li>
                        </ul>
                        <form className="nav-item">
                            <ContactMe/>  
                        </form>
                    </div>

                </div>
                <Outlet/>
            </nav>
    )
}
