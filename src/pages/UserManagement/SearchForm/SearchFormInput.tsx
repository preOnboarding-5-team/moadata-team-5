import { useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';

import { userFilterOptions } from 'states/userFilterOptions';
import { userDataList } from 'states/userDataList';
import { setUserAll } from 'utils/setDates';
import Button from 'components/common/Button';

import SearchDatePicker from './SearchDatePicker';
import SearchInput from './SearchInput';
import { useDuration } from './_hooks/useDuration';
import { useFilter } from './_hooks/useFilter';
import styles from './searchForm.module.scss';

interface Props {
  focusState: boolean;
}

const MIN_DATE = new Date(2022, 1, 1);
const MAX_DATE = new Date();

function SearchFormInput({ focusState }: Props) {
  const userData = useRecoilValue(userDataList);
  const filterOptions = useRecoilValue(userFilterOptions);

  const inputRef = useRef<HTMLInputElement>(null);

  const { start, setStart, end, setEnd } = useDuration(MIN_DATE, MAX_DATE);
  const submitFilter = useFilter();

  useEffect(() => {
    if (focusState) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [focusState]);

  const checkNumber = (e: KeyboardEvent<HTMLInputElement>) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  const handleSubmitByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    submitFilter();
  };

  const handleToday = () => {
    setStart(new Date());
    setEnd(new Date());
  };

  const handleWeek = () => {
    setStart(new Date(dayjs(end).subtract(7, 'day').format('YYYY-MM-DD')));
  };

  const handleAll = () => {
    const getMinMaxDate = setUserAll(userData);
    setEnd(new Date(getMinMaxDate.end.registerDate));
    setStart(new Date(getMinMaxDate.start.registerDate));
  };

  return (
    <dl className={styles.inputBox}>
      <div className={styles.inputList}>
        <dt className={styles.loginIdLabel}>로그인ID</dt>
        <dd className={styles.loginIdDesc}>
          <SearchInput
            inputName="loginId"
            inputValue={filterOptions.loginId}
            focusRef={inputRef}
            onKeyDown={handleSubmitByEnter}
            onKeyPress={checkNumber}
          />
        </dd>
      </div>
      <div className={styles.inputList}>
        <dt className={styles.loginNumberLabel}>회원번호</dt>
        <dd className={styles.loginNumberDesc}>
          <SearchInput
            type="number"
            inputName="id"
            inputValue={filterOptions.id}
            focusRef={inputRef}
            onKeyDown={handleSubmitByEnter}
            onKeyPress={checkNumber}
          />
        </dd>
      </div>
      <div className={styles.inputList}>
        <dt className={styles.searchDateLabel}>조회기간</dt>
        <SearchDatePicker
          start={start}
          end={end}
          setStart={setStart}
          setEnd={setEnd}
          maxDate={MAX_DATE}
          minDate={MIN_DATE}
        />
        <dd className={styles.datePickerCategory}>
          <Button className={styles.today} size="short" onClick={handleToday}>
            오늘
          </Button>
          <Button className={styles.week} size="short" onClick={handleWeek}>
            1주일
          </Button>
          <Button className={styles.allday} size="short" onClick={handleAll}>
            전체
          </Button>
        </dd>
      </div>
    </dl>
  );
}

export default SearchFormInput;
