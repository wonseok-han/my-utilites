/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as Prism from 'prismjs';
import { useRef, useEffect, useState } from 'react';

import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const codeBlock = useRef<HTMLPreElement>(null);
  const [copyText, setCopyText] = useState('Copy');

  useEffect(() => {
    if (codeBlock.current) {
      codeBlock.current.innerHTML = Prism.highlight(
        code,
        Prism.languages[language],
        language
      );
    }
  }, [codeBlock, code, language]);

  const handleCopyClick = () => {
    if (codeBlock.current) {
      const tempElement = document.createElement('textarea');
      tempElement.value = code;
      document.body.appendChild(tempElement);
      tempElement.select();
      navigator.clipboard.writeText(code);
      document.body.removeChild(tempElement);

      setCopyText('Copied');

      setTimeout(() => {
        setCopyText('Copy');
      }, 1500);
    }
  };

  return (
    <div className="relative rounded-md overflow-hidden">
      <div className="flex justify-between items-center bg-gray-700 text-white py-2 px-3">
        <div>{language}</div>
        <button
          className="text-gray-300 hover:text-white"
          onClick={handleCopyClick}
        >
          {copyText}
        </button>
      </div>
      <pre
        ref={codeBlock}
        className="line-numbers rounded-none pre-scrollable px-4 bg-gray-800 text-white overflow-x-auto"
        style={{ margin: 0 }}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
