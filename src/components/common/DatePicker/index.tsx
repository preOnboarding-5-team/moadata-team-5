import { KeyboardEvent, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import cx from 'classnames';

import { formatDate } from 'utils/formatDate';
import Button from 'components/common/Button';

import 'react-datepicker/src/stylesheets/datepicker.scss';
import './datePicker.scss';

type DatePickerProps = {
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  minDate: Date;
  maxDate: Date;
};

function DatePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  minDate,
  maxDate,
}: DatePickerProps) {
  const [start, setStart] = useState<Date>(minDate);
  const [end, setEnd] = useState<Date>(maxDate);
  const [indicator, setIndicator] = useState<boolean>(false);

  const onKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
  };

  const onStartChange = (date: Date) => {
    if (date > end) {
      setEnd(date);
    }
    setStart(date);
  };

  const onEndChange = (date: Date) => {
    if (date < start) {
      setStart(date);
    }
    setEnd(date);
  };

  const onSetDateClick = () => {
    const formattedStart = formatDate(start, 'YYYY-MM-DD');
    const formattedEnd = formatDate(end, 'YYYY-MM-DD');
    setStartDate(formattedStart);
    setEndDate(formattedEnd);
  };

  useEffect(() => {
    if (
      startDate !== formatDate(start, 'YYYY-MM-DD') ||
      endDate !== formatDate(end, 'YYYY-MM-DD')
    ) {
      setIndicator(true);
    } else {
      setIndicator(false);
    }
  }, [startDate, endDate, start, end]);

  useEffect(() => {
    setStart(new Date(startDate));
    setEnd(new Date(endDate));
  }, [startDate, endDate]);

  return (
    <div className="datePicker">
      <ReactDatePicker
        dateFormat="yyyy/MM/dd"
        dateFormatCalendar="yyyy LLLL"
        selected={start}
        onChange={onStartChange}
        selectsStart
        startDate={start}
        endDate={end}
        minDate={minDate}
        maxDate={maxDate}
        onKeyDown={onKeyDown}
        locale={ko}
      />
      <span className="tilde">~</span>
      <ReactDatePicker
        dateFormat="yyyy/MM/dd"
        dateFormatCalendar="yyyy LLLL"
        selected={end}
        onChange={onEndChange}
        selectsEnd
        startDate={start}
        endDate={end}
        minDate={minDate}
        maxDate={maxDate}
        locale={ko}
      />
      <Button
        size="short"
        type="button"
        onClick={onSetDateClick}
        className={cx('submitButton', { indicate: indicator })}
        disabled={!indicator}
      >
        조회하기
      </Button>
    </div>
  );
}

export default DatePicker;
