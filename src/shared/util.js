import {flights_schedules} from "../data/flightSchedules";
import {stops} from "./app-constants";

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

export const getFlightsWithUpdatedPrice = (flights, totalTravellers) => {
    if (totalTravellers === 1 || isUndefined(totalTravellers) || isArrayEmpty(flights)) return flights;
    return flights.map(flight => Object.assign({}, flight, { price: flight.price * totalTravellers }));
};

export const isObjectEmpty = obj => Object.entries(obj).length === 0 || typeof obj === 'undefined';

export const isArrayEmpty = arr => arr.length === 0 || typeof arr === 'undefined';

export const isUndefined = any => typeof any === 'undefined';

export const isEmptyString = string => typeof string === 'undefined' || string.length === 0 || string === null;


/**
 *
 * @param flights
 * @param filters
 * @returns {*}
 */
export const filterSearchResults = (flights, filters) => {
    const getFlightsByClassFilter = inputFlights => {
        const updatedFlightsByClass = inputFlights.flightsWithFares.filter(f => f.class === filters.selectedAirlineClass);

        return Object.assign({}, inputFlights, {
            flightsWithFares: updatedFlightsByClass
        });
    };

    const getFlightsByAirlineFilter = inputFlights => {
        const selectedFlights = new Set(
            Object.entries(filters.selectedAirlines)
                .filter(entry => entry[1])
                .map(entry => entry[0])
        );

        let updatedflightsWithFares =
            inputFlights.flightsWithFares.length < 1
                ? inputFlights.flightsWithFares
                : inputFlights.flightsWithFares.filter(f => selectedFlights.has(f.airline));

        return Object.assign({}, inputFlights, { flightsWithFares: updatedflightsWithFares });
    };

    const getFlightsByStopFilter = inputFlights => {
        if (filters.selectedStops === 'Any') return inputFlights;
        else if (filters.selectedStops === '2 stops') {
            // because 2-stops flights are not supported
            return Object.assign({}, inputFlights, { flightsWithFares: [] });
        } else if (filters.selectedStops === 'Non stop') {
            const nonStopFlightsWithFares = inputFlights.flightsWithFares.filter(flight => flight.stops === stops.nonStop);
            return Object.assign({}, inputFlights, { flightsWithFares: nonStopFlightsWithFares });
        }
        const oneStopFlightsWithFares = inputFlights.flightsWithFares.filter(flight => flight.stops === stops.oneStop);
        return Object.assign({}, inputFlights, { flightsWithFares: oneStopFlightsWithFares });
    };

    const getFlightsByTimesFilter = (inputFlights, userSelectedSlots) => {
        const isMorning = (hh, mm) => (hh >= 0 && hh <= 12) || (hh === 13 && mm === 0);
        const isAfternoon = (hh, mm) => (hh >= 12 && hh <= 17) || (hh === 18 && mm === 0);
        const isEvening = hh => hh >= 17 && hh <= 23;

        const isFlightIncluded = departTime => {
            if (userSelectedSlots.size === 0) return true; // Anytime

            const [hh, mm] = departTime.split(':').map(n => parseInt(n));
            return (
                (isMorning(hh, mm) && userSelectedSlots.has('Morning')) ||
                (isAfternoon(hh, mm) && userSelectedSlots.has('Afternoon')) ||
                (isEvening(hh) && userSelectedSlots.has('Evening'))
            );
        };
        const updatedFlights = inputFlights.flightsWithFares.filter(f => isFlightIncluded(f.depart));

        return Object.assign({}, inputFlights, {
            flightsWithFares: updatedFlights
        });
    };

    const applyFilters = (flights, timeFilters) => {
        const filteredByClass = getFlightsByClassFilter(flights);
        const filteredByAirline = getFlightsByAirlineFilter(filteredByClass);
        const filteredByStops = getFlightsByStopFilter(filteredByAirline);
        const filteredByTimes = getFlightsByTimesFilter(filteredByStops, timeFilters);
        return filteredByTimes;
    };

    // -- main logic -- //
    if (flights.length < 1) return flights;
    else if (flights.length === 1) {
        //TODO Do not decide trip type based on length of an array. Pass isRoundTrip
        // one-way flights
        return [applyFilters(flights[0], filters.selectedOutboundTimes)];
    }
    // 2-way flights
    const departing = applyFilters(flights[0], filters.selectedOutboundTimes);
    const returning = applyFilters(flights[1], filters.selectedReturnTimes);
    return [departing, returning];
};

