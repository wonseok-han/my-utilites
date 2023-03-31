// Header.tsx

import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onSideToggle: () => void;
}

const Header = ({ onSideToggle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex fixed w-full justify-between items-center py-3 px-4 bg-gray-900 text-white">
      <button className="text-gray-500 hover:text-white" onClick={onSideToggle}>
        <HiMenuAlt1 />
      </button>
      <h1 className="text-lg font-bold text-white">{`wonseok-han's Utilites`}</h1>
      <nav className="hidden md:flex md:items-center">
        <Link
          to="/"
          className="py-2 px-4 text-white font-semibold hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to="/item2"
          className="py-2 px-4 text-white font-semibold hover:text-gray-300"
        >
          Item2
        </Link>
        <Link
          to="/item3"
          className="py-2 px-4 text-white font-semibold hover:text-gray-300"
        >
          Item3
        </Link>
      </nav>
      <div className="md:hidden">
        <button
          className="text-gray-500 hover:text-white"
          onClick={handleMenuToggle}
        >
          <HiMenuAlt1 />
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute inset-0 bg-gray-900 text-white z-40`}
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
              to="/item2"
              className="py-2 px-4 text-white font-semibold hover:text-gray-300"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Item2
            </Link>
            <Link
              to="/item3"
              className="py-2 px-4 text-white font-semibold hover:text-gray-300"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Item3
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
