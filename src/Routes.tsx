import { Routes as GetRoutes, Route, useLocation } from 'react-router-dom';

import { Home, Libraries } from 'pages';
import NotFound from 'pages/NotFound';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <GetRoutes location={location}>
      <Route element={<Home />} path="/" />
      <Route element={<Libraries />} path="/lib" />
      <Route element={<NotFound />} path="*" />
    </GetRoutes>
  );
};

export default Routes;
