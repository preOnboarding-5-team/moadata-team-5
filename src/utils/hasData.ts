export const hasData = (data: Data[]) => {
  if (!data) return false;
  if (data.every((datum) => datum.y === 0)) {
    return false;
  }
  return true;
};
