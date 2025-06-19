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
    { title: 'Резюме (English)', href: '/frontend.pdf', icon: '' },
    { 
      title: 'Frontend', 
      href: '/nick_fullstack.pdf', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g mask="url(#a)">
            <path fill="#FF0002" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"></path>
            <path fill="#fff" d="M29.73 17.05c-.605-.625-1.465-.965-2.515-.965-1.305 0-2.307.53-2.884 1.522v-4.926h-3.026v13.503h3.026v-4.747c0-1.106.227-1.815.567-2.232.331-.416.794-.576 1.296-.576.444 0 .794.141 1.04.397.246.265.388.671.388 1.239v5.91h3.026v-6.506c0-1.107-.322-2.005-.918-2.62ZM16.199 16.085c-1.305 0-2.308.53-2.884 1.522v-4.926h-3.026v13.503h3.026v-4.747c0-1.106.227-1.815.567-2.232.331-.416.794-.576 1.296-.576.444 0 .794.141 1.04.397.246.265.388.671.388 1.239v5.91h3.026v-6.506c0-1.107-.321-2.005-.926-2.629-.596-.624-1.457-.955-2.506-.955Z"></path>
          </g>
        </svg>
      )
    },
    { title: 'Fullstack', href: '/fullstack.pdf', icon: (
      <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g mask="url(#a)">
          <path fill="#FF0002" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"></path>
          <path fill="#fff" d="M29.73 17.05c-.605-.625-1.465-.965-2.515-.965-1.305 0-2.307.53-2.884 1.522v-4.926h-3.026v13.503h3.026v-4.747c0-1.106.227-1.815.567-2.232.331-.416.794-.576 1.296-.576.444 0 .794.141 1.04.397.246.265.388.671.388 1.239v5.91h3.026v-6.506c0-1.107-.322-2.005-.918-2.62ZM16.199 16.085c-1.305 0-2.308.53-2.884 1.522v-4.926h-3.026v13.503h3.026v-4.747c0-1.106.227-1.815.567-2.232.331-.416.794-.576 1.296-.576.444 0 .794.141 1.04.397.246.265.387.671.387 1.239v5.91h3.026v-6.506c0-1.107-.321-2.005-.926-2.629-.596-.624-1.457-.955-2.506-.955Z"></path>
        </g>
      </svg>
    ) },
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                Резюме <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isResumeOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700">
                  <div className="py-1">
                    {resumeItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setIsResumeOpen(false)}
                      >
                        {item.title}
                        {item.icon && item.icon}
                      </a>
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                Резюме <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isResumeOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700">
                  <div className="py-1">
                    {resumeItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => {
                          setIsOpen(false);
                          setIsResumeOpen(false);
                        }}
                      >
                        {item.title}
                        <span className="ml-2">{item.icon || null}</span>
                      </a>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;