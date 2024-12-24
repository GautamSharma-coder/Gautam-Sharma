import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textArray = ["a Developer", "an Engineer", "a Freelancer"];
  const typingSpeed = 100;
  const deletingSpeed = 50;

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < textArray[textIndex].length) {
        setTypedText((prev) => prev + textArray[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === textArray[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArray.length); // Move to next text
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, textIndex, textArray]);

  return (
    <div className="font-sans">
      {/* Navbar */}
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
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>
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

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-br from-teal-500 via-blue-500 to-purple-600 text-white min-h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-yellow-300">Gautam Sharma</span>
        </motion.h1>
        <motion.p
          className="text-2xl sm:text-3xl text-gray-200 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
         <span className="relative">I'm {typedText}</span>
          
          <span className="text-yellow-400">|</span>
        </motion.p>
        <p className="mt-6 text-lg sm:text-xl text-gray-100 max-w-lg">
          I specialize in creating dynamic, user-friendly web applications.
          Let's work together to make your vision a reality!
        </p>
        <a
          href="#contact"
          className="mt-8 bg-yellow-400 text-teal-800 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 hover:shadow-xl transition"
        >
          Contact Me
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-white text-gray-800 py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          I am a passionate web developer with experience in modern technologies
          like React, TailwindCSS, and Node.js. I enjoy building beautiful and
          functional web applications that solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Project 1", description: "Description of project 1." },
            { title: "Project 2", description: "Description of project 2." },
            { title: "Project 3", description: "Description of project 3." },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gray-900 text-white py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-teal-800 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 hover:shadow-xl transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
