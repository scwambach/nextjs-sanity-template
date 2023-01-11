import dayjs from 'dayjs';

export const convertTime12to24 = (time12h) => {
  const newTime = time12h.replace(/[Am, am, PM, pm].*/g, ' $&');
  const [time, modifier] = newTime.split(' ');

  // eslint-disable-next-line prefer-const
  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
};

export const timePrettier = (timeString) => {
  if (timeString.indexOf(' ') < 0) {
    const newTime = timeString.replace(/[Am, am, PM, pm].*/g, ' $&');
    const [time, modifier] = newTime.split(' ');

    const [hours, minutes] = time.split(':');

    return `${hours}:${minutes} ${modifier.toUpperCase()}`;
  }
  return timeString.toUpperCase();
};

export const dateTimeConverter = (date, time) =>
  dayjs(
    `${dayjs(date).format('YYYY-MM-DD')}T${convertTime12to24(time)}`
  ).format('YYYY-MM-DDTHH:mm:ssZ[Z]');
