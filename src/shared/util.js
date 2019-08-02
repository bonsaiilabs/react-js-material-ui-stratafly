/* Return the date in "2019-11-25" format*/
export const getDateToString = date => {
  let fullYear = date.getFullYear(),
    month = date.getMonth() + 1,
    dateOfMonth = date.getDate();
  let formattedMonth = month < 10 ? '0' + month : month;
  let formattedDay = dateOfMonth < 10 ? '0' + dateOfMonth : dateOfMonth;
  return fullYear + '-' + formattedMonth + '-' + formattedDay;
};

/* Return the string in JavaScript date format*/
export const getStringToDate = date => {
  const [year, month, day] = date.split('-');
  return new Date(year, month - 1, day);
};

export const increaseAndUpdateTravellers = (travellers, type, count, maxAllowed) => {
  let updated = { count: count + 1, disableRemove: false };
  if (updated.count === maxAllowed) updated.disableAdd = true;
  return travellers.map(entry => (entry.type === type ? Object.assign({}, entry, updated) : entry));
};

export const reduceAndUpdateTravellers = (travellers, type, count) => {
  let updated = { count: count - 1, disableAdd: false };
  let isZeroChildOrInfant = (type === 'Child' || type === 'Infant') && updated.count === 0;
  let isOneAdult = type === 'Adult' && updated.count === 1;

  if (isZeroChildOrInfant) updated.disableRemove = true;
  if (isOneAdult) updated.disableRemove = true;
  return travellers.map(entry => (entry.type === type ? Object.assign({}, entry, updated) : entry));
};

export const getTotalTravellers = travellers => {
  return travellers.reduce((accumulator, entry) => accumulator + entry.count, 0);
};

export const isInfantAlone = (infant, adult) => {
  return infant['count'] > adult['count'];
};

export const isObjectEmpty = obj => Object.entries(obj).length === 0 || typeof obj === 'undefined';

export const isArrayEmpty = arr => arr.length === 0 || typeof arr === 'undefined';

export const isUndefined = any => typeof any === 'undefined';

export const isEmptyString = string => typeof string === 'undefined' || string.length === 0 || string === null;
