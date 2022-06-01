interface UserInfo {
  id: number;
  loginId: string;
  registerDate: string;
}

interface UserFilterOptions {
  id: string;
  loginId: string;
  prevDate?: string;
  nextDate?: string;
}
