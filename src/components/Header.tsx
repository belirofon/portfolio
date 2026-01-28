import { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, ChevronDown } from 'lucide-react';

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

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { title: 'Обо мне', href: '#about' },
    { title: 'Навыки', href: '#skills' },
    { title: 'Портфолио', href: '#portfolio' },
    { title: 'Услуги', href: '#services' },
    { title: 'Отзывы', href: '#testimonials' },
    { title: 'Контакты', href: '#contact' },
  ];

  const resumeItems = [
    { 
      title: 'Frontend Resume', 
      href: '/frontend.pdf'
    },
    { 
      title: 'Fullstack Resume', 
      href: '/fullstack.pdf'
    },
    { 
      title: 'Nick Fullstack', 
      href: '/nick_fullstack.pdf'
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResumeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResumeOpen(!isResumeOpen);
  };

  const handleResumeItemClick = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
    setIsResumeOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-opacity-90 backdrop-blur-sm bg-gray-900' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256">
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
            </svg>
          </a>
          
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
            <div className="relative d-none" ref={dropdownRef}>
              <button
                onClick={handleResumeClick}
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                Резюме <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isResumeOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700 z-50">
                  <div className="py-1">
                    {resumeItems.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => handleResumeItemClick(item.href)}
                        className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            <div className="relative">
              <button
                onClick={handleResumeClick}
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                Резюме <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isResumeOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {resumeItems.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => {
                        handleResumeItemClick(item.href);
                        setIsOpen(false);
                      }}
                      className="block text-sm text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <a href="https://github.com/belirofon" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-300 hover:text-purple-400 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/nick-sannikov88/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;