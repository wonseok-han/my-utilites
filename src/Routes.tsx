/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Routes as GetRoutes, Route, useLocation } from 'react-router-dom';

import { Home, Item2, Item3 } from 'pages';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <GetRoutes location={location}>
      <Route path="/" element={<Home />}>
        <Route path="/item2" element={<Item2 />} />
        <Route path="/item3" element={<Item3 />} />
      </Route>
    </GetRoutes>
  );
};

export default Routes;
