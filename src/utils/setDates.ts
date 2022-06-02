import dayjs from 'dayjs';
import { allStepData, allHeartData } from 'data';

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

export const setAll = (userSeq: number, type: string) => {
  let tmpData;
  if (type === 'step') {
    tmpData = allStepData
      .filter((data) => data.member_seq === userSeq)
      .map((item) => {
        return { seq: item.seq, crt_ymdt: item.crt_ymdt.split(' ')[0] };
      });
  } else {
    tmpData = allHeartData
      .filter((data) => data.member_seq === userSeq)
      .map((item) => {
        return { seq: item.seq, crt_ymdt: item.crt_ymdt.split(' ')[0] };
      });
  }
  const end = tmpData.reduce((prev, current) => {
    return prev.seq > current.seq ? prev : current;
  });
  const start = tmpData.reduce((prev, current) => {
    return prev.seq > current.seq ? current : prev;
  });
  return { end, start };
};

// export const setUserAll = () => {
//   const max = data.reduce((prev, current) => {
//     return prev.seq > current.seq ? prev : current;
//   });
//   const min = data.reduce((prev, current) => {
//     return prev.seq > current.seq ? current : prev;
//   });
//   return [max, min];
// };
