import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; // Assuming the Navbar is in the same directory
import Portfolio from './pages/portfolio';
import Hero from './components/Hero'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is previously set in localStorage
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
    if (storedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Update the body class for dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      {/* Pass darkMode state and setDarkMode function to Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* Other components */}
      <Hero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Portfolio darkMode={darkMode} setDarkMode={setDarkMode}/>
      
    </div>
  );
};

export default App;
