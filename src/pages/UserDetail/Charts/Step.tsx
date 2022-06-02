import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import Button from 'components/common/Button';
import DatePicker from 'components/common/DatePicker';
import styles from './charts.module.scss';
import StepChart from './StepChart';
import ConvertData from './convertData';

interface props {
  userSeq: number;
}

function Step({ userSeq }: props) {
  const [startDate, setStartDate] = useState<string>('2022-02-26');
  const [endDate, setEndDate] = useState<string>('2022-04-20');
  const [totalSteps, setTotalSteps] = useState('0');

  const stepData = ConvertData(startDate, endDate, userSeq);

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
  }, [endDate, startDate, stepData]);

  return (
    <li className={styles.chartWrapper}>
      <header className={styles.chartHeader}>
        <h2 className={styles.chartTitle}>걸음수</h2>
      </header>
      <div className={styles.chart}>
        <StepChart stepData={stepData} />
      </div>
      <div className={styles.label}>
        <time dateTime="2022-04-20">
          {startDate === endDate
            ? dayjs(startDate).format('YY-MM-DD')
            : `${dayjs(startDate).format('YY-MM-DD')} ~ ${dayjs(endDate).format(
                'YY-MM-DD'
              )}`}
        </time>
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
        <Button size="short">오늘</Button>
        <Button size="short">1주일</Button>
        <Button size="short">전체</Button>
      </div>
    </li>
  );
}

export default Step;
