import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import Button from 'components/common/Button';
import DatePicker from 'components/common/DatePicker';
import { useParams } from 'react-router-dom';
import { setAll, setToday, setWeek } from 'utils/setDates';
import './datepicker.scss';
import styles from './charts.module.scss';
import StepChart from './StepChart';
import ConvertData from './StepChart/convertData';

function Step() {
  const user = Number(useParams().userId);
  const minDate = setAll(user, 'heart').start.crt_ymdt;
  const maxDate = setAll(user, 'heart').end.crt_ymdt;

  const [startDate, setStartDate] = useState<string>(minDate);
  const [endDate, setEndDate] = useState<string>(maxDate);
  const [totalSteps, setTotalSteps] = useState('0');

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
          .map((item) => item.y)
          .reduce((prev, curr) => (prev > curr ? prev : curr))
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      );
    } else {
      setTotalSteps(
        stepData
          .map((item) => item.y)
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
      <StepChart stepData={stepData} />
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
        <p>총 {totalSteps} 보</p>
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
    </li>
  );
}

export default Step;
