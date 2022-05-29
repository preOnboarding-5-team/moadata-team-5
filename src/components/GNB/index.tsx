import styles from './gnb.module.scss';

function GNB() {
  return (
    <div className={styles.gnb}>
      <p className={styles.title}>백오피스</p>
      <div className={styles.adminInfo}>
        <p>moaadmin1</p>
        <button type="button">로그아웃</button>
      </div>
    </div>
  );
}

export default GNB;
