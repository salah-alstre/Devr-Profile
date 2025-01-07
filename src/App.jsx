import { useState, useEffect } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import CertifyMe from "./components/CertifyMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    console.log("Toggling mode to:", newMode ? 'Dark' : 'Light');
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);

    if (newMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(storedMode);
    if (storedMode) {
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center w-full antialiased ${isDarkMode ? 'dark' : ''}`}>
      <main className="min-h-screen flex flex-col space-y-10 max-w-3xl py-10 px-5 sm:px-10">
        <Header />
        <About />
        <CertifyMe/>
        <Education />
        <Skills />
        <Projects />
        <Contact isDarkMode={isDarkMode} />       
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </main>
    </div>
  );
}

export default App;
