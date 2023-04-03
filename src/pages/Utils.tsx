import CodeBlock from 'components/CodeBlock';
import ContentTitle from 'components/ContentTitle';
import { isEmpty } from 'utils/data';
import { getDate } from 'utils/date';
import { getFunctionString } from 'utils/string';

const Utils = () => {
  return (
    <>
      <ContentTitle text="1. Date" />
      <hr className="mt-1 h-1 bg-gray-700" />
      <div className="ml-4">
        <ContentTitle text="1-1. getDate" type="h2" className="text-xl" />
        <CodeBlock code={getFunctionString(getDate)} language="javascript" />
      </div>

      <ContentTitle text="2. Data" className="mt-10" />
      <hr className="mt-1 h-1 bg-gray-700" />
      <div className="ml-4">
        <ContentTitle text="2-1. isEmpty" type="h2" className="text-xl" />
        <CodeBlock code={getFunctionString(isEmpty)} language="javascript" />
      </div>

      <ContentTitle text="3. String" className="mt-10" />
      <hr className="mt-1 h-1 bg-gray-700" />
      <div className="ml-4">
        <ContentTitle
          text="3-1. getFunctionString"
          type="h2"
          className="text-xl"
        />
        <CodeBlock
          code={getFunctionString(getFunctionString)}
          language="javascript"
        />
      </div>
    </>
  );
};

export default Utils;
