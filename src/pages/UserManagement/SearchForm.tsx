import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userDataList } from 'states/Atoms';

import SearchFormButton from './SearchFormButton';
import SearchFormInput from './SearchFormInput';
import styles from './userManagement.module.scss';

interface Props {
  setFilterData: Dispatch<SetStateAction<UserInfo[]>>;
  searchDataState: UserDataType;
  setSearchDataState: Dispatch<SetStateAction<UserDataType>>;
}

function SearchForm({
  setFilterData,
  searchDataState,
  setSearchDataState,
}: Props) {
  const userData = useRecoilValue(userDataList);
  const [focusState, setFocusState] = useState(false);

  const onSubmitSearchButton = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !searchDataState.userId &&
      !searchDataState.userNumber &&
      !searchDataState.prevDate &&
      !searchDataState.nextDate
    ) {
      setFilterData(userData);
    } else if (searchDataState.userId && searchDataState.userNumber) {
      const filteredUserData = userData.filter((data) => {
        return (
          data.loginId.includes(searchDataState.userId) &&
          String(data.id).includes(searchDataState.userNumber)
        );
      });
      setFilterData(filteredUserData);
    } else if (searchDataState.userId || searchDataState.userNumber) {
      const filteredUserData = userData.filter((data) => {
        return searchDataState.userId
          ? data.loginId.includes(searchDataState.userId)
          : String(data.id).includes(searchDataState.userNumber);
      });
      setFilterData(filteredUserData);
    }
  };

  return (
    <form className={styles.searchSectionForm} onSubmit={onSubmitSearchButton}>
      <SearchFormInput
        focusState={focusState}
        searchDataState={searchDataState}
        setSearchDataState={setSearchDataState}
      />
      <SearchFormButton
        setFocusState={setFocusState}
        setFilterData={setFilterData}
        setSearchDataState={setSearchDataState}
      />
    </form>
  );
}

export default SearchForm;
