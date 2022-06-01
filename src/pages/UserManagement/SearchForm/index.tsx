import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userDataList } from 'states/userDataList';
import { userSearchResult } from 'states/userSearchResult';
import { userFilterOptions } from 'states/userFilterOptions';

import SearchFormButton from './SearchFormButton';
import SearchFormInput from './SearchFormInput';
import styles from './searchForm.module.scss';

// interface Props {
// setFilterData: Dispatch<SetStateAction<UserInfo[]>>;
// searchDataState: UserFilterOptions;
// setSearchDataState: Dispatch<SetStateAction<UserFilterOptions>>;
// }

function SearchForm() {
  const [focusState, setFocusState] = useState(false);

  // } else if (loginId && id) {
  //   const filteredUserData = userData.filter((data) => {
  //     return (
  //       data.loginId.includes(searchDataState.userId) &&
  //       String(data.id).includes(searchDataState.userNumber)
  //     );
  //   });
  //   setFilterData(filteredUserData);
  // } else if (searchDataState.userId || searchDataState.userNumber) {
  //   const filteredUserData = userData.filter((data) => {
  //     return searchDataState.userId
  //       ? data.loginId.includes(searchDataState.userId)
  //       : String(data.id).includes(searchDataState.userNumber);
  //   });
  //   setFilterData(filteredUserData);
  // }
  // };

  // const userData = useRecoilValue(userDataList);
  // const filterOptions = useRecoilValue(userFilterOptions);
  // const setSearchResult = useSetRecoilState(userSearchResult);

  // const onSubmitByEnter = (e: KeyboardEvent) => {
  //   if (e.key !== 'Enter' || !focusState) return;

  //   const { loginId, id, prevDate, nextDate } = filterOptions;

  //   if (!loginId && !id && !prevDate && !nextDate) {
  //     setSearchResult(userData);
  //   } else if (loginId || id) {
  //     setSearchResult(
  //       userData.filter(
  //         (data) =>
  //           (!loginId || data.loginId.includes(loginId)) &&
  //           (!id || String(data.id).includes(id))
  //       )
  //     );
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('keydown', onSubmitByEnter);
  //   return () => document.removeEventListener('keydown', onSubmitByEnter);
  // });

  return (
    <section className={styles.searchSection}>
      <header className={styles.title}>
        <h3 className={styles.titleText}>회원 검색</h3>
      </header>
      <form className={styles.searchSectionForm}>
        <SearchFormInput
          focusState={focusState}
          setFocusState={setFocusState}
        />
        <SearchFormButton setFocusState={setFocusState} />
      </form>
    </section>
  );
}

export default SearchForm;
