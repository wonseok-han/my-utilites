/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Routes as GetRoutes, Route, useLocation } from 'react-router-dom';

import { Home, Libraries } from 'pages';
import NotFound from 'pages/NotFound';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <GetRoutes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/lib" element={<Libraries />} />
      <Route path="*" element={<NotFound />} />
    </GetRoutes>
  );
};

export default Routes;
