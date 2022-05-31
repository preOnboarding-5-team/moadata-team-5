import SearchResult from './_components/SearchResultTable';
import styles from './dashboard.module.scss';

function Dashboard() {
  return (
    <div className={styles.tmpWrapper}>
      <SearchResult />
    </div>
  );
}

export default Dashboard;
