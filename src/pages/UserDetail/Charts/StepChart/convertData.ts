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
