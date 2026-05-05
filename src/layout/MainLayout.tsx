import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      {/* Add Sidebar, Header, Footer here if needed */}
      <Outlet />
    </div>
  );
}

export default MainLayout;