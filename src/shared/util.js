import {flights_schedules} from "../data/flightSchedules";

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


const destinations = new Set(['YVR', 'SFO']);

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const getDayOfWeek = date => days[date.getDay()];

/**
 * Return one-way flights
 * @param from
 * @param to
 * @param when
 * @returns {*}
 */
export const oneWaySearch = (from, to, when) => {
    if (!(destinations.has(from) && destinations.has(to)) || from === to) {
        return [];
    }
    const dayOfWeek = getDayOfWeek(when);

    const flightsOnRoute = flights_schedules[from][to];
    const flightsThisDay = flightsOnRoute.filter(f => f.runsOn.has(dayOfWeek));

    const flightsWithFares = flightsThisDay.map(flight => {
        const classAndFares = Object.entries(flight.priceByClass).map(entry => ({ class: entry[0], price: entry[1] }));
        return classAndFares.map(classFare => {
            const flightWithClassFare = Object.assign({}, flight, classFare);
            delete flightWithClassFare.priceByClass; // this is not needed anymore
            delete flightWithClassFare.runsOn; // this is not needed anymore
            return flightWithClassFare;
        });
    });
    const flightWithFaresFlattened = [].concat(...flightsWithFares);

    return [{ from, to, date: when, flightsWithFares: flightWithFaresFlattened }];
};

/**
 * Return round-trip flights
 * @param from
 * @param to
 * @param departureDate
 * @param returnDate
 * @returns {*[]}
 */
export const roundTripSearch = (from, to, departureDate, returnDate) => {
    const departing = oneWaySearch(from, to, departureDate);
    const returning = oneWaySearch(to, from, returnDate);
    return [].concat(departing, returning);
};


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

