import type { Dispatch, SetStateAction } from 'react';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import dayjs from 'dayjs';
import { Button } from 'components/common/Button';
import { userDataList } from 'states/userDataList';
import { userSearchResult } from 'states/userSearchResult';
import { userFilterOptions } from 'states/userFilterOptions';

import styles from './searchForm.module.scss';

interface Props {
  setFocusState: Dispatch<SetStateAction<boolean>>;
}

function SearchFormButton({ setFocusState }: Props) {
  const userData = useRecoilValue(userDataList);
  const filterOptions = useRecoilValue(userFilterOptions);
  const setSearchResult = useSetRecoilState(userSearchResult);
  const resetSearchResult = useResetRecoilState(userSearchResult);
  const resetFilterOptions = useResetRecoilState(userFilterOptions);

  const onSubmitSearchButton = () => {
    const { loginId, id, prevDate, nextDate } = filterOptions;

    if (!loginId && !id && !prevDate && !nextDate) {
      setSearchResult(userData);
      return;
    }

    setSearchResult(
      userData.filter(
        (data) =>
          (!loginId || data.loginId.includes(loginId)) &&
          (!id || String(data.id).includes(id)) &&
          (!prevDate || dayjs(prevDate) <= dayjs(data.registerDate)) &&
          (!nextDate || dayjs(nextDate) >= dayjs(data.registerDate))
      )
    );
  };

  const onClickResetButton = () => {
    setFocusState((prev) => !prev);
    resetSearchResult();
    resetFilterOptions();
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
        초기화
      </Button>
    </div>
  );
}

export default SearchFormButton;
