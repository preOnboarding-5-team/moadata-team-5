import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { userDataList } from 'states/Atoms';

import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import styles from './userManagement.module.scss';

function UserManagement() {
  const userData = useRecoilValue(userDataList);
  const [filterData, setFilterData] = useState(userData);
  const [searchDataState, setSearchDataState] = useState<UserDataType>({
    userId: '',
    userNumber: '',
    prevDate: '',
    nextDate: '',
  });

  const [isNothing, setIsNothing] = useState(false);

  const userList = filterData.map((user) => {
    const key = `user-${user.id}`;
    return (
      <li key={key}>
        {user.id}/{user.registerDate}/{user.loginId}
      </li>
    );
  });
  useEffect(() => {
    return filterData.length > 0 ? setIsNothing(false) : setIsNothing(true);
  }, [filterData]);

  return (
    <div className={styles.managementWrapper}>
      <header className={styles.managementTitle}>
        <h2 className={styles.managementText}>회원 관리</h2>
      </header>
      <SearchForm
        setFilterData={setFilterData}
        searchDataState={searchDataState}
        setSearchDataState={setSearchDataState}
      />
      <SearchResult />
    </div>
  );
}

export default UserManagement;
