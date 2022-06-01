import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import { useTableHeader } from '../_hooks/useTableHeader';
import Header from './Header';
import styles from './searchResult.module.scss';

export default function SearchResult() {
  const { sortKey, sortDir, setSortKey, setSortDir, serachResult } =
    useTableHeader();

  const onClickHeader = (e: MouseEvent<HTMLElement>) => {
    const { key } = e.currentTarget.dataset;
    if (sortKey === key) {
      setSortDir((prev) => -prev);
    } else if (key) {
      setSortKey(key as keyof UserInfo);
      setSortDir(1);
    }
  };

  return (
    <section className={styles.wrapper}>
      <p className={styles.numResultNotf}>
        총 <mark>{serachResult.length}</mark> 명의 회원이 검색되었습니다.
      </p>
      <div className={styles.listWrapper}>
        <div className={styles.headers}>
          <Header
            dataKey="id"
            title="회원번호"
            sortKey={sortKey}
            sortDir={sortDir}
            onClick={onClickHeader}
          />
          <Header
            dataKey="registerDate"
            title="가입일"
            sortKey={sortKey}
            sortDir={sortDir}
            onClick={onClickHeader}
          />
          <Header
            dataKey="loginId"
            title="로그인ID"
            sortKey={sortKey}
            sortDir={sortDir}
            onClick={onClickHeader}
          />
          <div className={styles.dummyHeader} />
        </div>
        <ul className={styles.items}>
          {serachResult.map(({ id, loginId, registerDate }) => {
            const key = `list-row-${id}`;
            return (
              <li key={key} className={styles.item}>
                <div className={cx(styles.itemCell, styles.id)}>{id}</div>
                <div className={cx(styles.itemCell, styles.registerDate)}>
                  {registerDate}
                </div>
                <div className={cx(styles.itemCell, styles.loginId)}>
                  {loginId}
                </div>
                <div className={cx(styles.itemCell, styles.detail)}>
                  <button className={styles.detailButton} type="button">
                    <Link to={`usermanagement:${id}`}>관리</Link>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
