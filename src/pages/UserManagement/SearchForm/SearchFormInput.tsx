import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { userFilterOptions } from 'states/userFilterOptions';
import { userDataList } from 'states/userDataList';
import { userSearchResult } from 'states/userSearchResult';
import { setUserAll, setToday, setWeek } from 'utils/setDates';

import dayjs from 'dayjs';

import Button from 'components/common/Button';
import SearchDatePicker from './SearchDatePicker';
import './datePicker.scss';
import styles from './searchForm.module.scss';
import SearchInput from './SearchInput';

interface Props {
  focusState: boolean;
}

const MIN_DATE = new Date(2022, 0, 1);
const MAX_DATE = new Date(2022, 11, 31);

function SearchFormInput({ focusState }: Props) {
  const userData = useRecoilValue(userDataList);
  const setSearchResult = useSetRecoilState(userSearchResult);
  const [filterOptions, setFilterOptions] = useRecoilState(userFilterOptions);
  const inputRef = useRef<HTMLInputElement>(null);

  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());

  useEffect(() => {
    setStart(
      filterOptions.prevDate ? new Date(filterOptions.prevDate) : MIN_DATE
    );
  }, [filterOptions.prevDate]);
  useEffect(() => {
    setEnd(
      filterOptions.nextDate ? new Date(filterOptions.nextDate) : MAX_DATE
    );
  }, [filterOptions.nextDate]);

  useEffect(() => {
    if (focusState) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [focusState]);

  const checkNumber = (e: KeyboardEvent<HTMLInputElement>) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  const onSubmitByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const { loginId, id, prevDate, nextDate } = filterOptions;
    const dataFilter = userData.filter(
      (data) =>
        (!loginId || data.loginId.includes(loginId)) &&
        (!id || String(data.id).includes(id)) &&
        (!prevDate || dayjs(prevDate) <= dayjs(data.registerDate)) &&
        (!nextDate || dayjs(nextDate) >= dayjs(data.registerDate))
    );
    if (!loginId && !id && !prevDate && !nextDate) {
      setSearchResult(userData);
      return;
    }
    setSearchResult(dataFilter);
  };

  const onChangeStartCalendar = (selectedDate: Date) => {
    if (selectedDate > end) {
      setFilterOptions((prev) => ({
        ...prev,
        prevDate: dayjs(selectedDate).format('YYYY-MM-DD'),
        nextDate: dayjs(selectedDate).format('YYYY-MM-DD'),
      }));
    } else {
      setFilterOptions((prev) => ({
        ...prev,
        prevDate: dayjs(selectedDate).format('YYYY-MM-DD'),
      }));
    }
  };

  const onChangeEndCalendar = (selectedDate: Date) => {
    if (selectedDate < start) {
      setFilterOptions((prev) => ({
        ...prev,
        prevDate: dayjs(selectedDate).format('YYYY-MM-DD'),
        nextDate: dayjs(selectedDate).format('YYYY-MM-DD'),
      }));
    } else {
      setFilterOptions((prev) => ({
        ...prev,
        nextDate: dayjs(selectedDate).format('YYYY-MM-DD'),
      }));
    }
  };
  const handleToday = () => {
    setStart(new Date(setToday()));
    setEnd(new Date(setToday()));
    setFilterOptions((prev) => ({
      ...prev,
      prevDate: dayjs(setToday()).format('YYYY-MM-DD'),
      nextDate: dayjs(setToday()).format('YYYY-MM-DD'),
    }));
  };

  const handleWeek = () => {
    const [startOfWeek, endOfWeek] = setWeek(dayjs(end).format('YYYY-MM-DD'));
    setStart(new Date(startOfWeek));
    setEnd(new Date(endOfWeek));
    setFilterOptions((prev) => ({
      ...prev,
      prevDate: dayjs(startOfWeek).format('YYYY-MM-DD'),
      nextDate: dayjs(endOfWeek).format('YYYY-MM-DD'),
    }));
  };

  useEffect(() => {
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
    onSubmitSearchButton();
  }, [filterOptions, setSearchResult, userData]);

  const handleAll = () => {
    const getMinMaxDate = setUserAll(userData);
    setEnd(new Date(getMinMaxDate.end.registerDate));
    setStart(new Date(getMinMaxDate.start.registerDate));
    setFilterOptions((prev) => ({
      ...prev,
      prevDate: getMinMaxDate.start.registerDate,
      nextDate: getMinMaxDate.end.registerDate,
    }));
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
            onKeyDown={onSubmitByEnter}
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
            onKeyDown={onSubmitByEnter}
            onKeyPress={checkNumber}
          />
        </dd>
      </div>
      <div className={styles.inputList}>
        <dt className={styles.searchDateLabel}>조회기간</dt>
        <dd className={styles.searchDateDesc}>
          <SearchDatePicker
            onChange={onChangeStartCalendar}
            onKeyDown={checkNumber}
            selected={start}
          />
        </dd>
        <dd className={styles.fromTo}>~</dd>
        <dd className={styles.searchDateDesc}>
          <SearchDatePicker
            onChange={onChangeEndCalendar}
            onKeyDown={onSubmitByEnter}
            selected={end}
          />
        </dd>
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
