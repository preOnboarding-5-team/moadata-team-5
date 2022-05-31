import dayjs from 'dayjs';

import styles from './userData.module.scss';

function UserData() {
  return (
    <ul className={styles.dataWrapper}>
      <li className={styles.data}>
        <dl>
          <dt>로그인ID:</dt>
          <dd>ghdrlfehd12</dd>
        </dl>
      </li>
      <li className={styles.data}>
        <dl>
          <dt>회원번호:</dt>
          <dd>5</dd>
        </dl>
      </li>
      <li className={styles.data}>
        <dl>
          <dt>가입 일시:</dt>
          <dd>
            <time dateTime="2022-04-20 12:34:56">
              {dayjs('2022-04-20 12:34:56').format('YY-MM-DD HH:mm:ss')}
            </time>
          </dd>
        </dl>
      </li>
    </ul>
  );
}

export default UserData;
