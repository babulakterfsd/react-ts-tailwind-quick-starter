import { Outlet } from '@tanstack/react-router';
import Navbar from '../components/ui/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
