import * as Prism from 'prismjs';
import { useEffect, useRef, useState } from 'react';

import { prismJavascript, prismTypescript } from 'lib/prismjs';

import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  javascript: string;
  typescript: string;
}

const CodeBlock = ({ javascript, typescript }: CodeBlockProps) => {
  const codeBlock = useRef<HTMLPreElement>(null);
  const [copyText, setCopyText] = useState('Copy');
  const [selected, setSelected] = useState('javascript');
  const [code, setCode] = useState(
    selected === 'javascript' ? javascript : typescript
  );
  const [prismObj, setPrismObj] = useState(Prism);

  useEffect(() => {
    if (selected === 'typescript') {
      setPrismObj(prismTypescript(Prism));
    } else {
      setPrismObj(prismJavascript(Prism));
    }
  }, [selected]);

  useEffect(() => {
    if (codeBlock.current) {
      codeBlock.current.innerHTML = prismObj.highlight(
        code,
        prismObj.languages[selected],
        selected
      );
    }
  }, [codeBlock, code, prismObj]);

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

  const handleLanguageClick = (language: string) => {
    setSelected(language);
    setCode(language === 'javascript' ? javascript : typescript);
  };

  return (
    <div className="relative rounded-md overflow-hidden">
      <div className="flex justify-between items-center bg-gray-700 text-white py-2 px-3">
        <div className="flex gap-1">
          <div
            className={`border-2 p-1 px-3 rounded-md cursor-pointer ${
              selected === 'javascript'
                ? 'bg-white text-gray-900 font-extrabold'
                : 'bg-transparent'
            }`}
            onClick={() => handleLanguageClick('javascript')}
          >
            Javascript
          </div>
          <div
            className={`border-2 p-1 px-3 rounded-md cursor-pointer ${
              selected === 'typescript'
                ? 'bg-white text-gray-900 font-extrabold'
                : 'bg-transparent'
            }`}
            onClick={() => handleLanguageClick('typescript')}
          >
            Typescript
          </div>
        </div>
        <button
          className="text-gray-300 hover:text-white"
          onClick={handleCopyClick}
        >
          {copyText}
        </button>
      </div>
      <pre
        className="line-numbers rounded-none pre-scrollable px-4 bg-gray-800 text-white overflow-x-auto"
        ref={codeBlock}
        style={{ margin: 0 }}
      >
        <code className={`language-${selected}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
