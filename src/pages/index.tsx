import AdminLayout from 'layouts/AdminLayout';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Dashboard from './Dashboard';
import Login from './Login';
import UserDetail from './UserDetail';
import UserManagement from './UserManagement';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="usermanagement" element={<UserManagement />} />
          <Route path="userdetail" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
