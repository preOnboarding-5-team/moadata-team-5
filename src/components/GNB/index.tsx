import Button from 'components/common/Button';
import { useNavigate } from 'react-router-dom';
import store from 'store';
import { loginData } from 'pages/Login/loginData.js';
import Breadcrumb from 'components/Breadcrumb';
import styles from './gnb.module.scss';

function GNB() {
  const navigate = useNavigate();

  const onClick = () => {
    const obj = { isLogin: false };

    store.set('loginData', obj);
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.gnb}>
      <div className={styles.breadcrumbWrapper}>
        <Breadcrumb />
      </div>
      <div className={styles.adminInfo}>
        <p>{loginData.id}</p>
        <Button
          className={styles.logout}
          size="short"
          type="button"
          onClick={onClick}
        >
          로그아웃
        </Button>
      </div>
    </div>
  );
}

export default GNB;
