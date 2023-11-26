import React, { useState, useEffect } from 'react';
import job1 from './images/job1.jpg';
import about from './images/about.jpg';
import contact from './images/contact.jpg';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    // Home page navbar
    
  <div className="bg-gray-200">

  <div className="text-center mb-5 w-[100%] mx-auto ">
    <span className="text-blue-800 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold "><i className="fab fa-meetup text-blue-800 text-6xl mb-2 text-4xl"></i> My Campus</span>
  </div>
  <div className="flex justify-center space-x-4 mb-4 w-[100%] mx-auto">
  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block hover:shadow-2xl"><button className="hover:bg-gray-300 hover:text-black text-xs sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-2xl xl:text-2xl relative text-white py-1 sm:px-3 md:py-2 md:px-3 lg:py-3  font-semibold"> <a href="#home">Home</a></button></span>
  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block hover:shadow-2xl"><button className="hover:bg-gray-300 hover:text-black text-xs sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-2xl xl:text-2xl relative text-white py-1 sm:px-3 md:py-2 md:px-3 lg:py-3  font-semibold"><a href="#about">About</a></button></span>
  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block hover:shadow-2xl"><button className="hover:bg-gray-300 hover:text-black text-xs sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-2xl xl:text-2xl relative text-white py-1 sm:px-3 md:py-2 md:px-3 lg:py-3  font-semibold"><a href="#contact">Contact</a></button></span>
  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block hover:shadow-2xl"><button className="hover:bg-gray-300 hover:text-black text-xs sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-2xl xl:text-2xl relative text-white py-1 sm:px-3 md:py-2 md:px-3 lg:py-3  font-semibold"><Link to="/Login">Sign in</Link></button></span>
 

</div>
{/* home pic */}
<div className='w-full mb-24'>
  {/* <img src={job1}/> */}
 <img src={job1} alt=''/> 
{/* /* welcome lines */ }
<div>
<div id='home' className='absolute -mt-[50%] 2xl:-mt-[55%] xl:-mt-[45%] sm:-mt-[57%] md:-mt-[54%] text-black text-sm sm:text-2xl md:text-2xl lg:text-2xl 2xl:text-5xl xl:text-4xl font-bold  mx-2 2xl:mx-24 md:mx-5'>
<div className=''><span className='text-blue-800 text-xs sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl xl:text-5xl'>"Welcome to My Campus"</span><br></br>Join the Journey of Lifelong Learning</div>
</div>
</div>
</div>

{/* home text */}
<div>
  <div className='font-bold bg-blue-800 shadow-2xl sm:w-[70%] p-3 max-sm:mx-[7%] sm:mx-auto mt-[1%] text-white text-center sm:text-2xl md:text-3xl lg:text-2xl 2xl:text-4xl xl:text-3xl'><b>Welcome to My Campus - Your Gateway to Opportunities</b></div><br></br>
  <div className='sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto text-justify text-blue-900 text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>Are you a college student seeking exciting job opportunities? Or a company looking to discover top-tier talent? Look no further! My Campus is here to bridge the gap between talented students and prospective employers. Our innovative Campus Recruitment System streamlines the recruitment process, making it efficient and hassle-free.<br></br><br></br>With dedicated modules for students, companies, and administrators, our platform ensures that everyone's needs are met. Students can create comprehensive profiles, showcasing their academic achievements and skills. On the other side, companies can explore these profiles, finding the perfect match for their requirements. The administrator oversees the system, maintaining its integrity and effectiveness.<br></br><br></br>Join us at My Campus and unlock a world of potential – where students and companies unite to shape a future brimming with possibilities. Start your journey today!</div>
