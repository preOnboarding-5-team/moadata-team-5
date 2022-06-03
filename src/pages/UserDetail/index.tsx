import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userDataList } from 'states/userDataList';
import Charts from './Charts';
import UserData from './UserData';

import styles from './userDetail.module.scss';

function UserDetail() {
  const navigate = useNavigate();
  const userSeq = Number(useParams().userId);
  const userDataListState = useRecoilValue(userDataList);
  const userInfo = userDataListState.filter((user) => user.id === userSeq);

  useEffect(() => {
    if (userInfo.length === 0) {
      navigate('/usermanagement');
    }
  }, [navigate, userInfo.length]);

  if (userInfo.length === 0) {
    return null;
  }

  return (
    <section className={styles.userDetailWrapper}>
      <h1 className={styles.pageTitle}>회원 상세 정보</h1>
      <div className={styles.userDetail}>
        <UserData />
        <Charts />
      </div>
    </section>
  );
}

export default UserDetail;
