import dayjs from 'dayjs';

export const parseDates = (dateTimeOne: string, dateTimeTwo: string) => {
  const firstDate = dayjs(dateTimeOne).format('MMM DD, YYYY');
  const firstTime = dayjs(dateTimeOne).format('hh:mm A');
  const endDate = dateTimeTwo
    ? dayjs(dateTimeTwo).format('MMM DD, YYYY')
    : firstDate;
  const endTime = dateTimeTwo
    ? dayjs(dateTimeTwo).format('hh:mm A')
    : firstTime;
  const sameDay = firstDate === endDate;
  const sameTime = firstTime === endTime;
  const times = sameTime ? firstTime : `${firstTime} - ${endTime}`;
  const dates = sameDay ? firstDate : `${firstDate} - ${endDate}`;
  return `${dates}${times ? ` | ${times}` : ''}`;
};
