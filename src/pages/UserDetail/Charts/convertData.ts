import { allStepData } from 'data';
import { useParams } from 'react-router-dom';

function getDatesStartToLast(start: string, end: string) {
  const result = [];
  const curDate = new Date(start);
  while (curDate <= new Date(end)) {
    result.push(curDate.toISOString().split('T')[0]);
    curDate.setDate(curDate.getDate() + 1);
  }
  return result;
}

function ConvertData(startDate: string, endDate: string) {
  const userSeq = Number(useParams().userId);
  const totalData = allStepData.filter((data) => data.member_seq === userSeq);
  if (startDate === endDate) {
    if (
      totalData.filter((item) => item.crt_ymdt.split(' ')[0] === startDate)
        .length === 0
    )
      return [
        {
          steps: 0,
          crt_ymdt: startDate,
        },
      ];
    return totalData
      .filter((item) => item.crt_ymdt.split(' ')[0] === startDate)
      .sort((a, b) => a.seq - b.seq)
      .map((item) => {
        return {
          steps: item.steps,
          crt_ymdt: item.crt_ymdt.split(' ')[1],
        };
      });
  }
  const tmpData = totalData.filter(
    (item) =>
      item.crt_ymdt.split(' ')[0] >= startDate &&
      item.crt_ymdt.split(' ')[0] <= endDate
  );
  const dateList = getDatesStartToLast(startDate, endDate);
  return dateList.map((date) => {
    const tmpIdx = tmpData.findIndex(
      (obj) => obj.crt_ymdt.split(' ')[0] === date
    );
    if (tmpIdx === -1) return { steps: 0, crt_ymdt: date };
    return {
      steps: tmpData[tmpIdx].steps,
      crt_ymdt: tmpData[tmpIdx].crt_ymdt.split(' ')[0],
    };
  });
}

export default ConvertData;
