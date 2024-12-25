import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, GraduationCap, Moon, Sun, FileDown, Book } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      image: "/api/placeholder/400/300"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application powered by AI, enabling smart responses and language translation features.",
      tech: ["React", "Python", "TensorFlow", "WebSocket"],
      link: "#",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Redux", "Material-UI"],
      link: "#",
      image: "/api/placeholder/400/300"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Web Development",
      date: "March 15, 2024",
      preview: "Exploring upcoming trends in web development and how they'll shape the future of the internet.",
      readTime: "5 min read"
    },
    {
      title: "Mastering React Hooks",
      date: "March 10, 2024",
      preview: "A comprehensive guide to using React Hooks effectively in your applications.",
      readTime: "8 min read"
    },
    {
      title: "Building Scalable Applications",
      date: "March 5, 2024",
      preview: "Best practices for creating applications that can grow with your user base.",
      readTime: "6 min read"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "John's work on our platform exceeded all expectations. His attention to detail and technical expertise made our project a huge success.",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupX",
      content: "Working with John was a game-changer for our startup. His innovative solutions and problem-solving skills are outstanding.",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer at DesignCo",
      content: "John has an exceptional ability to transform designs into pixel-perfect implementations. A true professional!",
      image: "/api/placeholder/64/64"
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "Python",
    "TypeScript", "TailwindCSS", "MongoDB", "AWS"
  ];

  const experience = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Led frontend development team, implemented major features, and improved performance by 40%"
    },
    {
      company: "Digital Innovations Corp",
      role: "Frontend Developer",
      period: "2020 - 2022",
      description: "Developed responsive web applications and maintained client relationships"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Gautam Sharma</span>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-4">
                <a href="#about" className="hover:text-blue-600">About</a>
                <a href="#projects" className="hover:text-blue-600">Projects</a>
                <a href="#blog" className="hover:text-blue-600">Blog</a>
                <a href="#experience" className="hover:text-blue-600">Experience</a>
                <a href="#contact" className="hover:text-blue-600">Contact</a>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={`pt-24 ${darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-600 to-indigo-700'} text-white`}>
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
            <h1 className="text-5xl font-bold mb-6">Full Stack Developer</h1>
            <p className="text-xl mb-8">Building beautiful, functional, and scalable web applications with modern technologies.</p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <FileDown className="h-5 w-5" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <div className={`flex flex-col md:flex-row items-center gap-12 ${isVisible['about'] ? 'animate-[slideUp_1s_ease-out_forwards]' : 'opacity-0'}`}>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <User className="h-8 w-8 text-blue-600" />
                About Me
              </h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                I'm a passionate full-stack developer with 5+ years of experience in building web applications.
                I specialize in React, Node.js, and modern web technologies.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/GautamSharma-coder" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:gautamksharma45@gmail.com" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${
                      darkMode
                        ? 'bg-blue-900 text-blue-200'
                        : 'bg-blue-100 text-blue-600'
                    } px-3 py-1 rounded-full text-sm transition-transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Code className="h-8 w-8 text-blue-600" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible['projects'] ? `animate-[slideUp_1s_ease-out_${index * 0.2}s_forwards]` : 'opacity-0'
                }`}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        } px-2 py-1 rounded text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Book className="h-8 w-8 text-blue-600" />
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.title}
                className={`${
                  darkMode ? 'bg-gray-900' : 'bg-gray-50'
                } rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible['blog'] ? `animate-[slideUp_1s_ease-out_${index * 0.2}s_forwards]` : 'opacity-0'
                }`}
              >
                <div className="text-sm text-blue-600 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{post.preview}</p>
                <div className="flex justify-between items-center">
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{post.readTime}</span>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">What People Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } p-6 rounded-xl shadow-lg ${
                  isVisible['testimonials'] ? `animate-[slideUp_1s_ease-out_${index * 0.2}s_forwards]` : 'opacity-0'
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{testimonial.role}</p>
                  </div>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.company}
                className={`border-l-4 border-blue-600 pl-4 ml-4 ${
                  isVisible['experience'] ? `animate-[slideRight_1s_ease-out_${index * 0.2}s_forwards]` : 'opacity-0'
                }`}
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                  {exp.company} | {exp.period}
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Mail className="h-8 w-8 text-blue-600" />
            Get In Touch
          </h2>
          <div className="max-w-xl mx-auto">
            <form className={`space-y-6 ${isVisible['contact'] ? 'animate-[fadeIn_1s_ease-in_forwards]' : 'opacity-0'}`}>
              <div>
                <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white border'
                  }`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white border'
                  }`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Message</label>
                <textarea
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 h-32 ${
                    darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white border'
                  }`}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'} py-8`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Gautam Sharma</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/GautamSharma-coder" className="hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:gautamksharma45@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;