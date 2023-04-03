import { useState } from 'react';

import Content from 'layout/Content';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Side from 'layout/Side';
import Routes from 'Routes';

const Layout = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const handleSideToggle = () => {
    setIsSideOpen(!isSideOpen);
  };

  const handleCloseSide = () => {
    setIsSideOpen(false);
  };
  return (
    <>
      <Header onSideToggle={handleSideToggle} />
      <div className="flex min-h-screen">
        <Side isOpen={isSideOpen} onClose={handleCloseSide} />
        <div className="flex flex-col w-full min-h-full">
          <Content isSideOpen={isSideOpen}>
            <Routes />
          </Content>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
