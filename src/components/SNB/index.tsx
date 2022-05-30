import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { LogoImage } from 'assets/images';
import { CloseIcon, HomeIcon, MenuIcon, UserManagementIcon } from 'assets/svgs';

import styles from './snb.module.scss';

function SNB() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const menuIcon = showSidebar ? (
    <CloseIcon
      className={classNames(styles.menuIcon, {
        [styles.visible]: showSidebar,
      })}
      onClick={toggleSidebar}
    />
  ) : (
    <MenuIcon
      className={classNames(styles.menuIcon, {
        [styles.visible]: showSidebar,
      })}
      onClick={toggleSidebar}
    />
  );

  return (
    <div className={classNames(styles.snb, { [styles.visible]: showSidebar })}>
      {menuIcon}
      <img src={LogoImage} alt="logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <NavLink
          to="/"
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
