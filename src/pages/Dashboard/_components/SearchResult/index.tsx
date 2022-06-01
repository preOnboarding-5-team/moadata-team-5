import type { MouseEvent } from 'react';
import { useRecoilValue } from 'recoil';
import cx from 'classnames';
import { useTableHeader } from 'pages/Dashboard/_hooks/useTableHeader';
import { searchResultAtom } from '../../_states/searchResult';
import styles from './searchResult.module.scss';
import Header from './Header';

// const DATA_HEADER_LIST = [
//   {
//     dataKey: 'id',
//     title: '회원번호',
//   },
//   {
//     dataKey: 'registerDate',
//     title: '가입일',
//   },
//   {
//     dataKey: 'loginID',
//     title: '로그인ID',
//   },
// ];

export default function SearchResult() {
  const searchResult = useRecoilValue(searchResultAtom);
  const { sortKey, sortDir, setSortKey, setSortDir } = useTableHeader();

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
    <article className={styles.wrapper}>
      <p className={styles.numResultNotf}>
        총 <mark>{searchResult.length}</mark> 명의 회원이 검색되었습니다.
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
            dataKey="loginID"
            title="로그인ID"
            sortKey={sortKey}
            sortDir={sortDir}
            onClick={onClickHeader}
          />
          <div className={styles.dummyHeader} />
        </div>
        <ul className={styles.items}>
          {searchResult.map(({ id, loginID, registerDate }, idx) => {
            const key = `list-row-${id}`;
            return (
              <li
                key={key}
                className={styles.item}
                style={{ animationDelay: `${100 * idx}ms` }}
              >
                <div className={cx(styles.itemCell, styles.id)}>{id}</div>
                <div className={cx(styles.itemCell, styles.registerDate)}>
                  {registerDate}
                </div>
                <div className={cx(styles.itemCell, styles.loginID)}>
                  {loginID}
                </div>
                <div className={cx(styles.itemCell, styles.detail)}>
                  <button className={styles.detailButton} type="button">
                    관리
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
