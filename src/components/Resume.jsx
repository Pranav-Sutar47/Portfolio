import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Resume() {
    return (
        <>
            <div className="container mt-2">
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
                                </em><br/><br/>
                                Specialization: Information Technology 
                                <br/>
                                CGPA: 7.8/10*
                                </p>
                            </div>
                            <h4 className='circle'>Diploma In Computer Engineering </h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>2020-2023</h6>
                                <p><em>
                                Ashokrao Mane Polytechnic, Kolhapur, India
                                </em><br/><br/>
                                Diploma in Computer Engineering 
                                <br/>
                                Percentage: 91.89%
                                </p>
                            </div>
                            <h4 className='circle'>Schooling </h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>2020</h6>
                                <p><em>
                                Shri Nageshwar HighSchool Rashiwade BK., Kolhapur, India
                                </em><br/><br/>
                                Maharashtra State Board Percentage:96%
                                </p>
                            </div>
                            <h3 className='text-white text-start mt-3'>Professional Experience</h3>
                    <div className='text-white text-start p-1'>
                            <h4 className='circle'>Microchip</h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>2024</h6>
                            <em>
                            Embedded System Developer Internshhip
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
                            <BsBoxArrowUpRight/>
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

                            <h4 className='circle'>PANDA NEWS<a href='https://github.com/Pranav-Sutar47/' target='blank' className='nextPage'>
                            <BsBoxArrowUpRight/>
                            </a> </h4>
                            <div className='borderLeft'>
                            <ul>
                                <li>News Monkey is a dynamic news application designed to keep users updated with the latest news worldwide. It is built using React.js and leverages the NewsAPI to fetch news articles. </li>
                                <li>
                                Customization: Users can customize their news feed based on their country of interest, ensuring they receive relevant news that matters most to them.
                                </li>
                                <li>
                                User-Friendly Interface: The application is designed to be intuitive and easy to use, providing a seamless experience for browsing news.
                                </li>
                                <li>
                                Responsive Design: The app is responsive and works well across different devices, including desktops, tablets, and smartphones.
                                </li>
                            </ul>
                            </div>
                            <h4 className='circle'>Notepad<a href='https://github.com/Pranav-Sutar47/Notepad' target='blank' className='nextPage'>
                            <BsBoxArrowUpRight/>
                            </a> </h4>
                            <div className='borderLeft'>
                            <ul>
                                <li>Notepad is a simple text editor developed using Python GUI Programming.</li>
                                <li>
                                Text Editing:Notepad is primarily used for creating and editing plain text files.It supports basic text editing features like cut, copy, paste.
                                </li>
                                <li>
                                Lightweight and Fast:Notepad is a very lightweight application that launches quickly and consumes minimal system resources.
                                </li>
                                <li>
                                File Types:Notepad typically saves files with a .txt extension, but it can open and edit many other file types, such as .html, .css, .js, and .bat.
                                </li>
                            </ul>
                            </div>
                            <h4 className='circle'>INSTA CAFE AND RESTAURANT<a href='https://github.com/Pranav-Sutar47/InstaCafeAndRestaurant' target='blank' className='nextPage'>
                            <BsBoxArrowUpRight/>
                            </a> </h4>
                            <div className='borderLeft'>
                            <ul>
                                <li>Online Ordering System:The website allows customers to place orders online, streamlining the order-taking process for the cafe or restaurant.Customers can browse the menu, select items, and complete their orders through the website.</li>
                                <li>
                                Menu Management:The website includes an admin panel where the restaurant can manage its menu.Items can be added, removed, or updated easily to reflect current offerings
                                </li>
                                <li>
                                Responsive Design:The website is designed to be responsive, ensuring it works well on desktops, tablets, and smartphones.
                                </li>
                                <li>
                                Order Notifications:The system sends email or SMS notifications to customers to confirm orders and provide updates.Restaurant staff also receive notifications for new orders.
                                </li>
                            </ul>
                            </div>
                    </div> 
                    
                       
                    </div>
                </div>

            </div>
        </>
    )
}
