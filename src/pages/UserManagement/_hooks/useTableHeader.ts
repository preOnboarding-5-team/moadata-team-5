import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userSearchResult } from 'states/userSearchResult';
import { sortedByHeaderKey } from '../_utils/sort';

export const useTableHeader = () => {
  const [sortKey, setSortKey] = useState<keyof UserInfo>('id');
  const [sortDir, setSortDir] = useState(1);
  const [serachResult, setSearchResult] = useRecoilState(userSearchResult);

  useEffect(() => {
    setSearchResult((prev) => sortedByHeaderKey(prev, sortKey, sortDir === -1));
  }, [sortKey, sortDir, setSearchResult]);

  return { sortKey, sortDir, setSortKey, setSortDir, serachResult };
};
