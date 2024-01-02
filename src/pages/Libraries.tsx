import { Helmet } from 'react-helmet-async';

import CodeBlock from 'components/CodeBlock';
import ContentTitle from 'components/ContentTitle';
import { funcDataStr } from 'json/lib/data';
import { funcDateStr } from 'json/lib/date';
import { funcStringStr } from 'json/lib/string';

interface CodeContentProps extends FuncStrProps {
  section: string;
}

const CodeContent = ({
  section,
  id,
  name,
  funcJavascriptStr,
  funcTypescriptStr,
}: CodeContentProps) => {
  return (
    <>
      <div className="ml-4">
        <ContentTitle
          className="text-xl"
          text={`${section}-${id}. ${name}`}
          type="h2"
        />
        <CodeBlock
          javascript={funcJavascriptStr}
          typescript={funcTypescriptStr}
        />
      </div>
    </>
  );
};

const Libraries = () => {
  return (
    <>
      <Helmet>
        <title>{`wonseok-han's Lib`}</title>
      </Helmet>

      <ContentTitle text="1. Date" />
      <hr className="mt-1 h-1 bg-gray-700" />
      {funcDateStr.map((item) => (
        <CodeContent
          key={`date-${item.id}`}
          funcJavascriptStr={item.funcJavascriptStr}
          funcTypescriptStr={item.funcTypescriptStr}
          id={item.id}
          name={item.name}
          section={'1'}
        />
      ))}
      <hr className="mt-1 h-1 bg-gray-700" />

      <ContentTitle className="mt-10" text="2. Data" />
      <hr className="mt-1 h-1 bg-gray-700" />
      {funcDataStr.map((item) => (
        <CodeContent
          key={`data-${item.id}`}
          funcJavascriptStr={item.funcJavascriptStr}
          funcTypescriptStr={item.funcTypescriptStr}
          id={item.id}
          name={item.name}
          section={'2'}
        />
      ))}

      <ContentTitle className="mt-10" text="3. String" />
      <hr className="mt-1 h-1 bg-gray-700" />
      {funcStringStr.map((item) => (
        <CodeContent
          key={`string-${item.id}`}
          funcJavascriptStr={item.funcJavascriptStr}
          funcTypescriptStr={item.funcTypescriptStr}
          id={item.id}
          name={item.name}
          section={'3'}
        />
      ))}
    </>
  );
};

export default Libraries;
