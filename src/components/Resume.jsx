import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Resume() {
    return (
        <>
            <div className="container mt-2 bg-dark p-2 rounded-3">
                <h6 className='text-white about'>RESUME</h6>
                <h1 className='text-white' style={{ textAlign: 'start' }}>CHECK OUT MY RESUME</h1>
                <div className="row mt-3">
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <h3 className='text-white text-start'>Summary</h3>
                        <div className='text-white text-start p-1'>
                            <h4 className='circle'>Pranav Sutar</h4>
                            <div className='borderLeft'><em>
                                Innovative and self-motivated computer engineering student with keen interest in programming and
                                developing technical solutions for betterment of society.
                            </em>
                                <ul>
                                    <li>Akurdi,Pune,India</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className='text-white text-start mt-2'>Education</h3>
                        <div className='text-white text-start p-1'>
                            <h4 className='circle'>Bachelor of Engineering </h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>2023-2026<sup> *</sup></h6>
                                <p><em>
                                    Pimpri Chinchwad College of Engineering, Pune, India
                                </em><br /><br />
                                    Specialization: Information Technology
                                    <br />
                                    CGPA: 7.95/10*
                                </p>
                            </div>
                            <h4 className='circle'>Diploma In Computer Engineering </h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>2020-2023</h6>
                                <p><em>
                                    Ashokrao Mane Polytechnic, Kolhapur, India
                                </em><br /><br />
                                    Diploma in Computer Engineering
                                    <br />
                                    Percentage: 91.89%
                                </p>
                            </div>
                            <h4 className='circle'>Schooling </h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>2020</h6>
                                <p><em>
                                    Shri Nageshwar HighSchool Rashiwade BK., Kolhapur, India
                                </em><br /><br />
                                    Maharashtra State Board Percentage:96%
                                </p>
                            </div>
                            <h3 className='text-white text-start mt-3'>Professional Experience</h3>
                            <div className='text-white text-start p-1'>
                                <h4 className='circle'>Kanbro Corporation</h4>
                                <div className='borderLeft'>
                                    <h6 className='allBorder'>2025</h6>
                                    <em>
                                        Software Developer Intern
                                    </em>
                                </div>
                            </div>
                            <div className='text-white text-start p-1'>
                                <h4 className='circle'>Innobyte Services</h4>
                                <div className='borderLeft'>
                                    <h6 className='allBorder'>2024</h6>
                                    <em>
                                        Web Developer Intern
                                    </em>
                                </div>
                            </div>
                            <div className='text-white text-start p-1'>
                                <h4 className='circle'>Revolution IT Solutions</h4>
                                <div className='borderLeft'>
                                    <h6 className='allBorder'>2022</h6>
                                    <em>
                                        Front End Developer Internship
                                    </em>
                                    <ul>
                                        <li>Developed an Ecommerce Website and Restaurant Website</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>

                        <h3 className='text-white text-start mt-3'>Projects</h3>
                        <div className='text-white text-start p-1'>

                            <h4 className='circle'>IOT BASED RIVER WATER QUALITY MONITORING SYSTEM<a href='https://github.com/Pranav-Sutar47/' target='blank' className='nextPage'>
                                <BsBoxArrowUpRight />
                            </a> </h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>Third Year Mega Project(Diploma)</h6>
                                <ul>
                                    <li>Real-Time Data Collection:Sensors deployed in the river measure various water quality parameters such as pH, temperature, turbidity.The data collected by these sensors is transmitted in real-time to a central server using IoT technology.</li>
                                    <li>
                                        IoT Integration:The system leverages IoT devices such as microcontrollers (Arduino) equipped with wireless communication modules (Wi-Fi Module).These devices send the collected data to a cloud-based platform for storage and analysis.
                                    </li>
                                    <li>
                                        Mobile App Interface:A user-friendly mobile app allows stakeholders (e.g., environmental agencies, District Collector) to access real-time water quality data.The app provides alerts and notifications for any significant changes or threshold breaches in water quality parameters.
                                    </li>
                                    <li>
                                        Data Analytics and Visualization:Advanced data analytics are applied to the collected data to detect trends, anomalies, and potential contamination events.
                                    </li>
                                </ul>
                            </div>

                            <h4 className='circle'>Mess Katta<a href='https://messkatta.netlify.app/' target='blank' className='nextPage'>
                                <BsBoxArrowUpRight />
                            </a> </h4>
                            <div className='borderLeft'>
                                <ul>
                                    <li>Dual Login System: Role-based authentication using JWT for Owners (menu management) and Customers (menu viewing and reviews).</li>
                                    <li>
                                    Real-Time Menu Display: Customers view menus with mess locations integrated via Google Maps API.
                                    </li>
                                    <li>
                                    Review System: Customers submit reviews and ratings for menus, enhancing decision-making and feedback.
                                    </li>
                                    <li>
                                    Owner Dashboard: Authenticated owners can manage daily menus with food items, descriptions, and prices.
                                    </li>
                                </ul>
                            </div>
                            <h4 className='circle'>Derma Sense<a href='https://github.com/Pranav-Sutar47/DermaSense' target='blank' className='nextPage'>
                                <BsBoxArrowUpRight />
                            </a> </h4>
                            <div className='borderLeft'>
                                <ul>
                                    <li>
                                    Skin Cancer Prediction: Upload an image of the affected skin area, and the AI model detects the possibility of skin cancer.
                                    </li>
                                    <li>
                                    AI-Based Preventive Measures: The detected results are analyzed using Gemini AI, which provides personalized preventive measures.
                                    </li>
                                    <li>
                                    Nearby Hospitals Locator: Integrated with Mapbox to show nearby hospitals for immediate medical assistance.
                                    </li>
                                    <li>
                                    Seamless Integration: Frontend collects user data and sends it to the backend (Express.js), which then communicates with Flask for AI-based predictions. Results are further enhanced using Gemini AI.
                                    </li>
                                </ul>
                            </div>
                            
                            <h4 className='circle'>Innoveda<a href='https://github.com/Pranav-Sutar47/Innoveda' target='blank' className='nextPage'>
                                <BsBoxArrowUpRight />
                            </a> </h4>
                            <div className='borderLeft'>
                                <ul>
                                    <li>
                                        For Students 
                                        <ul>
                                            <li>
                                            Group Registration: Students can register as a group to work collaboratively.
                                            </li>
                                            <li>
                                            Research Paper Upload: Upload PDF versions of research papers.
                                            </li>
                                            <li>
                                            View Comments: Access feedback and comments provided by faculty on the uploaded research papers.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        For Teachers 
                                        <ul>
                                            <li>
                                            Login for Faculty: Secure login for teachers to access student submissions.
                                            </li>
                                            <li>
                                            Review Papers: Check the research papers uploaded by students.
                                            </li>
                                            <li>
                                            Provide Feedback: Add comments and review notes for students to improve their work.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h6 className='text-primary'>For more projects checkout my Github!</h6>

                    </div>
                </div>

            </div>
        </>
    )
}
