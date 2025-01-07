import React from 'react'
import project1 from "../../public/project-1.png"
import project2 from "../../public/project-2.png"
import project3 from "../../public/project-3.png"
import project4 from "../../public/project-4.png"
import project5 from "../../public/project-5.png"
import project6 from "../../public/project-6.png"
import project7 from "../../public/project-7.png"
import project8 from "../../public/project-8.png"
import project9 from "../../public/project-9.png"
import project10 from "../../public/project-10.png"
import project11 from "../../public/project-11.png"




const Projects = () => {
  return (
    <div className=" space-y-5 pt-10"id="Projects">
        <h1 className="font-bold text-4xl sm:text-5xl md: text-6xl
          text-center">
      <span className="bg-gradient-to-r
      from-purple-500
      to-blue-500 bg-clip-text text-transparent">
      My Project
      </ span>
      </h1>
      
      <h3 className='font-semibold text-gray-500 text-xl
      text-center'>
      I've built everything from simple websites to advanced web apps. Here
      are some of the projects I'm most proud of.
      </h3>
     <div className="flex flex-col items-center justify-center
     space-y-5 ">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://trailer-hub-sand.vercel.app/" target="_blank" rel="noopener noreferrer">
         <img src={project1} className='w-[300px] rounded-md' alt="Project 1" />
        </a>
              <h3 className="text-lg font-bold">Netflix</h3>
              <span className="text-sm text-gray-500 font-semibold">Sep 2024 - Oct 2024</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">Netflix-Like Platform
              This is a project that simulates a Netflix-like platform, developed using React with Vite. 
              The goal of this project is to showcase my abilities in web development. 
              It allows users to browse trailers of movies and shows rather than watching the full content.</p>
              <div className="flex flex-wrap gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
                from-orange-500 to-yellow-500" >JavaScript</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-blue-500 to-indigo-500" >React</div>
               <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
               <div className="py-2 px-5 border-none text-white
             font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
             from-emerald-500 to-blue-500" >Vite</div>
             <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
             from-emerald-500 to-green-500" >Node.js</div>
             <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
           from-orange-500 to-yellow-500" >MongoDB</div>
              </div>
            </div>
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://ev-bmw.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img src={project2} className='w-[300px] rounded-md' alt="Project 2" />
       </a>
              <h3 className="text-lg font-bold">Ev Bmw </h3>
              <span className="text-sm text-gray-500 font-semibold">Oct 2024 </span>
              <p className="text-xs text-gray-400 font-medium max-w-64">BMW Car Information Website
              This project is a web application that provides comprehensive information about BMW cars.
               Users can explore various models, view images, and learn about the features
                that make BMW a leading brand in the automotive industry.</p>
              <div className="flex flex-wrap gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
            from-orange-500 to-yellow-500" >JavaScript</div>
             <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-red-500 to-orange-500" >HTML</div>
               <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
             from-emerald-500 to-green-500" >Node.js</div>
              </div>
            </div>
            {/* Add more project divs as needed */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://ai-image-generator-theta-vert.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={project3} className='w-[300px] rounded-md' alt="Project 3" />
           </a>
              <h3 className="text-lg font-bold"> AI Image Generator </h3>
              <span className="text-sm text-gray-500 font-semibold">Jan 2024 - Feb 2024</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">This project is a simple web application that utilizes the OpenAI API to generate
                 images based on user-provided text descriptions. Users can describe what they want to see,
                  and the application will return a generated image based on that description.</p>
              <div className="flex gap-3 text-xs">
                <div className="flex flex-wrap gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
            from-orange-500 to-yellow-500" >JavaScript</div>
             <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-red-500 to-orange-500" >HTML</div>
               <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
             from-emerald-500 to-green-500" >Node.js</div>
              </div>
              </div>
            </div>
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://contact-form-two-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={project4} className='w-[300px] rounded-md' alt="Project 4" />
        </a>
              <h3 className="text-lg font-bold"> Contact Form</h3>
              <span className="text-sm text-gray-500 font-semibold">Aug 2024 - Oct 2024</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">This project aims to create a simple contact form using HTML
                 and CSS, featuring an attractive and user-friendly design.</p>
              <div className="flex gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-red-500 to-orange-500" >HTML</div>
              </div>
            </div>
            {/* Add more project divs as needed */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://bmw-elegance.vercel.app/" target="_blank" rel="noopener noreferrer">
         <img src={project5} className='w-[300px] rounded-md' alt="Project 5" />
        </a>
              <h3 className="text-lg font-bold"> BMW Elegance</h3>
              <span className="text-sm text-gray-500 font-semibold">Jan 2024 - Feb 2024</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">A captivating trailer showcasing the latest BMW models,
                 highlighting their design, performance, and technology.</p>
              <div className="flex gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-red-500 to-orange-500" >HTML</div>
              </div>
            </div>
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://image-search-engine-teal-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
         <img src={project6} className='w-[300px] rounded-md' alt="Project 6" />
        </a>
              <h3 className="text-lg font-bold">Image Search</h3>
              <span className="text-sm text-gray-500 font-semibold">Feb 2024 - Mar 2024</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">This project is an image search engine that utilizes the Unsplash API.
                 It allows users to search for images based on
                  input keywords and displays the results interactively.</p>
              <div className="flex gap-3 text-xs">
              <div className="flex flex-wrap gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
            from-orange-500 to-yellow-500" >JavaScript</div>
             <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-red-500 to-orange-500" >HTML</div>
               <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
             from-emerald-500 to-green-500" >Node.js</div>
              </div>
              </div>
            </div>
            
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://dev-profile-i0avhbqjt-error-25s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
         <img src={project7} className='w-[300px] rounded-md' alt="Project 7" />
        </a>
              <h3 className="text-lg font-bold"> Dev Profile</h3>
              <span className="text-sm text-gray-500 font-semibold">Jan 2024 - Feb 2024</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">This project is a User Profile Card Component built using React JSX. It provides 
                a sleek and modern way to display user information in a visually appealing format.</p>
              <div className="flex gap-3 text-xs">
              <div className="flex flex-wrap gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
            from-orange-500 to-yellow-500" >JavaScript</div>
             <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-red-500 to-orange-500" >HTML</div>
               <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
             from-emerald-500 to-green-500" >Node.js</div>
             <div className="py-2 px-5 border-none text-white
             font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
             from-emerald-500 to-blue-500" >Vite</div>
              </div>
              </div>
            </div>
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://salahcv.site/" target="_blank" rel="noopener noreferrer">
          <img src={project8} className='w-[300px] rounded-md' alt="Project 8" />
       </a>
              <h3 className="text-lg font-bold"> CV Project</h3>
              <span className="text-sm text-gray-500 font-semibold">Feb 2024 - Mar 2024</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">This project is a personal interactive CV 
                designed to showcase my skills and professional experience</p>
                <div className="flex flex-wrap gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
                from-orange-500 to-yellow-500" >JavaScript</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-blue-500 to-indigo-500" >React</div>
               <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
               <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-black" >Next.js</div>
             <div className="py-2 px-5 border-none text-white
              font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-emerald-500 to-green-500" >Node.js</div>
              </div>
            </div>
        
          </div> 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://e-drive-showcase.vercel.app/" target="_blank" rel="noopener noreferrer">
<<<<<<< HEAD
         <img src={project9} className='w-[300px] rounded-md' alt="Project 9" />
=======
         <img src={project9} className='w-[300px] rounded-md' alt="Project 1" />
>>>>>>> d0ef0afad81451af327224768ff5a82cc56de0ea
        </a>
              <h3 className="text-lg font-bold"> E-Drive Showcase</h3>
              <span className="text-sm text-gray-500 font-semibold">Jan 2024 - Feb 2024</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">This project is a User Profile Card Component built using React JSX. It provides 
                a sleek and modern way to display user information in a visually appealing format.</p>
              <div className="flex gap-3 text-xs">
              <div className="flex flex-wrap gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
            font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
            from-orange-500 to-yellow-500" >JavaScript</div>
             <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-red-500 to-orange-500" >HTML</div>
              </div>
              </div>
            </div>
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://devr-profile.vercel.app/" target="_blank" rel="noopener noreferrer">
<<<<<<< HEAD
          <img src={project10} className='w-[300px] rounded-md' alt="Project 10" />
=======
          <img src={project10} className='w-[300px] rounded-md' alt="Project 1" />
>>>>>>> d0ef0afad81451af327224768ff5a82cc56de0ea
       </a>
              <h3 className="text-lg font-bold"> Developer Portfolio</h3>
              <span className="text-sm text-gray-500 font-semibold">Feb 2024 - Mar 2024</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">This project is a personal interactive CV 
                designed to showcase my skills and professional experience</p>
                <div className="flex flex-wrap gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
                from-orange-500 to-yellow-500" >JavaScript</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-blue-500 to-indigo-500" >React</div>
               <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >CSS</div>
                <div className="py-2 px-5 border-none text-white
              font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-emerald-500 to-blue-500" >Vite</div>
             <div className="py-2 px-5 border-none text-white
              font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-emerald-500 to-green-500" >Node.js</div>
              </div>
            </div>
        
          </div> 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
           
            <div className="flex flex-col items-baseline text-left gap-2 border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <a href="https://certify-me-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={project11} className='w-[300px] rounded-md' alt="Project 11" />
       </a>
              <h3 className="text-lg font-bold"> Certify Me</h3>
              <span className="text-sm text-gray-500 font-semibold">Jan 2025 - Jan 2025</span>
              <p className="text-xs text-gray-400 font-medium max-w-64">Welcome to my portfolio website where I share my certifications, 
                technical achievements, and projects. 
                My journey in full-stack development has been guided by a passion 
                for creating innovative solutions and solving real-world
                 problems using modern technologies
               </p>
                <div className="flex flex-wrap gap-3 text-xs">
              <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
                from-orange-500 to-yellow-500" >JavaScript</div>
                <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-blue-500 to-indigo-500" >React</div>
                <div className="py-2 px-5 border-none text-white
              font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-emerald-500 to-blue-500" >Vite</div>
             <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r
               from-sky-500 to-blue-500" >TAILWIND CSS</div>
             <div className="py-2 px-5 border-none text-white
               font-semibold rounded-xl hover:opacity-75 bg-black" >Next.js</div>
               
              </div>
            </div>
        
          </div> 
 </div> 
    
 </div>

  )
}

export default Projects
