import dayjs from 'dayjs';

import { Button } from 'components/common/Button';
import styles from './charts.module.scss';

function Step() {
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
      <form className={styles.datePickerWrapper}>조회 기간</form>
      <div className={styles.buttonWrapper}>
        <Button size="short">오늘</Button>
        <Button size="short">1주일</Button>
        <Button size="short">전체</Button>
      </div>
    </li>
  );
}

export default Step;
