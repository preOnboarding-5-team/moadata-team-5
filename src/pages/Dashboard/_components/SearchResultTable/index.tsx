import type { MouseEvent } from 'react';
import { useRecoilValue } from 'recoil';
import cx from 'classnames';
import { useTableHeader } from 'pages/Dashboard/_hooks/useTableHeader';
import { searchResultAtom } from '../../_states/searchResult';
import styles from './searchResult.module.scss';
import TableHeader from './TableHeader';

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

  const rows = searchResult.map(({ id, loginID, registerDate }, idx) => {
    const key = `table-row-${id}`;
    return (
      <tr key={key} className={cx({ [styles.odd]: idx % 2 === 1 })}>
        <td>{id}</td>
        <td>{registerDate}</td>
        <td>{loginID}</td>
        <td>
          <button className={styles.toManage} type="button">
            관리
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className={styles.wrapper}>
      <p className={styles.numResult}>
        총 <strong>{searchResult.length}</strong> 명의 회원이 검색되었습니다.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.theadRow}>
              <TableHeader
                dataKey="id"
                title="회원번호"
                sortKey={sortKey}
                sortDir={sortDir}
                onClick={onClickHeader}
              />
              <TableHeader
                dataKey="registerDate"
                title="가입일"
                sortKey={sortKey}
                sortDir={sortDir}
                onClick={onClickHeader}
              />
              <TableHeader
                dataKey="loginID"
                title="로그인ID"
                sortKey={sortKey}
                sortDir={sortDir}
                onClick={onClickHeader}
              />
              <th className={styles.detail}> </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}
