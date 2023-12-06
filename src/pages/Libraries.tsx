import CodeBlock from 'components/CodeBlock';
import ContentTitle from 'components/ContentTitle';
import { funcDataStr } from 'json/lib/data';
import { funcDateStr } from 'json/lib/date';
import { funcStringStr } from 'json/lib/string';

interface CodeContentProps extends FuncStrProps {
  section: string;
}

const CodeContent = ({ section, id, name, funcStr }: CodeContentProps) => {
  return (
    <>
      <div className="ml-4">
        <ContentTitle
          text={`${section}-${id}. ${name}`}
          type="h2"
          className="text-xl"
        />
        <CodeBlock code={funcStr} language="javascript" />
      </div>
    </>
  );
};

const Libraries = () => {
  return (
    <>
      <ContentTitle text="1. Date" />
      <hr className="mt-1 h-1 bg-gray-700" />
      {funcDateStr.map((item) => (
        <CodeContent
          key={`date-${item.id}`}
          section={'1'}
          id={item.id}
          name={item.name}
          funcStr={item.funcStr}
        />
      ))}
      <hr className="mt-1 h-1 bg-gray-700" />

      <ContentTitle text="2. Data" className="mt-10" />
      <hr className="mt-1 h-1 bg-gray-700" />
      {funcDataStr.map((item) => (
        <CodeContent
          key={`data-${item.id}`}
          section={'2'}
          id={item.id}
          name={item.name}
          funcStr={item.funcStr}
        />
      ))}

      <ContentTitle text="3. String" className="mt-10" />
      <hr className="mt-1 h-1 bg-gray-700" />
      {funcStringStr.map((item) => (
        <CodeContent
          key={`string-${item.id}`}
          section={'3'}
          id={item.id}
          name={item.name}
          funcStr={item.funcStr}
        />
      ))}
    </>
  );
};

export default Libraries;