</div>
{/* about text and pic part */}
<div id='about' className='mt-[5%]'>
  <div className='sm:w-[70%] max-sm:mx-[7%] sm:mx-auto shadow-2xl mb-[5%]'>
    <img src={about} alt=''/>
  </div>
  <div className='font-bold bg-blue-800 shadow-2xl sm:w-[70%] p-3 max-sm:mx-[7%] sm:mx-auto mt-[1%] text-white text-center sm:text-2xl md:text-3xl lg:text-2xl 2xl:text-4xl xl:text-3xl  mb-[3%]'>About My Campus: Opportunities for Students and Companies</div>
  <div className='sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto mt-[1%] mb-[5%]  text-justify text-blue-900 text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>Welcome to My Campus, your ultimate destination for revolutionizing campus placements. If you're a college student with a zeal for promising career prospects, or a company in pursuit of exceptional talents, your search ends here. Our cutting-edge Campus Recruitment System redefines recruitment, bringing efficiency and simplicity to the forefront.<br></br><br></br>Our platform offers tailored modules catering to students, companies, and administrators, ensuring a harmonious experience for all. Students can craft detailed profiles, showcasing their academic prowess and skills, while companies can seamlessly navigate these profiles to identify their ideal candidates. Meanwhile, our vigilant administrator upholds the system's integrity and functionality.<br></br><br></br>Embrace the My Campus journey, where students and companies converge to shape a future brimming with possibilities. Join us today and embark on a path that leads to limitless opportunities!</div>
</div>
{/* contact text and pic part */}
<div id='contact'>
  <div className='sm:w-[70%] max-sm:mx-[7%] sm:mx-auto shadow-2xl mb-[5%]'>
    <img src={contact} alt=''/>
  </div>
  <div className='font-bold shadow-2xl bg-blue-800 sm:w-[70%] p-3 max-sm:mx-[7%] sm:mx-auto mt-[1%] text-white text-center sm:text-2xl md:text-3xl lg:text-2xl 2xl:text-4xl xl:text-3xl  mb-[3%]'>Contact Us</div>
  <div className='sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto  mt-[1%] mb-[5%]  text-justify text-blue-900 text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>Got Questions? We're Here to Assist!<br></br><br></br>Feel free to reach out to us through any of the following channels:</div>
  <div className='font-bold sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto  mt-[1%] mb-[5%] text-justify text-black text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>Phone:</div>
  <div className='sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto  mt-[1%] mb-[5%]  text-justify text-blue-900 text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>090078601</div>
  <div className='font-bold sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto  mt-[1%] mb-[5%]  text-justify text-black text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>Email:</div>
  <div className='sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto  mt-[1%] mb-[5%] text-justify text-blue-900 text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>me@gmail.com</div>
  <div className='font-bold sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto  mt-[1%] mb-[5%]  text-justify text-black text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>Address:</div>
  <div className='sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto  mt-[1%] mb-[5%] text-justify text-blue-900 text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>Karachi, Pakistan</div>
  <div className='mb-28 sm:w-[70%] mt-[1%] max-sm:mx-[7%] sm:mx-auto  mt-[1%] mb-[5%] font-bold  text-justify text-black text-xs sm:text-xl md:text-xl lg:text-lg 2xl:text-3xl xl:text-2xl'>Join My Campus today and set forth on the path to a prosperous and rewarding future!</div>
</div>
<div className='bg-gray-300 text-blue-800 py-[2%] text-xs sm:text-xl md:text-xl lg:text-xl 2xl:text-3xl xl:text-3xl font-bold m-auto text-center'>STAY CONNECTED
{/* <div className='bg-gray-300 m-auto text-center'>Stay Connected with us on Social Media: */}
<div className='mt-10 space-x-4'><span><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook text-black" ></i></a></span>
<span><a href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram text-black" ></i></a></span>
<span><a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin-in text-black"></i></a></span>
<span><a href="https://www.youtube.com/"><i className="fa-brands fa-youtube text-black"></i></a></span>
<span><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i className="fa-brands fa-square-twitter text-black"></i></a></span>
<span><a href="https://www.google.com/search?q=whatsapp&oq=what&aqs=chrome.1.69i57j0i131i433i512j69i59l2j0i131i433i512j69i60l3.4772j0j7&sourceid=chrome&ie=UTF-8"><i class="fa-brands fa-square-whatsapp text-black"></i></a></span>
</div>
</div>
</div>
  )
}