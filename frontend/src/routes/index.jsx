import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFound';
import Dashboard from '../components/Dashboard';

import GetStarted from '../components/GetStarted/GetStarted';

import Auth from '../components/Auth';
import { RequireAuth } from '../utils/RequireAuth';

const AppRouter = () => (
  <Routes>
    <Route path="/test" element={<GetStarted />} />
    <Route path="/auth" element={<Auth />} />
    <Route element={<RequireAuth />}>
      <Route path="/" element={<Dashboard />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRouter;
