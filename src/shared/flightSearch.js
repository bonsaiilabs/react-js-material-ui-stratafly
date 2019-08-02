import { flights_schedules } from '../data/flightSchedules';
import { isArrayEmpty, isObjectEmpty, isUndefined } from './util';

const destinations = new Set(['YVR', 'SFO']);
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const getDayOfWeek = date => days[date.getDay()];

export const oneWaySearch = (from, to, when) => {
  if (!(destinations.has(from) && destinations.has(to)) || from === to) {
    return [];
  }
  const dayOfWeek = getDayOfWeek(when);

  const flightsOnRoute = flights_schedules[from][to];
  const flightsThisDay = flightsOnRoute.filter(f => f.runsOn.has(dayOfWeek));

  const economyFlightsWithFares = flightsThisDay.map(flight => {
    const classFare = {
      class: Object.entries(flight.priceByClass)[0][0],
      price: Object.entries(flight.priceByClass)[0][1]
    };
    const flightWithClassFare = Object.assign({}, flight, classFare);
    delete flightWithClassFare.priceByClass;
    delete flightWithClassFare.runsOn;
    return flightWithClassFare;
  });

  return [{ from, to, date: when, flightsWithFares: economyFlightsWithFares }];
};

export const roundTripSearch = (from, to, departureDate, returnDate) => {
  const departing = oneWaySearch(from, to, departureDate);
  const returning = oneWaySearch(to, from, returnDate);
  return [].concat(departing, returning);
};

export const updateFlightsWithPrices = (results, totalTravellers) => {
  if (isObjectEmpty(results)) return {};
  let updatedFlightsWithFares = addPriceForTravellers(results.flightsWithFares, totalTravellers);
  return Object.assign({}, results, { flightsWithFares: updatedFlightsWithFares });
};

const addPriceForTravellers = (flights, totalTravellers) => {
  if (totalTravellers === 1 || isUndefined(totalTravellers) || isArrayEmpty(flights)) return flights;
  return flights.map(flight => Object.assign({}, flight, { price: flight.price * totalTravellers }));
};
