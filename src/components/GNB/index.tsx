import { useNavigate } from 'react-router-dom';

import { Button } from 'components/common/Button';
import styles from './gnb.module.scss';

function GNB() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('login', { replace: true });
  };

  // 로그인 상태가 아닐 시 로그인 페이지로 이동하는 로직 추가해야 함.

  return (
    <div className={styles.gnb}>
      <p className={styles.title}>백오피스</p>
      <div className={styles.adminInfo}>
        <p>moaadmin1</p>
        <Button size="long" onClick={onClick}>
          로그아웃
        </Button>
      </div>
    </div>
  );
}

export default GNB;
