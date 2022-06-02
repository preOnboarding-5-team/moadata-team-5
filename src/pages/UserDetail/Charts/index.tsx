import { useParams } from 'react-router-dom';
import HeartRate from './HeartRate';
import Step from './Step';
import styles from './charts.module.scss';

function Charts() {
  const userSeq = Number(useParams().userId);

  return (
    <ul className={styles.wrapper}>
      <HeartRate userSeq={userSeq} />
      <Step userSeq={userSeq} />
    </ul>
  );
}

export default Charts;
