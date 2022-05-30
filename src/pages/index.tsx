import Dashboard from './Dashboard';
import UserManagement from './UserManagement';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Dashboard />
      <UserManagement />
    </div>
  );
}

export default App;
