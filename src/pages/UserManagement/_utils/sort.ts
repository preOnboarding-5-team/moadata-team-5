export const sortedByHeaderKey = (
  arr: UserInfo[],
  key: keyof UserInfo | null,
  desc: boolean
) => {
  if (arr.length === 0 || !key) return arr;

  const sorted = arr.map((data) => ({ ...data }));
  const sortDir = -Math.sign(Number(desc) - 0.1);
  const sortKey = (a: UserInfo, b: UserInfo): number => {
    if (a[key] > b[key]) return sortDir;
    if (a[key] < b[key]) return -sortDir;
    return 0;
  };

  sorted.sort(sortKey);

  return sorted;
};
