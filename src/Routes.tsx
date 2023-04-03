/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Routes as GetRoutes, Route, useLocation } from 'react-router-dom';

import { Home, Utils } from 'pages';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <GetRoutes location={location}>
      <Route path="/" element={<Home />} />

      <Route path="/utils" element={<Utils />} />
    </GetRoutes>
  );
};

export default Routes;
