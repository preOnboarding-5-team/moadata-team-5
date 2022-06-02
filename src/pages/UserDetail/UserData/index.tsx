import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userDataList } from 'states';

import styles from './userData.module.scss';

function UserData() {
  const userData = useRecoilValue(userDataList);
  const userSeq = Number(useParams().userId);
  const userInfo = userData.filter((user) => user.id === userSeq);

  return (
    <ul className={styles.dataWrapper}>
      <li className={styles.data}>
        <dl>
          <dt>로그인ID:</dt>
          <dd>{userInfo[0].loginId}</dd>
        </dl>
      </li>
      <li className={styles.data}>
        <dl>
          <dt>회원번호:</dt>
          <dd>{userInfo[0].id}</dd>
        </dl>
      </li>
      <li className={styles.data}>
        <dl>
          <dt>가입 일시:</dt>
          {/* // TODO: 년, 월, 일로 바꾸는 것이 나은지 결정 필요 */}
          <dd>{userInfo[0].registerDate}</dd>
        </dl>
      </li>
    </ul>
  );
}

export default UserData;
