import dayjs from 'dayjs';
import { useState } from 'react';

import Button from 'components/common/Button';
import DatePicker from 'components/common/DatePicker';
import LineChart from 'pages/UserDetail/Charts/LineChart';
import styles from './charts.module.scss';

function HeartRate() {
  const [startDate, setStartDate] = useState<string>('2022-02-26');
  const [endDate, setEndDate] = useState<string>('2022-04-20');
  const [avgBeat, setAvgBeat] = useState(0);

  return (
    <li className={styles.chartWrapper}>
      <header className={styles.chartHeader}>
        <h2 className={styles.chartTitle}>심박수</h2>
      </header>
      <div className={styles.chart}>
        <LineChart
          startDate={startDate}
          endDate={endDate}
          setAvgBeat={setAvgBeat}
        />
      </div>
      <div className={styles.label}>
        <div className={styles.timewrapper}>
          <time dateTime={`${startDate}`}>
            {dayjs(startDate).format('YY-MM-DD')}
          </time>
          <span>~</span>
          <time dateTime={`${endDate}`}>
            {dayjs(endDate).format('YY-MM-DD')}
          </time>
        </div>
        <span>{`평균 ${avgBeat} bpm`}</span>
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

export default HeartRate;
