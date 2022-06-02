import HeartRate from './HeartRate';
import Step from './StepChart';
import styles from './charts.module.scss';

function Charts() {
  return (
    <div className={styles.wrapper}>
      <HeartRate />
      <Step />
    </div>
  );
}

export default Charts;
