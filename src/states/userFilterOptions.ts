import { atom } from 'recoil';

export const userFilterOptions = atom<UserFilterOptions>({
  key: 'userFilterOptions',
  default: {
    loginId: '',
    id: '',
    prevDate: '',
    nextDate: '',
  },
});
