
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

// Simple placeholder components for your pages
const Dashboard = () => <div className="text-2xl font-bold">Dashboard Content</div>;
const Profile = () => <div className="text-2xl font-bold">User Profile</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Everything inside this Route will have the Sidebar, Header, and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* Redirect home to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
