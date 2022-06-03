import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userDataList } from 'states/userDataList';

import styles from './userData.module.scss';

function UserData() {
  const userData = useRecoilValue(userDataList);
  const userSeq = Number(useParams().userId);
  const userInfo = userData.filter((user) => user.id === userSeq);

  return (
    <dl className={styles.dataWrapper}>
      <div className={styles.data}>
        <dt>로그인ID</dt>
        <dd>{userInfo[0].loginId}</dd>
      </div>
      <div className={styles.data}>
        <dt>회원번호</dt>
        <dd>{userInfo[0].id}</dd>
      </div>
      <div className={styles.data}>
        <dt>가입일</dt>
        {/* // TODO: 년, 월, 일로 바꾸는 것이 나은지 결정 필요 */}
        <dd>{userInfo[0].registerDate}</dd>
      </div>
    </dl>
  );
}

export default UserData;
