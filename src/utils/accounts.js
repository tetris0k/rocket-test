export const getCurrencySign = currency => {
  switch (currency) {
  case 'RUR':
    return '₽';
  case 'USD':
    return '$';
  default:
    return '';
  }
};

export const getDateString = date => {
  let day = date.getUTCDate();
  if (day < 10) {day = `0${day}`;}
  let month = date.getUTCMonth() + 1;
  if (month < 10) {month = `0${month}`;}
  const year = date.getUTCFullYear();
  let hours = date.getUTCHours();
  if (hours < 10) {hours = `0${hours}`;}
  let minutes = date.getUTCMinutes();
  if (minutes < 10) {minutes = `0${minutes}`;}
  return `${day}.${month}.${year} | ${hours}:${minutes}`;
};

export const addBlanksToSum = sum => {
  const delimiter = ' ';
  let s = String(sum);
  let a = [];
  while (s.length > 3) {
    let tmp = s.substr(s.length - 3);
    a.unshift(tmp);
    s = s.substr(0, s.length - 3);
  }
  if (s.length > 0) {
    a.unshift(s);
  }
  return a.join(delimiter);
};
