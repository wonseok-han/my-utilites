import CodeBlock from 'components/CodeBlock';
import ContentTitle from 'components/ContentTitle';

const Libraries = () => {
  return (
    <>
      <ContentTitle text="1. Date" />
      <hr className="mt-1 h-1 bg-gray-700" />
      <div className="ml-4">
        <ContentTitle text="1-1. getDate" type="h2" className="text-xl" />
        <CodeBlock
          code={`const isEmpty = (value) => {
  return value === null || value === undefined || value === '';
};`}
          language="javascript"
        />
      </div>

      <ContentTitle text="2. Data" className="mt-10" />
      <hr className="mt-1 h-1 bg-gray-700" />
      <div className="ml-4">
        <ContentTitle text="2-1. isEmpty" type="h2" className="text-xl" />
        <CodeBlock
          code={`const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10
      ? '0' + (date.getMonth() + 1).toString()
      : date.getMonth() + 1;
  const day =
    date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();

  return \`\${year}\${month}\${day}\`;
};`}
          language="javascript"
        />
      </div>

      <ContentTitle text="3. String" className="mt-10" />
    </>
  );
};

export default Libraries;
