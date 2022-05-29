import { LogoImage } from 'assets/images';
import { HomeIcon, UserManagementIcon } from 'assets/svgs';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './snb.module.scss';

function SNB() {
  return (
    <div className={styles.snb}>
      <img src={LogoImage} alt="logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            classNames(styles.navItem, { [styles.active]: isActive })
          }
        >
          <HomeIcon className={styles.icon} />
          <span>백오피스 홈</span>
        </NavLink>
        <NavLink
          to="usermanagement"
          className={({ isActive }) =>
            classNames(styles.navItem, { [styles.active]: isActive })
          }
        >
          <UserManagementIcon className={styles.icon} />
          <span>회원 관리</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default SNB;
