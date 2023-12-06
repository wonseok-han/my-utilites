import { BrowserRouter as Router } from 'react-router-dom';

import Layout from 'layout/Layout';

function App() {
  return (
    <Router basename="/">
      <Layout />
    </Router>
  );
}

export default App;
