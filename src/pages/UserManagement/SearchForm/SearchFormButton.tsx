import { Button } from 'components/common/Button';
import { Dispatch, SetStateAction } from 'react';
import { useRecoilValue } from 'recoil';
import { userDataList } from 'states/userDataList';

import styles from './searchForm.module.scss';

interface Props {
  setFocusState: Dispatch<SetStateAction<boolean>>;
  setFilterData: Dispatch<SetStateAction<UserInfo[]>>;
  setSearchDataState: Dispatch<SetStateAction<UserSearchForm>>;
}

function SearchFormButton({
  setFocusState,
  setFilterData,
  setSearchDataState,
}: Props) {
  const userData = useRecoilValue(userDataList);

  const onClickResetButton = () => {
    setFocusState((prev) => !prev);
    setFilterData(userData);
    setSearchDataState((prev) => ({
      ...prev,
      userId: '',
      userNumber: '',
      prevDate: '',
      nextDate: '',
    }));
  };

  return (
    <div className={styles.buttonBox}>
      <Button size="short" className={styles.searchButton}>
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
