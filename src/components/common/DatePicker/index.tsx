import { ko } from 'date-fns/locale';
import { KeyboardEvent, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import { Button } from '../Button';
import 'react-datepicker/src/stylesheets/datepicker.scss';
import './datePicker.scss';

type DatePickerProps = {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
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
    setStartDate(start);
    setEndDate(end);
  };

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
      <Button size="long" onClick={onSetDateClick} className="submitButton">
        조회하기
      </Button>
    </div>
  );
}

export default DatePicker;
