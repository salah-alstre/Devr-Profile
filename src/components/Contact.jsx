import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Contact = ({ isDarkMode }) => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:error.salah59@gmail.com';
  };

  return (
    <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-16' id="contact">
      <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-center'>
        <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
          Get in Touch
        </span>
      </h1>
      <p className='text-gray-500 font-semibold text-lg text-center'>
        Want to chat? Send me an E-mail through this button and I'll respond whenever I can.
      </p>
      <button
        className='bg-black rounded-lg px-5 py-3 text-white font-bold text-lg hover:-translate-y-3 transition-all duration-300 border-2 hover:bg-white hover:border-black hover:text-black'
        onClick={handleEmailClick}
      >
        Contact Me
      </button>

      <div className='flex gap-5 mt-5'>
        <a href="https://github.com/salah-alstre" target="_blank" rel="noopener noreferrer">
          <FaGithub
            size={40}
            className={`transition duration-300 ${isDarkMode ? 'text-white hover:text-gray-400' : 'text-gray-800 hover:text-black'}`} 
          />
        </a>
        <a href="https://www.linkedin.com/in/salah-alstre-8aba5a322" target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            size={40}
            className={`transition duration-300 ${isDarkMode ? 'text-white hover:text-gray-400' : 'text-blue-600 hover:text-blue-800'}`} 
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
