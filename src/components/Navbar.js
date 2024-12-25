import {useState} from 'react'
const Navbar = () =>{
  const [isNavOpen, setIsNavOpen] = useState(false);
  return(
    <>
      <header className="fixed w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <div className="hidden md:flex space-x-6">
            <a
              href="#hero"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-yellow-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-yellow-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div
  className="md:hidden flex flex-col space-y-1 cursor-pointer"
  onClick={() => setIsNavOpen(!isNavOpen)}
>
  {!isNavOpen ? (
    <>
      <div className="w-8 h-1 bg-white"></div>
      <div className="w-8 h-1 bg-white"></div>
      <div className="h-1 w-1/2 ml-4 bg-white"></div>
    </>
  ) : (
    <>
      <div className="rotate-90 border-sky-100">
      <div className="w-8 h-1 bg-white translate-y-2 rotate-0"></div>
      <div className="w-8 h-1 bg-white rotate-90"></div>
      </div>
    </>
  )}
</div>


          </nav>
        {/* Mobile Navigation Menu */}
        {isNavOpen && (
          <div className="bg-gray-800 text-white py-6 space-y-4 text-center md:hidden">
            <a
              href="#hero"
              onClick={() => setIsNavOpen(false)}
              className="block hover:text-yellow-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsNavOpen(false)}
              className="block hover:text-yellow-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsNavOpen(false)}
              className="block hover:text-yellow-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsNavOpen(false)}
              className="block hover:text-yellow-400 transition duration-300"
            >
              Contact
            </a>
          </div>
        )}
      </header>
    </>
    );
}
export default Navbar;