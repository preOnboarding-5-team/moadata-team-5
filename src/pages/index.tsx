import styles from './app.module.scss';
import LineChart from './UserDetail/LineChart';

function App() {
  return (
    <div className={styles.app}>
      Usually Router
      <div>
        <LineChart />
      </div>
    </div>
  );
}

export default App;
