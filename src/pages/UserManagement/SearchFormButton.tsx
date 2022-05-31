import { Button } from 'components/common/Button';
import { Dispatch, SetStateAction } from 'react';
import { useRecoilValue } from 'recoil';
import { userDataList } from 'states/Atoms';

import styles from './styles.module.scss';

interface Props {
  setFocusState: Dispatch<SetStateAction<boolean>>;
  setFilterData: Dispatch<SetStateAction<UserInfo[]>>;
  setSearchDataState: Dispatch<SetStateAction<UserDataType>>;
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
      <Button type="submit" size="short" ariaLabel="search-button">
        검색
      </Button>
      <Button
        type="submit"
        size="short"
        onClick={onClickResetButton}
        ariaLabel="filter-reset-button"
      >
        필터 초기화
      </Button>
    </div>
  );
}

export default SearchFormButton;
