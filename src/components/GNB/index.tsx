import { useNavigate } from 'react-router-dom';
import store from 'store';

import styles from './gnb.module.scss';

function GNB() {
  const navigate = useNavigate();

  const onClick = () => {
    const obj = { isLogin: false };

    store.set('loginData', obj);
    navigate('login', { replace: true });
  };

  return (
    <div className={styles.gnb}>
      <p className={styles.title}>백오피스</p>
      <div className={styles.adminInfo}>
        <p>moaadmin1</p>
        <button type="button" onClick={onClick}>
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default GNB;
