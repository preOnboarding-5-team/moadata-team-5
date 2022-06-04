import { KeyboardEvent } from 'react';

import type { Dispatch, SetStateAction } from 'react';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';

import styles from '../searchForm.module.scss';
import './searchDatePicker.scss';

interface Props {
  start: Date;
  end: Date;
  setStart: Dispatch<SetStateAction<Date>>;
  setEnd: Dispatch<SetStateAction<Date>>;
  minDate: Date;
  maxDate: Date;
}

function SearchDatePicker({
  start,
  end,
  setStart,
  setEnd,
  minDate,
  maxDate,
}: Props) {
  const updateBoth = (selectedDate: Date) => {
    setStart(selectedDate);
    setEnd(selectedDate);
  };

  const handleChangeStart = (selectedDate: Date) => {
    if (selectedDate > end) updateBoth(selectedDate);
    else setStart(selectedDate);
  };

  const handleChangeEnd = (selectedDate: Date) => {
    if (selectedDate < start) updateBoth(selectedDate);
    else setEnd(selectedDate);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <dd className={styles.searchDateDesc}>
        <ReactDatePicker
          dateFormat="yyyy-MM-dd"
          dateFormatCalendar="yyyy LLLL"
          selected={start}
          onChange={handleChangeStart}
          startDate={start}
          endDate={end}
          minDate={minDate}
          maxDate={maxDate}
          locale={ko}
          placeholderText="전체"
          onKeyDown={onKeyDown}
        />
      </dd>
      <dd className={styles.fromTo}>~</dd>
      <dd className={styles.searchDateDesc}>
        <ReactDatePicker
          dateFormat="yyyy-MM-dd"
          dateFormatCalendar="yyyy LLLL"
          selected={end}
          onChange={handleChangeEnd}
          startDate={start}
          endDate={end}
          minDate={minDate}
          maxDate={maxDate}
          locale={ko}
          placeholderText="전체"
          onKeyDown={onKeyDown}
        />
      </dd>
    </>
  );
}

export default SearchDatePicker;
