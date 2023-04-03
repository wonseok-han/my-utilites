import { useState } from 'react';

import TocProvider from 'contexts/TocContext';
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
      <div className="flex min-h-full flex-col">
        <TocProvider>
          <Side isOpen={isSideOpen} onClose={handleCloseSide} />
          <Content isSideOpen={isSideOpen}>
            <Routes />
          </Content>
          <Footer />
        </TocProvider>
      </div>
    </>
  );
};

export default Layout;
