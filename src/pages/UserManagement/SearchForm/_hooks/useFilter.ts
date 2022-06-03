import { useCallback, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import dayjs from 'dayjs';

import { userDataList } from 'states/userDataList';
import { userFilterOptions } from 'states/userFilterOptions';
import { userSearchResult } from 'states/userSearchResult';

export const useFilter = () => {
  const filterOptions = useRecoilValue(userFilterOptions);
  const setSearchResult = useSetRecoilState(userSearchResult);
  const userData = useRecoilValue(userDataList);

  const submitFilter = useCallback(() => {
    const { loginId, id, prevDate, nextDate } = filterOptions;
    if (!loginId && !id && !prevDate && !nextDate) {
      setSearchResult(userData);
      return;
    }

    setSearchResult(
      userData.filter(
        (data) =>
          (!loginId || data.loginId.includes(loginId)) &&
          (!id || String(data.id).includes(id)) &&
          (!prevDate || dayjs(prevDate) <= dayjs(data.registerDate)) &&
          (!nextDate || dayjs(nextDate) >= dayjs(data.registerDate))
      )
    );
  }, [filterOptions, userData, setSearchResult]);

  useEffect(() => {
    submitFilter();
  }, [submitFilter]);

  return submitFilter;
};
