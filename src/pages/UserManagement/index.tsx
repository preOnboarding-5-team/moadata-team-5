import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userSearchResult } from 'states/userSearchResult';

import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import styles from './userManagement.module.scss';

function UserManagement() {
  const searchResult = useRecoilValue(userSearchResult);
  const [isNothing, setIsNothing] = useState(false);

  useEffect(() => {
    setIsNothing(searchResult.length === 0);
  }, [searchResult]);

  return (
    <div className={styles.managementWrapper}>
      <header className={styles.managementTitle}>
        <h2 className={styles.managementText}>회원 관리</h2>
      </header>
      <SearchForm />
      {!isNothing && <SearchResult />}
      {isNothing && <p className={styles.nothing}>검색 결과가 없습니다</p>}
    </div>
  );
}

export default UserManagement;
