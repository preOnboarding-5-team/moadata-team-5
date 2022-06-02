import { ChangeEvent, KeyboardEvent, useEffect, useState, useRef } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import dayjs from 'dayjs';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';

import { userFilterOptions } from 'states/userFilterOptions';
import { userDataList } from 'states/userDataList';
import { userSearchResult } from 'states/userSearchResult';
import { Button } from 'components/common/Button';

import './datePicker.scss';
import styles from './searchForm.module.scss';

interface Props {
  focusState: boolean;
}

const MIN_DATE = new Date(2022, 1, 1);
const MAX_DATE = new Date(2022, 6, 30);

function SearchFormInput({ focusState }: Props) {
  const userData = useRecoilValue(userDataList);
  const setSearchResult = useSetRecoilState(userSearchResult);
  const [filterOptions, setFilterOptions] = useRecoilState(userFilterOptions);

  const [isStartBoxOpen, setIsStartBoxOpen] = useState(false);
  const [isEndBoxOpen, setIsEndBoxOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const start = filterOptions.prevDate
    ? new Date(filterOptions.prevDate)
    : MIN_DATE;
  const end = filterOptions.nextDate
    ? new Date(filterOptions.nextDate)
    : MAX_DATE;

  useEffect(() => {
    if (focusState) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [focusState]);

  const onSubmitByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

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

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeCalendarInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    setFilterOptions((prev) => ({
      ...prev,
      [name]: value.length === 4 || value.length === 7 ? `${value}-` : value,
    }));
  };

  const onFocusStartInput = () => {
    setIsStartBoxOpen(true);
  };

  const onFocusEndInput = () => {
    setIsEndBoxOpen(true);
  };

  const onBlurStartInput = () => {
    setIsStartBoxOpen(false);
  };

  const onBlurEndInput = () => {
    setIsEndBoxOpen(false);
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

    setIsStartBoxOpen(false);
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

    setIsEndBoxOpen(false);
  };

  return (
    <dl className={styles.inputBox}>
      <div className={styles.inputList}>
        <dt className={styles.loginIdLabel}>로그인ID</dt>
        <dd className={styles.loginIdDesc}>
          <input
            name="loginId"
            type="text"
            placeholder="전체"
            onChange={onChangeInput}
            value={filterOptions.loginId}
            ref={inputRef}
            onKeyDown={onSubmitByEnter}
          />
        </dd>
      </div>
      <div className={styles.inputList}>
        <dt className={styles.loginNumberLabel}>회원번호</dt>
        <dd className={styles.loginNumberDesc}>
          <input
            name="id"
            type="number"
            placeholder="전체"
            onChange={onChangeInput}
            value={filterOptions.id}
            onKeyDown={onSubmitByEnter}
          />
        </dd>
      </div>
      <div className={styles.inputList}>
        <dt className={styles.searchDateLabel}>조회기간</dt>
        <dd className={styles.searchDateDesc}>
          <input
            readOnly
            name="prevDate"
            type="text"
            placeholder="전체"
            onChange={onChangeCalendarInput}
            value={filterOptions.prevDate}
            onKeyDown={onSubmitByEnter}
            className={styles.startDateInput}
            onFocus={onFocusStartInput}
          />
          {isStartBoxOpen && (
            <div className="datePicker">
              <ReactDatePicker
                inline
                dateFormat="yyyy/MM/dd"
                dateFormatCalendar="yyyy LLLL"
                selected={start}
                onChange={onChangeStartCalendar}
                selectsStart
                startDate={start}
                endDate={end}
                minDate={MIN_DATE}
                maxDate={MAX_DATE}
                locale={ko}
                onClickOutside={onBlurStartInput}
              />
            </div>
          )}
        </dd>
        <dd className={styles.fromTo}>~</dd>
        <dd className={styles.searchDateDesc}>
          <input
            readOnly
            name="nextDate"
            type="text"
            placeholder="전체"
            onChange={onChangeCalendarInput}
            value={filterOptions.nextDate}
            className={styles.endDateInput}
            onKeyDown={onSubmitByEnter}
            onFocus={onFocusEndInput}
          />
          {isEndBoxOpen && (
            <div className="datePicker">
              <ReactDatePicker
                inline
                dateFormat="yyyy/MM/dd"
                dateFormatCalendar="yyyy LLLL"
                selected={end}
                onChange={onChangeEndCalendar}
                selectsEnd
                startDate={start}
                endDate={end}
                minDate={MIN_DATE}
                maxDate={MAX_DATE}
                locale={ko}
                onClickOutside={onBlurEndInput}
              />
            </div>
          )}
        </dd>
        <dd className={styles.datePicker}>
          <Button className={styles.today} size="short">
            오늘
          </Button>
          <Button className={styles.week} size="short">
            1주일
          </Button>
          <Button className={styles.allday} size="short">
            전체
          </Button>
        </dd>
      </div>
    </dl>
  );
}

export default SearchFormInput;
