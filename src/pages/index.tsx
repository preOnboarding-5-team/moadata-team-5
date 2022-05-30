import styles from './app.module.scss';
import UserManagement from './UserManagement';

function App() {
  return (
    <div className={styles.app}>
      Usually Router
      <UserManagement />
    </div>
  );
}

export default App;
