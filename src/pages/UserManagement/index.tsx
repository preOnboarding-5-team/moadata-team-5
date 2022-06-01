import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userDataList } from 'states/userDataList';
import { userSearchResult } from 'states/userSearchResult';
import { userFilterOptions } from 'states/userFilterOptions';

import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import styles from './userManagement.module.scss';

function UserManagement() {
  // const userData = useRecoilValue(userDataList);
  // const [filterData, setFilterData] = useState(userData);
  // const [searchDataState, setSearchDataState] = useState<UserFilterOptions>({
  //   userId: '',
  //   userNumber: '',
  //   prevDate: '',
  //   nextDate: '',
  // });

  const searchResult = useRecoilValue(userSearchResult);
  const [isNothing, setIsNothing] = useState(false);

  useEffect(() => {
    // return searchResult.length > 0 ? setIsNothing(false) : setIsNothing(true);
    setIsNothing(searchResult.length === 0);
  }, [searchResult]);

  return (
    <div className={styles.managementWrapper}>
      <header className={styles.managementTitle}>
        <h2 className={styles.managementText}>회원 관리</h2>
      </header>
      <SearchForm
      // setFilterData={setFilterData}
      // searchDataState={searchDataState}
      // setSearchDataState={setSearchDataState}
      />
      {!isNothing && <SearchResult />}
      {isNothing && <p className={styles.nothing}>검색 결과가 없습니다</p>}
    </div>
  );
}

export default UserManagement;
