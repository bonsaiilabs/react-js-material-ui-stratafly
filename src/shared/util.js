/**
 * Return the date in "2019-11-25" format
 * @param date
 * @returns {string}
 */
export const formatDate = date => {
    let fullYear = date.getFullYear(),
        month = date.getMonth() + 1,
        dateOfMonth = date.getDate();
    let formattedMonth = month < 10 ? '0' + month : month;
    let formattedDay = dateOfMonth < 10 ? '0' + dateOfMonth : dateOfMonth;
    return fullYear + '-' + formattedMonth + '-' + formattedDay;
};

/**
 *
 * @param travellers
 * @param type
 * @param count
 * @param maxAllowed
 * @returns {*}
 */
export const addCount = (travellers, type, count, maxAllowed) => {
    let updated = { count: count + 1 };
    if (updated.count === maxAllowed) updated.disableAdd = true;
    updated.disableRemove = false;
    return travellers.map(entry => (entry.type === type ? Object.assign({}, entry, updated) : entry));
};

/**
 *
 * @param travellers
 * @param type
 * @param count
 * @returns {*}
 */
export const reduceCount = (travellers, type, count) => {
    let updated = { count: count - 1, disableAdd: false };
    let isZeroChildOrInfant = (type === 'Child' || type === 'Infant') && updated.count === 0;
    let isOneAdult = type === 'Adult' && updated.count === 1;

    if (isZeroChildOrInfant) updated.disableRemove = true;
    if (isOneAdult) updated.disableRemove = true;
    return travellers.map(entry => (entry.type === type ? Object.assign({}, entry, updated) : entry));
};

/**
 * Calculate and return total travellers
 * @param travellers
 * @returns {*}
 */
export const getTotalCount = travellers => {
    return travellers.reduce((accumulator, entry) => accumulator + entry.count, 0);
};

/**
 * Return true if the infant count is greater than adult count
 * @param infant
 * @param adult
 * @returns {boolean}
 */
export const isInfantAlone = (infant, adult) => {
    return infant['count'] > adult['count'];
};

export const getFlightsWithUpdatedPrice = (flights, totalTravellers) => {
    if (totalTravellers === 1 || isUndefined(totalTravellers) || isArrayEmpty(flights)) return flights;
    return flights.map(flight => Object.assign({}, flight, { price: flight.price * totalTravellers }));
};

export const isObjectEmpty = obj => Object.entries(obj).length === 0 || typeof obj === 'undefined';

export const isArrayEmpty = arr => arr.length === 0 || typeof arr === 'undefined';

export const isUndefined = any => typeof any === 'undefined';

export const isEmptyString = string => typeof string === 'undefined' || string.length === 0 || string === null;

