import dayjs from 'dayjs';
import { useState } from 'react';

import Button from 'components/common/Button';
import DatePicker from 'components/common/DatePicker';
import LineChart from 'pages/UserDetail/Charts/LineChart';
import { setAll, setToday, setWeek } from 'utils/setDates';
import { useParams } from 'react-router-dom';

import './datepicker.scss';
import styles from './charts.module.scss';

function HeartRate() {
  const user = Number(useParams().userId);
  const minDate = setAll(user, 'heart').start.crt_ymdt;
  const maxDate = setAll(user, 'heart').end.crt_ymdt;

  const [startDate, setStartDate] = useState<string>(minDate);
  const [endDate, setEndDate] = useState<string>(maxDate);
  const [avgBeat, setAvgBeat] = useState(0);

  const handleToday = () => {
    setStartDate(setToday());
    setEndDate(setToday());
  };
  const handleWeek = () => {
    const [startOfWeek, endOfWeek] = setWeek(endDate);
    setStartDate(startOfWeek);
    setEndDate(endOfWeek);
  };
  const handleAll = () => {
    const getMinMaxDate = setAll(user, 'heart');
    setEndDate(getMinMaxDate.end.crt_ymdt);
    setStartDate(getMinMaxDate.start.crt_ymdt);
  };

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
            {dayjs(startDate).format('YY년 MM월 DD일')}
          </time>
          {startDate === endDate ? (
            ''
          ) : (
            <>
              <span>~</span>
              <time dateTime={`${endDate}`}>
                {dayjs(endDate).format('YY년 MM월 DD일')}
              </time>
            </>
          )}
        </div>
        <p>{`평균 ${avgBeat} bpm`}</p>
      </div>
      <div className={styles.datePickerWrapper}>
        <DatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          minDate={new Date(minDate)}
          maxDate={new Date(maxDate)}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button size="short" onClick={handleToday}>
          오늘
        </Button>
        <Button size="short" onClick={handleWeek}>
          1주일
        </Button>
        <Button size="short" onClick={handleAll}>
          전체
        </Button>
      </div>
    </li>
  );
}

export default HeartRate;
