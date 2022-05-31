import { Route, Routes, useNavigate } from 'react-router-dom';

import AdminLayout from 'layouts/AdminLayout';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import store from 'store';
import Dashboard from './Dashboard';
import Login from './Login';
import UserDetail from './UserDetail';
import UserManagement from './UserManagement';
import styles from './app.module.scss';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const { expire } = store.get('loginData');
    if (expire < Date.now()) {
      navigate('login', { replace: true });
    }
  });
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="usermanagement" element={<UserManagement />} />
          <Route path="usermanagement/:userId" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
