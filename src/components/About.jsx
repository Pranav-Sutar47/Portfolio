import React from 'react'
import myphoto from '../assets/pranav.jpg'
import { FaChevronRight } from "react-icons/fa";
import Skills from './Skills';

export default function About() {

    const data = [
        {
            name:"C",
            src:"./resource/c.png"
        },
        {
            name:"C++",
            src:"./resource/cpp.png"
        },
        {
            name:"Java",
            src:"./resource/java.png"
        },
        {
            name:"Python",
            src:"./resource/python.png"
        },
        {
            name:"Javascript",
            src:"./resource/js.png"
        },
        {
            name:"PHP",
            src:"./resource/php.png"
        },
        {
            name:"React",
            src:"./resource/react.png"
        },
        {
            name:"Node JS",
            src:"./resource/node.png"
        },
        {
            name:"Express",
            src:"./resource/express.png"
        },
        {
            name:"MongoDB",
            src:"./resource/mongo.png"
        },
        {
            name:"Bootstrap",
            src:"./resource/bootstrap.png"
        },
        {
            name:"Git",
            src:"./resource/git.png"
        },
        {
            name:"Linux",
            src:"./resource/linux.png"
        }
    ];

  return (
    <>
    <div className='container mt-2'>
      <h6 className='text-white about'>ABOUT</h6>
      <h1 className='text-white' style={{textAlign:'start'}}>MORE ABOUT ME</h1>
      <div className='row mt-5'>
        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <img src={myphoto} className='center' alt='myPhoto' height={350} />
        </div>
        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <h3 style={{color:'green',textAlign:'start'}} className='mt-1'>Third-year at Pimpri Chinchwad College of Engineering</h3>
            <p className='italic text-white' style={{color:'white',fontStyle:'italic',textAlign:'start'}}>
            Passionate programmer who is keen on exploring opportunities.
          </p>
          <ul className='text-white navbar' style={{listStyle:'none'}}>
            <li className='nav-item'>
                <FaChevronRight style={{color:'green'}}/>
                <strong>Degree:</strong>
                B.Tech (Pursuing)
            </li>
            <li  className='nav-item'>
                <FaChevronRight style={{color:'green'}}/>
                <strong>City:</strong>
                Pune,India
            </li>
            <li className='nav-item'>
                <FaChevronRight style={{color:'green'}}/>
                <strong>Specialization:</strong>
                Information Technology
            </li>
          </ul>
          <p className='text-white' style={{textAlign:'start'}}>
          Hello! My name is Pranav Sandip Sutar , and I'm 20 years old. I am currently a student pursuing my education in BTech Information Technology at Pimpri Chinchwad College of Engineering Pune. I'm passionate about Coding, gaining knowledge and I strive to make the most of every opportunity that comes my way.
          <br/>
          I possess a range of skills that I have developed through my education and experiences. I am proficient in C programming, Python Programming, Java Programming, Data Structure, Web development, and I am always eager to learn and improve.
          </p>
        </div>
      </div>
    </div>
    <div className="container mt-5">
    <h6 className='text-white about'>SKILLS</h6>
        <div className='row'>
                {
                    data.map(
                        (ele,index)=>{
                            return(
                                <Skills {...ele} key={index}/>
                            )
                        }
                    )
                }
        </div>
    </div>
    </>
    
  )
}
