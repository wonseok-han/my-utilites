import { useContext, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TocItem, TocContext } from 'contexts/TocContext';
import './styles/Content.css';

interface ContentProps {
  isSideOpen: boolean;
  children: React.ReactNode;
}

const Content = ({ isSideOpen, children }: ContentProps) => {
  const { setToc } = useContext(TocContext);
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headings = Array.from(
      contentRef.current?.querySelectorAll('h1, h2, h3, h4, h5, h6')
    ) as unknown as NodeListOf<HTMLElement>;

    const toc = Array.from(headings).map((heading, index): TocItem => {
      const level = parseInt(heading.tagName.substring(1));
      const id = `heading-${level}-${index}`; // 고유한 id를 생성합니다.
      heading.setAttribute('id', id); // 해당 요소에 id attribute를 할당합니다.

      return {
        level,
        id,
        text: heading.textContent,
      };
    });

    setToc(toc);
  }, [children, location]);

  return (
    <main
      ref={contentRef}
      className={`${
        isSideOpen ? 'sideOpenContent' : ''
      } bg-gray-200 min-h-screen min-w-full py-14 t-auto pt-20 px-4`}
    >
      {children}
    </main>
  );
};

export default Content;
