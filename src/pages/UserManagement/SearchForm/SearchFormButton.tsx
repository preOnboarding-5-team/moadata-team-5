import type { Dispatch, SetStateAction } from 'react';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { Button } from 'components/common/Button';
import { userDataList } from 'states/userDataList';
import { userSearchResult } from 'states/userSearchResult';
import { userFilterOptions } from 'states/userFilterOptions';

import styles from './searchForm.module.scss';

interface Props {
  setFocusState: Dispatch<SetStateAction<boolean>>;
  // setFilterData: Dispatch<SetStateAction<UserInfo[]>>;
  // setSearchDataState: Dispatch<SetStateAction<UserFilterOptions>>;
}

function SearchFormButton({
  setFocusState,
}: // setFilterData,
// setSearchDataState,
Props) {
  // const userData = useRecoilValue(userDataList);
  const userData = useRecoilValue(userDataList);
  const filterOptions = useRecoilValue(userFilterOptions);
  const setSearchResult = useSetRecoilState(userSearchResult);
  const resetSearchResult = useResetRecoilState(userSearchResult);
  const resetFilterOptions = useResetRecoilState(userFilterOptions);

  const onSubmitSearchButton = () => {
    const { loginId, id, prevDate, nextDate } = filterOptions;

    if (!loginId && !id && !prevDate && !nextDate) {
      setSearchResult(userData);
    } else if (loginId || id) {
      setSearchResult(
        userData.filter(
          (data) =>
            (!loginId || data.loginId.includes(loginId)) &&
            (!id || String(data.id).includes(id))
        )
      );
    }
  };

  const onClickResetButton = () => {
    setFocusState((prev) => !prev);
    resetSearchResult();
    resetFilterOptions();

    // setFilterData(userData);
    // setSearchDataState((prev) => ({
    //   ...prev,
    //   userId: '',
    //   userNumber: '',
    //   prevDate: '',
    //   nextDate: '',
    // }));
  };

  return (
    <div className={styles.buttonBox}>
      <Button
        size="short"
        className={styles.searchButton}
        onClick={onSubmitSearchButton}
      >
        검색
      </Button>
      <Button
        size="short"
        onClick={onClickResetButton}
        className={styles.resetFilterButton}
      >
        필터 초기화
      </Button>
    </div>
  );
}

export default SearchFormButton;
