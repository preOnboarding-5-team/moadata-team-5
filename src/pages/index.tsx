import { Route, Routes } from 'react-router-dom';

import AdminLayout from 'layouts/AdminLayout';
import Dashboard from './Dashboard';
import Login from './Login';
import UserDetail from './UserDetail';
import UserManagement from './UserManagement';

import styles from './app.module.scss';
import Charts from './UserDetail/Charts';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="usermanagement" element={<UserManagement />} />
          <Route path="usermanagement/:userId" element={<UserDetail />} />
          <Route path="chartTest" element={<Charts />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
