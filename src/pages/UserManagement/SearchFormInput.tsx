import { Button } from 'components/common/Button';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';

import styles from './styles.module.scss';

interface Props {
  focusState: boolean;
  searchDataState: UserDataType;
  setSearchDataState: Dispatch<SetStateAction<UserDataType>>;
}

function SearchFormInput({
  searchDataState,
  setSearchDataState,
  focusState,
}: Props) {
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

  return (
    <dl className={styles.inputBox}>
      <div className={styles.inputList}>
        <dt className={styles.loginIdLabel}>로그인ID :</dt>
        <dd className={styles.loginIdDesc}>
          <input
            name="userId"
            type="text"
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
            placeholder="전체"
            onChange={onChangeInput}
            value={searchDataState.prevDate}
          />
          ~
          <input
            name="nextDate"
            type="number"
            placeholder="전체"
            onChange={onChangeInput}
            value={searchDataState.nextDate}
          />
        </dd>
        <dd className={styles.datePicker}>
          <Button
            className={styles.today}
            size="short"
            ariaLabel="date-today-button"
          >
            오늘
          </Button>
          <Button
            className={styles.week}
            size="short"
            ariaLabel="date-week-button"
          >
            1주일
          </Button>
          <Button
            className={styles.allday}
            size="short"
            ariaLabel="date-all-day-button"
          >
            전체
          </Button>
        </dd>
      </div>
    </dl>
  );
}

export default SearchFormInput;
