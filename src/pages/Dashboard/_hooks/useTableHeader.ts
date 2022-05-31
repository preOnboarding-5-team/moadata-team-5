import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchResultAtom } from '../_states/searchResult';
import { sortedByHeaderKey } from '../_utils/sort';

export const useTableHeader = () => {
  const [sortKey, setSortKey] = useState<keyof UserInfo | null>(null);
  const [sortDir, setSortDir] = useState(1);
  const setSearchResult = useSetRecoilState(searchResultAtom);

  useEffect(() => {
    setSearchResult((prev) => sortedByHeaderKey(prev, sortKey, sortDir === -1));
  }, [sortKey, sortDir, setSearchResult]);

  return { sortKey, sortDir, setSortKey, setSortDir };
};
