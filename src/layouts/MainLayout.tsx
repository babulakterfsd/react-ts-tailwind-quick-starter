import { Outlet } from '@tanstack/react-router';
import Navbar from '../components/ui/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
