import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRecoilValue } from 'recoil';
import { userDataList } from '../states/atom';

import styles from './styles.module.scss';

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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [focusState]);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchDataState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      <dl className={styles.inputBox}>
        <div className={styles.inputList}>
          <dt className={styles.loginIdLabel}>로그인ID :</dt>
          <dd className={styles.loginIdDesc}>
            <input
              name="userId"
              type="text"
              className={styles.loginIdInput}
              placeholder="전체"
              onChange={onChangeInput}
              value={searchDataState.userId}
              ref={inputRef}
            />
          </dd>
        </div>
        <div className={styles.inputList}>
          <dt className={styles.loginNumberLabel}>회원번호 :</dt>
          <dd className={styles.loginNumberDesc}>
            <input
              name="userNumber"
              type="number"
              className={styles.loginIdInput}
              placeholder="전체"
              onChange={onChangeInput}
              value={searchDataState.userNumber}
            />
          </dd>
        </div>
        <div className={styles.inputList}>
          <dt className={styles.searchDateLabel}>조회기간 :</dt>
          <dd className={styles.searchDateDesc}>
            <input
              name="prevDate"
              type="number"
              className={styles.loginIdInput}
              placeholder="전체"
              onChange={onChangeInput}
              value={searchDataState.prevDate}
            />
            ~
            <input
              name="nextDate"
              type="number"
              className={styles.loginIdInput}
              placeholder="전체"
              onChange={onChangeInput}
              value={searchDataState.nextDate}
            />
          </dd>

          <dd className={styles.datePicker}>
            <button
              className={styles.selectToday}
              type="button"
              aria-label="select-today-button"
            >
              오늘
            </button>
            <button
              className={styles.selectWeek}
              type="button"
              aria-label="select-week-button"
            >
              1주일
            </button>
            <button
              className={styles.selectAll}
              type="button"
              aria-label="select-all-date-button"
            >
              전체
            </button>
          </dd>
        </div>
      </dl>
      <div className={styles.buttonBox}>
        <button
          className={styles.searchButton}
          type="submit"
          aria-label="search-button"
        >
          검색
        </button>
        <button
          className={styles.resetFilterButton}
          type="button"
          aria-label="reset-filter-button"
          onClick={onClickResetButton}
        >
          필터 초기화
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
