import { atom } from 'recoil';
import { userDataList } from './userDataList';

export const userSearchResult = atom<UserInfo[]>({
  key: 'userSearchResult',
  default: userDataList,
});
