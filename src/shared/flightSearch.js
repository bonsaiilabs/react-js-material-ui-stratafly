import { flights_schedules } from '../data/flightSchedules';

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

  const flightsWithFares = flightsThisDay.map(flight => {
    const classAndFares = Object.entries(flight.priceByClass).map(entry => ({ class: entry[0], price: entry[1] }));
    return classAndFares.map(classFare => {
      const flightWithClassFare = Object.assign({}, flight, classFare);
      delete flightWithClassFare.priceByClass;
      delete flightWithClassFare.runsOn;
      return flightWithClassFare;
    });
  });
  const flightWithFaresFlattened = [].concat(...flightsWithFares);

  return [{ from, to, date: when, flightsWithFares: flightWithFaresFlattened }];
};

export const roundTripSearch = (from, to, departureDate, returnDate) => {
  const departing = oneWaySearch(from, to, departureDate);
  const returning = oneWaySearch(to, from, returnDate);
  return [].concat(departing, returning);
};

export const filterEconomyFlights = flightResults => {
  let flightsWithFares = flightResults['flightsWithFares'] || [];
  const economyFlights = flightsWithFares.filter(flight => flight.class === 'economy');
  return Object.assign({}, flightResults, { flightsWithFares: economyFlights });
};