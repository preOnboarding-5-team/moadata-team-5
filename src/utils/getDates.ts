export default function getDatesStartToLast(start: string, end: string) {
  const result = [];
  const curDate = new Date(start);
  while (curDate <= new Date(end)) {
    result.push(curDate.toISOString().split('T')[0]);
    curDate.setDate(curDate.getDate() + 1);
  }
  return result;
}
