/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { Link, useLocation } from 'react-router-dom';

interface SideProps {
  isOpen: boolean;
  onClose: () => void;
}

const Side = ({ isOpen, onClose }: SideProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } absolute inset-y-0 left-0 w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center py-3 px-4">
        <div className="text-lg font-semibold">{/* 사이드메뉴 타이틀 */}</div>
        <button className="text-gray-500 hover:text-white" onClick={onClose}>
          <HiOutlineX />
        </button>
      </div>
      <div
        className="flex justify-between items-center py-3 px-4 cursor-pointer hover:text-gray-300"
        onClick={handleExpandToggle}
      >
        <div className="text-lg font-semibold">Menu</div>
        {isExpanded ? <SlArrowDown /> : <SlArrowUp />}
      </div>
      <div
        className={`${
          isExpanded ? 'block' : 'hidden'
        } px-4 py-3 transition-all duration-300 ease-in-out`}
      >
        <Link
          to="/"
          className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 ${
            location.pathname === '/' ? 'bg-gray-700' : ''
          }`}
          onClick={onClose}
          aria-current={location.pathname === '/' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          to="/item2"
          className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 ${
            location.pathname === '/item2' ? 'bg-gray-700' : ''
          }`}
          onClick={onClose}
          aria-current={location.pathname === '/item2' ? 'page' : undefined}
        >
          Item2
        </Link>
        <Link
          to="/item3"
          className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 ${
            location.pathname === '/item3' ? 'bg-gray-700' : ''
          }`}
          onClick={onClose}
          aria-current={location.pathname === '/item3' ? 'page' : undefined}
        >
          Item3
        </Link>
      </div>
    </aside>
  );
};

export default Side;
