import { flights_schedules } from '../data/flightSchedules';
import { isArrayEmpty, isObjectEmpty, isUndefined } from './util';

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

/**
 *
 * @param results
 * @param totalTravellers
 * @returns {*}
 */
export const updateFlightsWithPrices = (results, totalTravellers) => {
  if (isObjectEmpty(results)) return {};
  let updatedFlightsWithFares = addPriceForTravellers(results.flightsWithFares, totalTravellers);
  return Object.assign({}, results, { flightsWithFares: updatedFlightsWithFares });
};

const addPriceForTravellers = (flights, totalTravellers) => {
  if (totalTravellers === 1 || isUndefined(totalTravellers) || isArrayEmpty(flights)) return flights;
  return flights.map(flight => Object.assign({}, flight, { price: flight.price * totalTravellers }));
};
