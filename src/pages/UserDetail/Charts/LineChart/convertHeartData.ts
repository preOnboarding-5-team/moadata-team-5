import { allHeartData } from 'data/index';
import dayjs from 'dayjs';

interface IChartData {
  x: string;
  y: number;
}

// average heartData 일별
export const avgHeartData = (
  start: string,
  end: string,
  userSeq: number
): IChartData[] => {
  const dates: string[] = [];
  const diff = dayjs(end).diff(dayjs(start), 'd');
  const arr: IChartData[] = [];

  for (let i = 0; i < diff + 1; i += 1) {
    dates.push(dayjs(start).add(i, 'd').format('YYYY-MM-DD'));
  }
  dates.forEach((date) => {
    const crr: HeartRate[] = [];
    allHeartData
      .filter((data) => data.member_seq === userSeq)
      .forEach((datum) => {
        if (datum.crt_ymdt.split(' ')[0] === date) {
          crr.push(datum);
        }
      });

    let totalNum = 0;

    crr.forEach((item) => {
      totalNum += item.avg_beat;
    });
    let averagedData;
    if (crr.length === 0) {
      arr.push({ x: date, y: 0 });
    } else {
      const average = Math.round(totalNum / crr.length);
      averagedData = { x: date, y: average };
      arr.push(averagedData);
    }
  });
  return arr;
};

// convertHeartData 시간
export const convertHeartData = (
  start: string,
  userSeq: number
): IChartData[] => {
  const arr: IChartData[] = [];
  const filteredData = allHeartData
    .filter((data) => data.member_seq === userSeq)
    .filter((fItem) => fItem.crt_ymdt.split(' ')[0] === start)
    .sort((a, b) => a.seq - b.seq);
  filteredData.forEach((filteredItem) => {
    arr.push({
      x: filteredItem.crt_ymdt.split(' ')[1],
      y: filteredItem.avg_beat,
    });
  });
  return arr;
};

export const getAvgBeat = (data: Data[]) => {
  const noZero = data.filter((datum) => datum.y > 0);
  const totalBeat = noZero.reduce((prv, cur) => prv + cur.y, 0);
  if (noZero.length > 0) {
    return Math.round(totalBeat / noZero.length);
  }
  return 0;
};
