import { Helmet } from 'react-helmet-async';

import Layout from 'layout/Layout';

function App() {
  return (
    <>
      <Helmet>
        <title>{`wonseok-han's utilities`}</title>
      </Helmet>
      <Layout />
    </>
  );
}

export default App;
