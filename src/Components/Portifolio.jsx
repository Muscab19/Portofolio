import React from 'react';
import { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import profilePic from '../assets/Muscp.png';
import aboutPic from '../assets/Muscab.png'

import projectImage1 from '../assets/image1.png';
import projectImage2 from '../assets/image2.png';
import projectImage3 from '../assets/image3.png';
import projectImage4 from '../assets/image4.png';

const projects = [
    { id: 1, image: projectImage1 },
    { id: 2, image: projectImage2 },
    { id: 3, image: projectImage3 },
    { id: 4, image: projectImage4 },
];

function Portifolio() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      // State for feedback messages
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
    
      // Handle input changes
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1000/api/send', formData);// Correct route
          if (response.data.success) {
            setSuccessMessage('Message sent successfully!');
            setErrorMessage('');
          }
        } catch (error) {
            console.error("Error submitting form:", error.response ? error.response.data : error.message);
            setErrorMessage('Failed to send message. Please try again.');
            setSuccessMessage('');
        }          
      };

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#0A0919]">
            <header className="flex items-center justify-between p-5 bg-[#100F2E]">
                <div className="text-[#FFB633] ml-[280px] border-2 border-[#FFB633] px-3 py-4 text-4xl font-bold">
                    M.
                </div>
                <ul className="flex space-x-6 text-[#FFF] text-xl font-semibold ml-0">
                    <li><a href="#home" className='hover:text-[#FFB633]'>Home</a></li>
                    <li><a href="#about" className='hover:text-[#FFB633]'>About Me</a></li>
                    <li><a href="#skills" className='hover:text-[#FFB633]'>My Skills</a></li>
                    <li><a href="#contact" className='hover:text-[#FFB633]'>Contact Me</a></li>
                </ul>
                <a href="#contact">
                    <button className="bg-[#FFB633] mr-[300px] text-xl font-semibold  py-2 px-8 rounded-full text-[#FFF] hover:opacity-80">
                        Hire Me
                    </button>
                </a>
            </header>

            <div id='home' className="flex flex-1 pt-0 px-10 pb-10"> {/* Adjusted padding-top and padding-left/right */}
                {/* Left section for icons and text */}
                <div className="flex-1 flex flex-col justify-center pr-10">
                    <div className="flex items-start mb-6"> {/* Align icons and hero text inline */}
                        <div className="flex flex-col space-y-4 mr-10"> {/* Container for icons */}
                                <a href="https://www.linkedin.com/in/muscab-maxamuud-411bb7278/" target="_blank" rel="noopener noreferrer" className="text-[#FFF] text-3xl">
                                <i className="fab hover:text-[#FFB633] fa-linkedin"></i>
                            </a>
                                <a href="https://github.com/Muscab19" target="_blank" rel="noopener noreferrer" className="text-[#FFF] text-3xl">
                                <i className="fab hover:text-[#FFB633] fa-github"></i>
                            </a>
                                <a href="https://x.com/muscabmaxamuud1" target="_blank" rel="noopener noreferrer" className="text-[#FFF] text-3xl">
                                <i className="fab hover:text-[#FFB633] fa-twitter"></i>
                            </a>
                                <a href="https://www.instagram.com/maxamud_muscab/" target="_blank" rel="noopener noreferrer" className="text-[#FFF] text-3xl hover:text-[#FFB633]">
                                <i className="fab hover:text-[#FFB633] fa-instagram"></i> {/* New Instagram icon */}
                            </a>
                        </div>
                        <div className="text-white ml-[180px]"> {/* Hero text container with added margin */}
                            <p className="text-3xl text-[#FFB633] font-semibold">Hi, I am</p>
                            <h1 className="text-6xl font-bold">Muscab Mohamud</h1> {/* Increased font size */}
                            <p className="text-3xl font-semibold mt-2 mb-2">Fullstack Web Developer</p> {/* Increased font size */}
                            <p className="text-lg">I develop full-stack, dynamic, and responsive web applications that enhance user engagement and achieve measurable results.</p>
                        </div>
                    </div>
                    <div className="flex ml-[240px] space-x-4">
                    <a href="./public/cv.pdf" 
                        download="CV.pdf">
                        <button className="bg-[#FFB633] py-3 text-xl font-semibold text-[#FFF] px-5 rounded-full hover:opacity-80">
                            Download CV
                        </button>
                    </a>
                    <a href="#contact">
                        <button className="bg-none text-[#FFB633] border-2 border-[#FFB633] py-3 text-xl font-semibold px-5 rounded-full hover:opacity-80">
                            Contact Me
                        </button>
                    </a>
                    </div>
                </div>
                {/* Right section for the image */}
                <div className="flex-1 flex items-start mt-10 justify-center"> {/* Align image to top */}
                    <img src={profilePic} alt="Your Profile" className="w-3/4 rounded-full" />
                </div>
            </div>

            <div id="about" className="flex bg-[#100F2E] py-24 pl-24 pb-10">
                <div className="">
                    <div className=" relative w-[450px] h-[500px] border-[16px] rounded-3xl border-yellow-500 bg-transparent">
                        <img src={aboutPic} className="absolute bottom-5 left-7  h-[480px] rounded-2xl" />
                    </div>
                </div>
                <div className="pl-32 pt-24">
                    <h2 className="text-white text-4xl font-bold">About <span className="text-yellow-500">me</span></h2>
                    <p className="text-gray-300 text-xl font-semibold pr-[450px] pt-5">
                    I’m Muscab Mohamud, a full-stack web developer passionate about creating 
                    innovative web solutions. With expertise in both front-end and back-end 
                    technologies, I aim to help businesses thrive online. Let's connect and 
                    bring your vision to life!
                    </p>

                    <h2 className='text-2xl font-semibold text-white mt-4'>My Interests</h2>
                    <div className='flex gap-6'>
                        <div className='flex gap-2 mt-4 bg-[#1F2937] p-4 rounded-lg shadow-lg'>
                            <i className="fa-regular fa-lightbulb text-3xl text-[#FFB633] bg-[#100F2E] py-3 px-4 rounded-full"></i>
                            <p className='text-white text-xl pt-3 font-semibold '>Innovation</p>
                        </div>
                        <div className='flex gap-2 mt-4 bg-[#1F2937] p-4 rounded-lg shadow-lg'>
                            <i className="fa-solid fa-code text-3xl text-[#FFB633] bg-[#100F2E] py-3 px-4 rounded-full"></i>
                            <p className='text-white text-xl pt-3 font-semibold'> Problem Solving</p>
                        </div>
                        <div className='flex gap-2 mt-4 bg-[#1F2937] p-4 rounded-lg shadow-lg'>
                            <i className="fa-solid fa-business-time text-3xl text-[#FFB633] bg-[#100F2E] py-3 px-4 rounded-full"></i>
                            <p className='text-white text-xl pt-3 font-semibold '>Entrepreneurship</p>
                        </div>
                        <div className='flex gap-2 mt-4 bg-[#1F2937] p-4 rounded-lg shadow-lg'>
                            <i className="fa-solid fa-user-doctor text-3xl text-[#FFB633] bg-[#100F2E] py-3 px-4 rounded-full"></i>
                            <p className='text-white text-xl pt-3 font-semibold '>Medic</p>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div id='skills' className="py-[100px] bg-[#131433] text-white rounded-lg shadow-lg">
                <h5  className="text-lg text-[#FFB633] font-semibold text-center">Why Choose Me</h5>
                <h2  className="text-4xl font-bold text-center my-4">My Expertise Area</h2>
                
                <div  className="grid grid-cols-1 px-[200px] md:grid-cols-2 gap-6">
                    <div  className="mb-6">
                        <div className='flex gap-[238px]'>
                            <h6  className="text-xl font-semibold">Front-end Development</h6>
                            <span  className="text-right font-semibold block mt-0">90%</span>
                        </div>
                        <div  className="relative w-[500px] bg-gray-700 rounded-full h-4">
                            <div  className="bg-[#FFB633] h-full rounded-full w-[90%]"></div>
                        </div>
                        
                    </div>
                    
                    <div  className="mb-6">
                        <div className='flex gap-[238px]'>
                            <h6  className="text-xl font-semibold">Back-end Development</h6>
                            <span  className="text-right font-semibold block mt-0">80%</span>
                        </div>
                        <div  className="relative w-[500px] bg-gray-700 rounded-full h-4">
                            <div  className="bg-[#FFB633] h-full rounded-full w-[80%]"></div>
                        </div>
                    </div>

                    <div  className="mb-6">
                        
                        <div className='flex gap-[258px]'>
                            <h6  className="text-xl font-semibold">Web Design</h6>
                            <span  className="text-right font-semibold block mt-0">75%</span>
                        </div>
                        <div  className="relative w-[500px] bg-gray-700 rounded-full h-4">
                            <div  className="bg-[#FFB633] h-full rounded-full w-[75%]"></div>
                        </div>
                    </div>
                    
                    <div  className="mb-6">
                        
                        <div className='flex gap-[238px]'>
                            <h6  className="text-xl font-semibold">Database Management</h6>
                            <span  className="text-right font-semibold block mt-0">70%</span>
                        </div>
                        <div  className="relative w-[500px] bg-gray-700 rounded-full h-4">
                            <div  className="bg-[#FFB633] h-full rounded-full w-[70%]"></div>
                        </div>
                    </div>
                    
                    <div  className="mb-6">
                        
                        <div className='flex gap-[238px]'>
                            <h6  className="text-xl font-semibold">Content Writing</h6>
                            <span  className="text-right font-semibold block mt-0">85%</span>
                        </div>
                        <div  className="relative w-[500px] bg-gray-700 rounded-full h-4">
                            <div  className="bg-[#FFB633] h-full rounded-full w-[85%]"></div>
                        </div>
                    </div>

                    <div  className="mb-6">
                        
                        <div className='flex gap-[238px]'>
                            <h6  className="text-xl font-semibold">API Development</h6>
                            <span  className="text-right font-semibold block mt-0">80%</span>
                        </div>
                        <div  className="relative w-[500px] bg-gray-700 rounded-full h-4">
                            <div  className="bg-[#FFB633] h-full rounded-full w-[80%]"></div>
                        </div>
                    </div>
                    
                    <div  className="mb-6">
                        
                        <div className='flex gap-[238px]'>
                            <h6  className="text-xl font-semibold">Version Control</h6>
                            <span  className="text-right font-semibold block mt-0">90%</span>
                        </div>
                        <div  className="relative w-[500px] bg-gray-700 rounded-full h-4">
                            <div  className="bg-[#FFB633] h-full rounded-full w-[90%]"></div>
                        </div>
                    </div>

                    <div  className="mb-6">
                        
                        <div className='flex gap-[238px]'>
                            <h6  className="text-xl font-semibold">Problem Solving</h6>
                            <span  className="text-right font-semibold block mt-0">85%</span>
                        </div>
                        <div  className="relative w-[500px] bg-gray-700 rounded-full h-4">
                            <div  className="bg-[#FFB633] h-full rounded-full w-[85%]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-[100px] bg-[#100F2E] text-white rounded-lg shadow-lg'>
                <h5  className="text-lg text-[#FFB633] font-semibold text-center">Specialized In</h5>
                <h2  className="text-4xl font-bold text-center my-4">What I Offer</h2>
                <div className='flex pl-[350px] gap-[60px]'>
                    <div className='border-[1px] rounded-tr-[50px] relative mt-10 border-white w-[300px] p-6'>
                        <i class="fa-solid fa-laptop-code bg-[#FFB633] absolute left-[50px] top-[-30px] p-3 rounded-lg text-3xl"></i>
                        <h2 className='text-2xl font-semibold pt-8 pb-4 '>Front-end Dev</h2>
                        <p className='text-lg '>
                            Creating interactive user interfaces with React.js 
                            for seamless experiences across devices.
                        </p>
                    </div>
                    <div className='border-[1px] rounded-tr-[50px] relative mt-10 border-white w-[300px] p-6'>
                        <i class="fa-solid fa-sitemap bg-[#FFB633] absolute left-[50px] top-[-30px] p-3 rounded-lg text-3xl"></i>
                        <h2 className='text-2xl font-semibold pt-8 pb-4 '>Back-end Dev</h2>
                        <p className='text-lg'>
                            Developing RESTful APIs using Node.js and Express.js 
                            for smooth data interactions.
                        </p>
                    </div>
                    <div className='border-[1px] rounded-tr-[50px] relative mt-10 border-white w-[300px] p-6'>
                        <i class="fa-solid fa-database bg-[#FFB633] absolute left-[50px] top-[-30px] py-3 px-4 rounded-lg text-3xl"></i>
                        <h2 className='text-2xl font-semibold pt-8 pb-4 '>Data Management:</h2>
                        <p className='text-lg '>
                            Optimizing MongoDB for efficient design and high application performance.
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-[100px] bg-[#131433] text-white rounded-lg shadow-lg'>
                <h5 className="text-lg text-[#FFB633] font-semibold text-center">My Portfolio</h5>
                <h2 className="text-4xl font-bold text-center my-4">Recent Works</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {projects.map((project) => (
                        <div key={project.id} className='relative w-[300px] h-[300px] cursor-pointer overflow-hidden rounded-lg shadow-lg'>
                            <img
                                src={project.image}
                                alt={`Project ${project.id}`}
                                className='w-full h-full object-cover'
                                onClick={() => openModal(project.image)}
                            />
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50'>
                        <img src={selectedImage} alt="Expanded project" className='max-w-full max-h-full' />
                        <button className='absolute bottom-5 text-center bg-red-500 rounded-xl px-3 py-2 text-white font-semibold text-2xl' onClick={closeModal}>
                            Close
                        </button>
                    </div>
                )}

            </div>

            <div id='contact' className='py-[100px] bg-[#100F2E] text-white rounded-lg shadow-lg'>
                <h5 className="text-lg text-[#FFB633] font-semibold text-center">Contact Me</h5>
                <h2 className="text-4xl font-bold text-center my-4">Get in Touch</h2>

                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg mb-6">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <div className='flex gap-4'>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Your Name"
                        onChange={handleChange}
                        className="mb-4 w-[245px] p-2 bg-gray-800 text-white border border-[#FFB633] focus:outline-none focus:border-[#FFB633]"
                        required
                        />
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Your Email"
                        onChange={handleChange}
                        className="mb-4 w-[245px] p-2 bg-gray-800 text-white border border-[#FFB633] focus:outline-none focus:border-[#FFB633]"
                        required
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        placeholder="Subject"
                        onChange={handleChange}
                        className="mb-4 w-[500px] p-2 bg-gray-800 text-white border border-[#FFB633] focus:outline-none focus:border-[#FFB633]"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        placeholder="Your Message"
                        onChange={handleChange}
                        className="mb-4 w-[500px] p-2 bg-gray-800 text-white border border-[#FFB633] focus:outline-none focus:border-[#FFB633]"
                        rows="4"
                        required
                    />
                    <button
                        type="button" 
                        onClick={handleSubmit}
                        className="bg-[#FFB633] text-white font-semibold text-xl px-4 py-2 rounded-lg transition duration-300 hover:bg-yellow-400"
                        >
                        Send Message
                    </button>

                    </form>

                    {/* Feedback messages */}
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
                </div>


        <footer className="bg-[#100F2E] text-white py-8 mt-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                <div className="text-[#FFB633] border-2 border-[#FFB633] px-3 py-4 text-4xl font-bold">
                    M.
                </div>
                <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF] text-3xl">
                    <i className="fab hover:text-[#FFB633] fa-linkedin"></i></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF] text-3xl">
                                <i className="fab hover:text-[#FFB633] fa-github"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF] text-3xl">
                                <i className="fab hover:text-[#FFB633] fa-twitter"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF] text-3xl hover:text-[#FFB633]">
                                <i className="fab hover:text-[#FFB633] fa-instagram"></i> {/* New Instagram icon */}</a>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
        </footer>

        </div>
    );
}

export default Portifolio;
