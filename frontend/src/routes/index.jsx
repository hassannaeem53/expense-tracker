import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFound';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRouter;
