import Charts from './Charts';
import UserData from './UserData';
import styles from './userDetail.module.scss';

function UserDetail() {
  return (
    <section className={styles.userDetailWrapper}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>회원 상세 정보</h1>
      </header>
      <div className={styles.userDetail}>
        <UserData />
        <Charts />
      </div>
    </section>
  );
}

export default UserDetail;
