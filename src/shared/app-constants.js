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

export const maxTravellersAllowed = 9;

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

export const defaultTravellers = [
  { type: 'Adult', age: '(12 + yr)', count: 1, disableAdd: false, disableRemove: true },
  { type: 'Child', age: '(2 - 11yr)', count: 0, disableAdd: false, disableRemove: true },
  { type: 'Infant', age: '(0 - 2yr)', count: 0, disableAdd: false, disableRemove: true }
];

export const airlineClassToLabel = { economy: 'Economy' };

export const codeToCityName = { 'YVR': 'Vancouver', 'SFO': 'San Francisco'};

export const flightInfo = {
  legRoom: 'Above average legroom',
  wifi: 'Wifi onBoard',
  usb: 'In-seat power and USB outlets',
 delayMessage:  'This flight is often delayed by 30+ minutes'
};
