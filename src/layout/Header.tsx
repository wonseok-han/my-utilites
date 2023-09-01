// Header.tsx

import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles/Header.css';

interface HeaderProps {
  onSideToggle: () => void;
}

const Header = ({ onSideToggle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-16 flex fixed w-full justify-between items-center py-3 px-4 bg-gray-800 text-white z-50">
      <button
        className="text-gray-500 hover:text-white text-2xl"
        onClick={onSideToggle}
      >
        <HiMenuAlt1 />
      </button>
      <h1 className="text-lg font-bold text-white">
        <Link
          to="/"
          className="py-2 px-4 text-white font-semibold hover:text-gray-300"
        >
          {`wonseok-han's Utilities`}
        </Link>
      </h1>
      <nav className="hidden md:flex md:items-center">
        <Link
          to="/"
          className="py-2 px-4 text-white font-semibold hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to="/lib"
          className="py-2 px-4 text-white font-semibold hover:text-gray-300"
        >
          Lib
        </Link>
      </nav>
      <div className={`md:hidden`}>
        <button
          className="text-gray-500 hover:text-white text-2xl"
          onClick={handleMenuToggle}
        >
          <HiMenuAlt1 />
        </button>
        <div
          className={`absolute inset-x-0 top-16 shadow-lg md:hidden bg-gray-800 text-white ${
            isMenuOpen ? 'block' : 'hidden'
          } ${isMenuOpen ? 'slide-down' : 'slide-up'}`}
        >
          <nav className="flex flex-col items-center justify-center h-full">
            <Link
              to="/"
              className="py-2 px-4 text-white font-semibold hover:text-gray-300"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              to="/lib"
              className="py-2 px-4 text-white font-semibold hover:text-gray-300"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Lib
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
