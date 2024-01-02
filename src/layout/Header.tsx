// Header.tsx

import { useState } from 'react';
import { HiMenuAlt1, HiMenu } from 'react-icons/hi';
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
    <header className="h-16 flex fixed w-full justify-between items-center py-3 px-4 bg-gray-800 text-white z-50 opacity-95">
      <button
        className="text-gray-500 hover:text-white text-2xl"
        onClick={onSideToggle}
      >
        <HiMenuAlt1 />
      </button>
      <h1 className="text-lg font-bold text-white">
        <Link
          className="py-2 px-4 text-white font-semibold hover:text-gray-300"
          to="/"
        >
          {`wonseok-han's Utilities`}
        </Link>
      </h1>
      <nav className="hidden md:flex md:items-center">
        <Link
          className="py-2 px-4 text-white font-semibold hover:text-gray-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="py-2 px-4 text-white font-semibold hover:text-gray-300"
          to="/lib"
        >
          Lib
        </Link>
      </nav>
      <div className={`flex items-center md:hidden`}>
        <button
          className="text-gray-500 hover:text-white text-2xl"
          onClick={handleMenuToggle}
        >
          <HiMenu />
        </button>
        <div
          className={`absolute inset-x-0 top-16 shadow-lg md:hidden bg-gray-800 text-white ${
            isMenuOpen ? 'block' : 'hidden'
          } ${isMenuOpen ? 'slide-down' : 'slide-up'}`}
        >
          <nav className="flex flex-col items-center justify-center h-full">
            <Link
              className="py-2 px-4 text-white font-semibold hover:text-gray-300"
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              className="py-2 px-4 text-white font-semibold hover:text-gray-300"
              to="/lib"
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
