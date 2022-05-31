import { atom } from 'recoil';

export const userDataList = atom<UserInfo[]>({
  key: 'userDataList',
  default: [
    {
      id: 136,
      registerDate: '2022-02-01',
      loginId: 'asdasd',
      password: '123123',
    },
    {
      id: 328,
      registerDate: '2022-03-01',
      loginId: 'qweqwe',
      password: '456456',
    },
    {
      id: 380,
      registerDate: '2022-04-01',
      loginId: 'zxczxc',
      password: '789789',
    },
  ],
});
