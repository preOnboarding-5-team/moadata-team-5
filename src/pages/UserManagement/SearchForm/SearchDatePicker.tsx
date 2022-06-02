import { KeyboardEvent } from 'react';
import { useRecoilValue } from 'recoil';
import { userFilterOptions } from 'states/userFilterOptions';

import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';

interface Props {
  onChange: (selectedDate: Date) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  selected: Date;
}

const MIN_DATE = new Date(2022, 0, 1);
const MAX_DATE = new Date(2022, 11, 31);

function SearchDatePicker({ onChange, onKeyDown, selected }: Props) {
  const filterOptions = useRecoilValue(userFilterOptions);
  const start = filterOptions.prevDate
    ? new Date(filterOptions.prevDate)
    : MIN_DATE;
  const end = filterOptions.nextDate
    ? new Date(filterOptions.nextDate)
    : MAX_DATE;

  return (
    <div className="datepicker">
      <ReactDatePicker
        dateFormat="yyyy-MM-dd"
        dateFormatCalendar="yyyy LLLL"
        selected={selected}
        onChange={onChange}
        onKeyDown={onKeyDown}
        startDate={start}
        endDate={end}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        locale={ko}
        placeholderText="전체"
      />
    </div>
  );
}

export default SearchDatePicker;
