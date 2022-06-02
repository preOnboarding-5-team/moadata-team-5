import dayjs from 'dayjs';

export const setToday = () => {
  const now = dayjs();
  const today = now.format('YYYY-MM-DD');
  return today;
};

export const setWeek = (endDate: string) => {
  const startDate = dayjs(endDate).add(-7, 'd').format('YYYY-MM-DD');
  const weekSetting = [startDate, endDate];
  return weekSetting;
};

export const setAll = (data: HeartRate[]) => {
  const max = data.reduce((prev, current) => {
    return prev.seq > current.seq ? prev : current;
  });
  const min = data.reduce((prev, current) => {
    return prev.seq > current.seq ? current : prev;
  });
  return [max, min];
};
