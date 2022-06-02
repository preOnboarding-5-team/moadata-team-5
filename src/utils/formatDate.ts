import dayjs from 'dayjs';

export const formatDate = (date: Date, format: string) => {
  const formatted = dayjs(date).format(format);

  return formatted;
};
