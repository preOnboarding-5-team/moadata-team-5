import cx from 'classnames';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import styles from './breadcrumb.module.scss';

function Breadcrumb() {
  const { userId } = useParams();
  const { pathname } = useLocation();

  const routes = [
    { name: '홈', path: '/' },
    { name: '회원 관리', path: '/usermanagement' },
    { name: '회원 상세', path: `/usermanagement/${userId}` },
  ];

  const crumbs = routes.filter(({ path }) => {
    return pathname.includes(path);
  });

  const breadcrumb = crumbs.map((route) => {
    const key = route.name;
    const isCurrentPage = pathname === route.path;

    return (
      <NavLink
        key={key}
        to={route.path}
        className={cx(styles.crumbs, { [styles.currentPage]: isCurrentPage })}
      >
        {route.name}
      </NavLink>
    );
  });

  return <nav className={styles.breadcrumb}>{breadcrumb}</nav>;
}

export default Breadcrumb;
