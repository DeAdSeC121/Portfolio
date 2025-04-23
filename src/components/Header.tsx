import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold tracking-tighter text-black transition-colors">
          Port<span className="text-gray-500">folio</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-black transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <ul className="flex flex-col py-4">
            {['About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
              <li key={item} className="border-b border-gray-100 last:border-0">
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 text-gray-700 hover:text-black transition-colors duration-300 uppercase tracking-wide text-sm font-medium"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;