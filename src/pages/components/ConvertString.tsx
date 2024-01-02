import { useState } from 'react';

import ContentTitle from 'components/ContentTitle';
import {
  convertToCamelCase,
  convertToKebabCase,
  convertToPascalCase,
  convertToSentenceCase,
  convertToSnakeCase,
  convertToTitleCase,
} from 'lib/string';

const cases = [
  {
    text: '선택',
    value: '',
    convert: undefined,
  },
  {
    text: 'camelCase',
    value: 'camel',
    convert: convertToCamelCase,
  },
  { text: 'kebab-case', value: 'kebab', convert: convertToKebabCase },
  { text: 'PascalCase', value: 'pascal', convert: convertToPascalCase },
  {
    text: 'Sentence case',
    value: 'sentence',
    convert: convertToSentenceCase,
  },
  {
    text: 'snake_case',
    value: 'snake',
    convert: convertToSnakeCase,
  },
  {
    text: 'Title Case',
    value: 'title',
    convert: convertToTitleCase,
  },
];

const ConvertString = () => {
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [selected, setSelected] = useState<string>('');

  const convertStr = () => {
    const found = cases.find((item) => item.value === selected);
    if (!found?.convert) return;

    const fromArr = from.split('\n');
    const result = [];

    for (const fromStr of fromArr) {
      result.push(found.convert(fromStr));
    }

    setTo(result.join('\n'));
  };

  return (
    <>
      <ContentTitle text="1. Convert Case String" />
      <div className="flex w-full space-x-2">
        <select
          className="shadow-sm rounded-md hover: ring-2 hover:ring-offset-1 hover:ring-gray-500 hover:outline-none"
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
        >
          {cases.map((item) => (
            <option key={item.text} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
        <div className="bg-gray-600 text-white rounded-md p-1 shadow-sm font-semibold hover:ring-2 hover:ring-offset-1 hover:ring-gray-500 hover:outline-none">
          <button className="ml-2 mr-2" onClick={() => convertStr()}>
            Convert
          </button>
        </div>
      </div>
      <div className="grid space-y-2 grid-cols-1 mt-2 sm:grid-cols-2 sm:space-x-2 sm:space-y-0">
        <textarea
          className="w-full h-96 p-2"
          placeholder="from"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
        />
        <textarea
          readOnly
          className="w-full h-96 p-2"
          placeholder="to"
          value={to}
        />
      </div>
    </>
  );
};

export default ConvertString;
