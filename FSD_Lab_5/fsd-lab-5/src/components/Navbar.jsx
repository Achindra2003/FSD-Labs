import { useState } from 'react';
import { BookOpen, X } from 'lucide-react';

const Navbar = ({ navigateTo, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'courses', text: 'Courses' },
    { id: 'contact', text: 'Contact' },
  ];

  const linkClasses = (page) =>
    `cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      currentPage === page
        ? 'bg-indigo-600 text-white shadow-sm'
        : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
    }`;

  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a onClick={() => navigateTo('home')} className="cursor-pointer text-2xl font-bold text-indigo-600 flex items-center">
              <BookOpen className="h-8 w-8 mr-2" />
              IntelliLearn
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <a key={link.id} onClick={() => navigateTo(link.id)} className={linkClasses(link.id)}>
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a key={link.id} onClick={() => { navigateTo(link.id); setIsMenuOpen(false); }} className={`${linkClasses(link.id)} block`}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
