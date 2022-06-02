import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { userDataList } from 'states';

import SearchForm from './SearchForm';
import styles from './styles.module.scss';

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
      <section className={styles.searchSection}>
        <header className={styles.title}>
          <h3 className={styles.titleText}>회원 검색</h3>
        </header>
        <SearchForm
          setFilterData={setFilterData}
          searchDataState={searchDataState}
          setSearchDataState={setSearchDataState}
        />
      </section>

      <section>
        <header className={styles.title}>
          <h3 className={styles.titleText}>검색 결과</h3>
        </header>
        <ul style={{ height: '100px' }}>
          {userList}
          {isNothing && (
            <li className={styles.nothingMessage}>검색 결과가 없습니다.</li>
          )}
        </ul>
      </section>
    </div>
  );
}

export default UserManagement;
