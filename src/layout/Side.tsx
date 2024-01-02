import { useContext, useEffect, useState } from 'react';
import { FaFolder, FaRegListAlt } from 'react-icons/fa';
import { HiOutlineX } from 'react-icons/hi';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import { TocContext, TocItem } from 'contexts/TocContext';

interface SideProps {
  isOpen: boolean;
  onClose: () => void;
}

const Side = ({ isOpen, onClose }: SideProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { toc } = useContext(TocContext);
  const [tocItems, setTocItems] = useState([]);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setTocItems(toc);
  }, [toc]);

  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out z-50 min-h-full opacity-95`}
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
        <div className="text-lg font-semibold">Index</div>
        {isExpanded ? <SlArrowDown /> : <SlArrowUp />}
      </div>
      <div
        className={`${
          isExpanded ? 'block' : 'hidden'
        } px-4 py-1 transition-all duration-300 ease-in-out`}
      >
        {tocItems?.map((item: TocItem) => {
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block truncate px-3 py-2 rounded-md font-medium text-white hover:bg-gray-700 text-sm ${
                location.pathname === '/' ? 'bg-gray-700' : ''
              }`}
              style={{
                marginLeft: (item.level - 1) * 10,
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={onClose}
            >
              {item.level > 1 ? (
                <>
                  <FaRegListAlt />
                  <span className="text-ellipsis ml-2 overflow-hidden">
                    {item.text}
                  </span>
                </>
              ) : (
                <>
                  <FaFolder />
                  <span className="text-ellipsis ml-2 overflow-hidden">
                    {item.text}
                  </span>
                </>
              )}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Side;
