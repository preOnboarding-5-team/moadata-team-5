import styles from './dashboard.module.scss';

function Dashboard() {
  return (
    <div className={styles.dashboardWrapper}>
      <header>
        <h2 className={styles.dashboardTitle}>백 오피스 홈 대시보드</h2>
      </header>
      <section className={styles.dashboardContainer} />
    </div>
  );
}

export default Dashboard;
