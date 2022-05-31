import { atom } from 'recoil';

const DUMMY: UserInfo[] = [
  {
    id: 1,
    registerDate: '2022-02-01',
    loginID: 'abcdefghijkl',
    password: '',
  },
  {
    id: 2,
    registerDate: '2022-03-01',
    loginID: 'yourid',
    password: '',
  },
  {
    id: 3,
    registerDate: '2022-04-01',
    loginID: 'myid',
    password: '',
  },
];

export const searchResultAtom = atom({
  key: '#searchResultAtom',
  default: DUMMY,
});
