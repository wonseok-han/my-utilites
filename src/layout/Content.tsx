interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <main className="flex-1 p-4 overflow-y-auto bg-gray-200 min-h-full">
      <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  );
};

export default Content;
