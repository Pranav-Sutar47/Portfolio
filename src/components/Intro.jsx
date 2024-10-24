import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowInDown } from "react-icons/bs";
import { Tooltip } from 'react-tooltip'
import Typewriter from "./TypeWriter";

export default function Intro(){
    return(
        <div className="container mt-3">
            <h1 className="font-bold text-white text-start mt-3 header">Pranav Sutar</h1>
            <div>
                <Typewriter/>
                <h2 className="name text-white text-start mt-3"> PCCOE'26 | Full-Stack Development
                    <br/>
                    <br/>
                    <span className="info">Passionate about Information Technology.</span>
                    <br/>
                    <br/>
                    I love collaborating and making connections.
                    Always looking for opportunities to boost my passion for excellence in programming.
      
                </h2>
            </div>
            <div className="container mt-5">
                <a href="https://www.facebook.com/pranav.sutar.18488/" target="blank" className="nav-item link leftGo"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Facebook"
                    data-tooltip-place="bottom"
                ><Tooltip id="my-tooltip" /><FaInstagramSquare className="mb-2"/></a>
                <a href="https://www.linkedin.com/in/pranav-sutar-2b2a002b5/" target="blank" className="nav-item link"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Linkedin"
                data-tooltip-place="bottom"
                ><Tooltip id="my-tooltip" /><FaLinkedin className="mb-2"/></a>
                <a href="https://github.com/Pranav-Sutar47" target="blank" className="nav-item link"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Github"
                data-tooltip-place="bottom"
                ><Tooltip id="my-tooltip" /> <FaGithub className="mb-2"/> </a>
                <a href="https://drive.google.com/file/d/1Id0F_Nz1yz1k0oObjPL3hETYtGOMHBGK/view?usp=sharing" target="black" className="nav-item link"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Resume"
                data-tooltip-place="bottom"
                ><Tooltip id="my-tooltip" /> <BsBoxArrowInDown className="mb-2" /> </a>
            </div>
        </div>
    );
}