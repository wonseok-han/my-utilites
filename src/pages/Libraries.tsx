import CodeBlock from 'components/CodeBlock';
import ContentTitle from 'components/ContentTitle';
import { funcDataStr } from 'json/data';
import { funcDateStr } from 'json/date';
import { funcStringStr } from 'json/string';

const CodeContent = ({ id, name, funcStr }: FuncStrProps) => {
  return (
    <>
      <hr className="mt-1 h-1 bg-gray-700" />
      <div className="ml-4">
        <ContentTitle text={`1-${id}. ${name}`} type="h2" className="text-xl" />
        <CodeBlock code={funcStr} language="javascript" />
      </div>
    </>
  );
};

const Libraries = () => {
  return (
    <>
      <ContentTitle text="1. Date" />
      {funcDateStr.map((item) => (
        <CodeContent
          key={`date-${item.id}`}
          id={item.id}
          name={item.name}
          funcStr={item.funcStr}
        />
      ))}

      <ContentTitle text="2. Data" className="mt-10" />
      {funcDataStr.map((item) => (
        <CodeContent
          key={`data-${item.id}`}
          id={item.id}
          name={item.name}
          funcStr={item.funcStr}
        />
      ))}

      <ContentTitle text="3. String" className="mt-10" />
      {funcStringStr.map((item) => (
        <CodeContent
          key={`string-${item.id}`}
          id={item.id}
          name={item.name}
          funcStr={item.funcStr}
        />
      ))}
    </>
  );
};

export default Libraries;
