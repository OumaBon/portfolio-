import  { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full font-didact p-1  shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold font-didact text-blue-950">BONIFACE</h1>

        {/* Hamburger Icon */}
        <button 
          className="md:hidden flex items-center focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static w-full md:w-auto md:bg-transparent shadow-md md:shadow-none transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row">
            <li className="p-4 font-didact"><a href="#home">Home</a></li>
            <li className="p-4"><a href="#about">About</a></li>
            <li className="p-4"><a href="#skills">Services</a></li>
            <li className="p-4"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Close the menu when clicking outside */}
      {isOpen && (
        <div className="absolute inset-0 bg-black opacity-50 md:hidden" onClick={toggleMenu}></div>
      )}
    </header>
  );
}

export default Header;
