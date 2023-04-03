import './styles/Content.css';

interface ContentProps {
  isSideOpen: boolean;
  children: React.ReactNode;
}

const Content = ({ isSideOpen, children }: ContentProps) => {
  return (
    <main
      className={`${
        isSideOpen ? 'content' : ''
      } flex-1 p-4 overflow-y-auto bg-gray-200 min-h-full`}
    >
      <div className="mx-auto t-auto pt-16">{children}</div>
    </main>
  );
};

export default Content;
