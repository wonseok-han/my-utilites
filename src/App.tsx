import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Content from 'layout/Content';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Side from 'layout/Side';
import Home from 'pages/Home';

function App() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const handleSideToggle = () => {
    setIsSideOpen(!isSideOpen);
  };

  const handleCloseSide = () => {
    setIsSideOpen(false);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header onSideToggle={handleSideToggle} />
      <div className="flex min-h-screen">
        <Side isOpen={isSideOpen} onClose={handleCloseSide} />
        <div className="flex flex-col w-full min-h-full">
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Content>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
