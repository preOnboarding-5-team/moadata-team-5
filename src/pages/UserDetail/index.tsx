import { useEffect, useState } from 'react';

import DatePicker from 'components/common/DatePicker';

import styles from './userDetail.module.scss';

function UserDetail() {
  const [startDate, setStartDate] = useState<Date>(new Date(2022, 1, 26));
  const [endDate, setEndDate] = useState<Date>(new Date(2022, 3, 20));

  useEffect(() => {
    console.log(startDate, endDate);
  }, [endDate, startDate]);

  return (
    <div>
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        minDate={new Date(2022, 1, 26)}
        maxDate={new Date(2022, 3, 20)}
      />
    </div>
  );
}

export default UserDetail;
