import HeartRate from './HeartRate';
import Step from './Step';
import styles from './charts.module.scss';

function Charts() {
  return (
    <ul className={styles.wrapper}>
      <HeartRate />
      <Step />
    </ul>
  );
}

export default Charts;
