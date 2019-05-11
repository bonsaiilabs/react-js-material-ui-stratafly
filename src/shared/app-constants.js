import Delta from '../images/delta.svg';
import SouthWest from '../images/southwest.svg';
import United from '../images/united-airlines.svg';
import American from '../images/american-airlines.svg';
import AlaskaAirlines from '../images/alaska-airlines.svg';
import AirCanada from '../images/air-canada.svg';

export const trip = {
  roundTrip: 'Round trip',
  oneWay: 'One way'
};

export const maxTravellersWarning = 'More than 9 passengers not allowed';

export const infantAloneWarning = 'One adult per infant is required';

export const defaultTravellers = [
  { type: 'Adult', age: '(12 + yr)', count: 1, disableAdd: false, disableRemove: true },
  { type: 'Child', age: '(2 - 11yr)', count: 0, disableAdd: false, disableRemove: true },
  { type: 'Infant', age: '(0 - 2yr)', count: 0, disableAdd: false, disableRemove: true }
];

export const stops = {
  nonStop: 'Nonstop',
  oneStop: '1 stop'
};

export const AirlineToIcon = {
  'United Airlines': United,
  'Air Canada': AirCanada,
  'Alaska Airlines': AlaskaAirlines,
  'American Airlines': American,
  'Delta Airlines': Delta,
  'Southwest Airlines': SouthWest
};

export const testFlights = {
  from: 'YVR',
  to: 'SFO',
  date: new Date(),
  flightsWithFares: [
    {
      airline: 'Air Canada',
      airlineCode: 'AC8840',
      arrive: '11:13',
      class: 'economy',
      depart: '08:40',
      price: 300,
      stops: 'Nonstop',
      totalTime: '2h 33m'
    },
    {
      airline: 'American Airlines',
      airlineCode: 'AA6072',
      arrive: '13:15',
      class: 'economy',
      depart: '06:44',
      price: 400,
      stops: '1 stop',
      totalTime: '6h',
      viaAirlineCode: 'LAX'
    },
    {
      airline: 'American Airlines',
      airlineCode: 'AA6072',
      arrive: '13:15',
      class: 'economy',
      depart: '06:44',
      price: 400,
      stops: '1 stop',
      totalTime: '6h',
      viaAirlineCode: 'LAX'
    },
    {
      airline: 'Air Canada',
      airlineCode: 'AC8840',
      arrive: '11:13',
      class: 'economy',
      depart: '08:40',
      price: 300,
      stops: 'Nonstop',
      totalTime: '2h 33m'
    }
  ]
};
