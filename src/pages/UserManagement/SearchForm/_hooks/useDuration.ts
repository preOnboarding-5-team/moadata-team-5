import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from 'dayjs';

import { userFilterOptions } from 'states/userFilterOptions';

export const useDuration = (minDate: Date, maxDate: Date) => {
  const [filterOptions, setFilterOptions] = useRecoilState(userFilterOptions);
  const [start, setStart] = useState<Date>(
    filterOptions.prevDate ? new Date(filterOptions.prevDate) : minDate
  );
  const [end, setEnd] = useState<Date>(
    filterOptions.nextDate ? new Date(filterOptions.nextDate) : maxDate
  );

  useEffect(() => {
    setFilterOptions((prev) => ({
      ...prev,
      prevDate: dayjs(start).format('YYYY-MM-DD'),
    }));
  }, [start, setFilterOptions]);

  useEffect(() => {
    setFilterOptions((prev) => ({
      ...prev,
      nextDate: dayjs(end).format('YYYY-MM-DD'),
    }));
  }, [end, setFilterOptions]);

  return { start, setStart, end, setEnd };
};
