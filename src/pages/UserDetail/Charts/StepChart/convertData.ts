import { allStepData } from 'data';
import getDatesStartToLast from 'utils/getDates';

function ConvertData(startDate: string, endDate: string, userSeq: number) {
  const totalData = allStepData.filter((data) => data.member_seq === userSeq);
  if (startDate === endDate) {
    if (
      totalData.filter((item) => item.crt_ymdt.split(' ')[0] === startDate)
        .length === 0
    )
      return [
        {
          seq: 0,
          y: 0,
          x: startDate,
        },
      ];
    return totalData
      .filter((item) => item.crt_ymdt.split(' ')[0] === startDate)
      .sort((a, b) => a.seq - b.seq)
      .map((item) => {
        return {
          seq: item.seq,
          y: item.steps,
          x: item.crt_ymdt.split(' ')[1],
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
    if (tmpIdx === -1) return { seq: 0, y: 0, x: date };
    return {
      seq: tmpData[tmpIdx].seq,
      y: tmpData[tmpIdx].steps,
      x: tmpData[tmpIdx].crt_ymdt.split(' ')[0],
    };
  });
}

export default ConvertData;
