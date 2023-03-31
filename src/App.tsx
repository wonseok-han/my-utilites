import CodeBlock from 'components/CodeBlock';

function App() {
  return (
    <div>
      <CodeBlock
        language="javascript"
        code={`function sum(a, b) {
  return a + b;
}`}
      />
    </div>
  );
}

export default App;
