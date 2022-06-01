import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import Button from 'components/common/Button';
import DatePicker from 'components/common/DatePicker';
import styles from './charts.module.scss';

function Step() {
  const [startDate, setStartDate] = useState<string>('2022-02-26');
  const [endDate, setEndDate] = useState<string>('2022-04-20');

  useEffect(() => {
    console.log(startDate, endDate);
  }, [endDate, startDate]);

  return (
    <li className={styles.chartWrapper}>
      <header className={styles.chartHeader}>
        <h2 className={styles.chartTitle}>걸음수</h2>
      </header>
      <div className={styles.chart} />
      <div className={styles.label}>
        <time dateTime="2022-04-20">
          {dayjs('2022-04-20').format('YY-MM-DD')}
        </time>
        <span>총 13,203 걸음</span>
      </div>
      <div className={styles.datePickerWrapper}>
        <DatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          minDate={new Date(2022, 1, 26)}
          maxDate={new Date(2022, 3, 20)}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button size="short">오늘</Button>
        <Button size="short">1주일</Button>
        <Button size="short">전체</Button>
      </div>
    </li>
  );
}

export default Step;
