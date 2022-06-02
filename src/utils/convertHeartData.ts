import dayjs from 'dayjs';

interface IChartData {
  avg_beat: number;
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

// average heartData 일별
export const avgHeartData = (
  data: HeartRate[],
  start: string,
  end: string
): IChartData[] => {
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

    let totalNum = 0;

    crr.forEach((item) => {
      totalNum += item.avg_beat;
    });
    let averagedData;
    if (crr.length === 0) {
      arr.push({ crt_ymdt: date, avg_beat: 0 });
    } else {
      const average = Math.round(totalNum / crr.length);
      averagedData = { crt_ymdt: date, avg_beat: average };
      arr.push(averagedData);
    }
  });
  return arr;
};

// convertHeartData 시간
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
  return arr;
};

export const getAvgBeat = (data: Data[]) => {
  const totalBeat = data.reduce((prv, cur) => prv + cur.avg_beat, 0);
  const avgBeat = Math.round(totalBeat / data.length);
  return avgBeat;
};
