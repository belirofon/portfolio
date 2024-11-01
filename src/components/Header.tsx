import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Обо мне', href: '#about' },
    { title: 'Навыки', href: '#skills' },
    { title: 'Портфолио', href: '#portfolio' },
    { title: 'Услуги', href: '#services' },
    { title: 'Отзывы', href: '#testimonials' },
    { title: 'Контакты', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-opacity-90 backdrop-blur-sm bg-gray-900' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256">
      <defs>
        <style>
          {`
            .bg { fill: #00D8FF; }
            .text { font-family: Arial, sans-serif; font-weight: bold; font-size: 72px; fill: #ffffff; }
          `}
        </style>
      </defs>
      <circle className="bg" cx="128" cy="128" r="128" />
      <text className="text" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
        NS
      </text>
    </svg></a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a href="https://github.com/belirofon" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-300 hover:text-purple-400 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/nick-sannikov88/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-4 pb-3 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;