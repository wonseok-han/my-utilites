import { useState } from 'react';

import ContentTitle from 'components/ContentTitle';
import {
  convertToCamelCase,
  convertToKebabCase,
  convertToPascalCase,
  convertToSentenceCase,
  convertToSnakeCase,
  convertToTitleCase,
} from 'utils/string';

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
          onChange={(event) => setSelected(event.target.value)}
          value={selected}
        >
          {cases.map((item) => (
            <option key={item.text} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
        <div className="bg-red-200">
          <button onClick={() => convertStr()}>변환</button>
        </div>
      </div>
      <div className="grid space-y-2 grid-cols-1 mt-2 sm:grid-cols-2 sm:space-x-2 sm:space-y-0">
        <textarea
          className="w-full h-96"
          placeholder="from"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
        />
        <textarea
          className="w-full h-96"
          placeholder="to"
          value={to}
          readOnly
        />
      </div>
    </>
  );
};

export default ConvertString;
