import { Outlet } from 'react-router-dom';

import GNB from 'components/GNB';
import SNB from 'components/SNB';

import styles from './adminLayout.module.scss';

function AdminLayout() {
  return (
    <div className={styles.adminLayout}>
      <SNB />
      <div className={styles.wrapper}>
        <GNB />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
