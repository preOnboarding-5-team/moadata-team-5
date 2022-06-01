import SearchResultTableVer from './_components/SearchResultTable';
import SearchResult from './_components/SearchResult';
import styles from './dashboard.module.scss';

function Dashboard() {
  return (
    <div className={styles.tmpWrapper}>
      <SearchResultTableVer />
      <SearchResult />
    </div>
  );
}

export default Dashboard;
