import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFound';
import Dashboard from '../components/Dashboard';
import GetStarted from '../components/GetStarted';

const AppRouter = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/" element={<GetStarted />} />
  </Routes>
);

export default AppRouter;
