import { atom } from 'recoil';

const DUMMY: UserInfo[] = [
  {
    id: 1,
    registerDate: '2022-02-01',
    loginId: 'abcdefghijkl',
  },
  {
    id: 2,
    registerDate: '2022-03-01',
    loginId: 'yourid',
  },
  {
    id: 3,
    registerDate: '2022-04-01',
    loginId: 'myid',
  },
];

export const searchResultAtom = atom({
  key: '#searchResultAtom',
  default: DUMMY,
});
