import UserDetail from './UserDetail';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      Usually Router <UserDetail />
    </div>
  );
}

export default App;
