import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import store from 'store';

import AdminLayout from 'layouts/AdminLayout';
import Dashboard from './Dashboard';
import Login from './Login';
import UserDetail from './UserDetail';
import UserManagement from './UserManagement';

import styles from './app.module.scss';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.get('loginData')) {
      const obj = { isLogin: false };
      store.set('loginData', obj);
    }
    if (store.get('loginData').expire < Date.now()) {
      const obj = { isLogin: false };
      store.set('loginData', obj);
    }
    if (!store.get('loginData').isLogin) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  if (!store.get('loginData')?.isLogin) {
    return (
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Login />} />;
        </Routes>
      </div>
    );
  }
  return (
    <div className={styles.app}>
      <Routes>
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
