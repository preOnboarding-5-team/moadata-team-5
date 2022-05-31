import { RecoilRoot } from 'recoil';
import styles from './app.module.scss';
import Dashboard from './Dashboard';

function App() {
  return (
    <RecoilRoot>
      <div className={styles.app}>Usually Router</div>
      <Dashboard />
    </RecoilRoot>
  );
}

export default App;
