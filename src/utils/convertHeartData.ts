import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';

interface IChartData {
  avg_beat: number | BigNumber;
  crt_ymdt: string;
}

export const getDatesStartToLast = (start: string, end: string) => {
  const result = [];
  const curDate = new Date(start);
  while (curDate <= new Date(end)) {
    result.push(curDate.toISOString().split('T')[0]);
    curDate.setDate(curDate.getDate() + 1);
  }
  return result;
};

// average heartData
export const avgHeartData = (
  data: HeartRate[],
  start: string,
  end: string
): IChartData[] => {
  const totalArr: number[] = [];
  const dates: string[] = [];
  const diff = dayjs(end).diff(dayjs(start), 'd');
  const arr: IChartData[] = [];

  for (let i = 0; i < diff + 1; i += 1) {
    dates.push(dayjs(start).add(i, 'd').format('YYYY-MM-DD'));
  }
  dates.forEach((date) => {
    const crr: HeartRate[] = [];

    data.forEach((datum) => {
      if (datum.crt_ymdt.split(' ')[0] === date) {
        crr.push(datum);
      }
    });
    crr.forEach((item) => {
      totalArr.push(item.avg_beat);
    });
    const result = totalArr.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);
    const average = Math.round(result / totalArr.length);
    const averagedData = { crt_ymdt: date, avg_beat: average };
    arr.push(averagedData);
  });
  return arr;
};

// convertHeartData
export const convertHeartData = (
  start: string,
  data: HeartRate[]
): IChartData[] => {
  const arr: IChartData[] = [];
  const filteredData = data
    .filter((fItem) => fItem.crt_ymdt.split(' ')[0] === start)
    .sort((a, b) => a.seq - b.seq);
  filteredData.forEach((filteredItem) => {
    arr.push({
      avg_beat: filteredItem.avg_beat,
      crt_ymdt: filteredItem.crt_ymdt.split(' ')[1],
    });
  });
  console.log(filteredData);
  return arr;
};
