import { atom } from 'recoil';

export const userDataList = atom<UserInfo[]>({
  key: 'userDataList',
  default: [
    {
      id: 136,
      registerDate: '2022-02-01',
      loginId: 'asdasd',
    },
    {
      id: 328,
      registerDate: '2022-03-01',
      loginId: 'qweqwe',
    },
    {
      id: 380,
      registerDate: '2022-04-01',
      loginId: 'zxczxc',
    },
  ],
});
