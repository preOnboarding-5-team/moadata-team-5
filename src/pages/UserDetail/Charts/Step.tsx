import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import Button from 'components/common/Button';
import DatePicker from 'components/common/DatePicker';
import { useParams } from 'react-router-dom';
import { setAll, setToday, setWeek } from 'utils/setDates';
import styles from './charts.module.scss';
import StepChart from './StepChart';
import ConvertData from './StepChart/convertData';

function Step() {
  const [startDate, setStartDate] = useState<string>('2022-02-26');
  const [endDate, setEndDate] = useState<string>('2022-04-20');
  const [totalSteps, setTotalSteps] = useState('0');

  const user = Number(useParams().userId);

  const stepData = ConvertData(startDate, endDate, user);

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
    const getMinMaxDate = setAll(user, 'step');
    setEndDate(getMinMaxDate.end.crt_ymdt);
    setStartDate(getMinMaxDate.start.crt_ymdt);
  };

  useEffect(() => {
    if (startDate === endDate) {
      setTotalSteps(
        stepData
          .map((item) => item.steps)
          .reduce((prev, curr) => (prev > curr ? prev : curr))
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      );
    } else {
      setTotalSteps(
        stepData
          .map((item) => item.steps)
          .reduce((prev, curr) => prev + curr, 0)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      );
    }
  }, [startDate, endDate, stepData]);
  return (
    <li className={styles.chartWrapper}>
      <header className={styles.chartHeader}>
        <h2 className={styles.chartTitle}>걸음수</h2>
      </header>
      <div className={styles.chart}>
        <StepChart stepData={stepData} />
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
        <span>총 {totalSteps} 걸음</span>
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

export default Step;
