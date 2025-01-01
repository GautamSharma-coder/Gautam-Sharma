import { useState, useEffect } from 'react';
import { Sun, Moon, Search } from 'lucide-react'; // Add icons for dark mode and search

const Navbar = ({ darkMode, setDarkMode }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll) {
        setHidden(true); // Hide navbar on scroll down
      } else {
        setHidden(false); // Show navbar on scroll up
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-500 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        darkMode ? 'bg-gray-900 bg-opacity-80 text-white' : 'bg-white bg-opacity-70 text-black'
      } shadow-2xl backdrop-blur-md rounded-lg w-full max-w-7xl mx-auto px-6 py-4`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="flex-1 flex justify-start">
          <span className="text-xl font-bold">GS</span>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center space-x-6 items-center">
          {['about', 'projects', 'blog', 'experience', 'contact'].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`relative hover:text-blue-600 transition ${
                  activeSection === section ? 'text-blue-600' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-1 w-full transform ${
                    activeSection === section ? 'scale-x-100' : 'scale-x-0'
                  } bg-blue-600 transition-transform duration-300`}
                ></span>
              </a>
            )
          )}
        </div>

        {/* Utility Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Search className="h-5 w-5" />
          </button>
          {searchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white px-4 py-2 rounded-full w-64"
            />
          )}

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="text-sm">User</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-2">
                <ul>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer">
                    Profile
                  </li>
                  <li className="py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
