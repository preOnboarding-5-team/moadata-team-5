import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import cx from 'classnames';

import {
  CloseIcon,
  HomeIcon,
  LogoImage,
  MenuIcon,
  UserManagementIcon,
} from 'assets/svgs';

import styles from './snb.module.scss';

function SNB() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const menuIcon = showSidebar ? (
    <CloseIcon
      className={cx(styles.menuIcon, {
        [styles.visible]: showSidebar,
      })}
      onClick={toggleSidebar}
    />
  ) : (
    <MenuIcon
      className={cx(styles.menuIcon, {
        [styles.visible]: showSidebar,
      })}
      onClick={toggleSidebar}
    />
  );

  const onNavClick = () => {
    if (showSidebar) {
      toggleSidebar();
    }
  };

  const onLogoClick = () => {
    navigate('/');
    onNavClick();
  };

  return (
    <div className={cx(styles.snb, { [styles.visible]: showSidebar })}>
      {menuIcon}
      <div className={styles.logoWrapper}>
        <LogoImage className={styles.logo} onClick={onLogoClick} />
        <h1>백오피스</h1>
      </div>
      <nav className={styles.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cx(styles.navItem, { [styles.active]: isActive })
          }
          onClick={onNavClick}
        >
          <HomeIcon className={styles.icon} />
          <span>백오피스 홈</span>
        </NavLink>
        <NavLink
          to="usermanagement"
          className={({ isActive }) =>
            cx(styles.navItem, { [styles.active]: isActive })
          }
          onClick={onNavClick}
        >
          <UserManagementIcon className={styles.icon} />
          <span>회원 관리</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default SNB;
