import { stops } from '../shared/app-constants';

export const flights_schedules = {
  YVR: {
    SFO: [
      {
        depart: '06:00',
        arrive: '08:25',
        airline: 'United Airlines',
        airlineCode: 'UA618',
        totalTime: '2h 25m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed']),
        priceByClass: { economy: 450, firstClass: 1000 }
      },
      {
        depart: '08:40',
        arrive: '11:13',
        airline: 'Air Canada',
        airlineCode: 'AC8840',
        totalTime: '2h 33m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 300, premiumEconomy: 650 }
      },
      {
        depart: '11:43',
        arrive: '14:08',
        airline: 'United Airlines',
        airlineCode: 'UA2285',
        totalTime: '2h 25m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed']),
        priceByClass: { economy: 450, firstClass: 1000 }
      },
      {
        depart: '13:40',
        arrive: '16:04',
        airline: 'Air Canada',
        airlineCode: 'AC566',
        totalTime: '2h 24m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 300, premiumEconomy: 650 }
      },
      {
        depart: '13:56',
        arrive: '16:25',
        airline: 'United Airlines',
        airlineCode: 'UA5687',
        totalTime: '2h 29m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed']),
        priceByClass: { economy: 450, firstClass: 1000 }
      },
      {
        depart: '19:16',
        arrive: '21:43',
        airline: 'United Airlines',
        airlineCode: 'UA2423',
        totalTime: '2h 27m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed']),
        priceByClass: { economy: 450, firstClass: 1000 }
      },
      {
        depart: '06:00',
        arrive: '10:10',
        airline: 'Alaska Airlines',
        airlineCode: 'AS2166',
        totalTime: '4h 10m',
        viaAirlineCode: 'SEA',
        stops: stops.oneStop,
        runsOn: new Set(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 350, business: 800 }
      },
      {
        depart: '06:44',
        arrive: '13:15',
        airline: 'American Airlines',
        airlineCode: 'AA6072',
        totalTime: '6h',
        viaAirlineCode: 'LAX',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 400, business: 850 }
      },
      {
        depart: '07:30',
        arrive: '15:21',
        airline: 'Air Canada',
        airlineCode: 'AC200',
        totalTime: '7h 51m',
        viaAirlineCode: 'YYC',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 300, premiumEconomy: 650 }
      },
      {
        depart: '08:00',
        arrive: '12:00',
        airline: 'Alaska Airlines',
        airlineCode: 'AS2269',
        totalTime: '4h 25m',
        viaAirlineCode: 'SEA',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 350, business: 800 }
      },
      {
        depart: '08:10',
        arrive: '12:08',
        airline: 'Air Canada',
        airlineCode: 'AC8089',
        totalTime: '3h 58m',
        viaAirlineCode: 'SEA',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 300, premiumEconomy: 650 }
      },
      {
        depart: '08:40',
        arrive: '14:38',
        airline: 'Air Canada',
        airlineCode: 'AC550',
        totalTime: '5h 58m',
        viaAirlineCode: 'LAX',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 300, premiumEconomy: 650 }
      }
    ]
  },
  SFO: {
    YVR: [
      {
        depart: '08:20',
        arrive: '10:42',
        airline: 'Air Canada',
        airlineCode: 'AC8839',
        totalTime: '2h 22m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 300, premiumEconomy: 650 }
      },
      {
        depart: '08:30',
        arrive: '10:55',
        airline: 'United Airlines',
        airlineCode: 'UA784',
        totalTime: '2h 25m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 450, firstClass: 1000 }
      },
      {
        depart: '10:40',
        arrive: '13:09',
        airline: 'United Airlines',
        airlineCode: 'UA5791',
        totalTime: '2h 29m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 450, firstClass: 1000 }
      },
      {
        depart: '16:04',
        arrive: '18:21',
        airline: 'United Airlines',
        airlineCode: 'UA1968',
        totalTime: '2h 17m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 450, firstClass: 1000 }
      },
      {
        depart: '16:55',
        arrive: '19:13',
        airline: 'Air Canada',
        airlineCode: 'AC569',
        totalTime: '2h 18m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 300, premiumEconomy: 650 }
      },
      {
        depart: '19:20',
        arrive: '21:38',
        airline: 'United Airlines',
        airlineCode: 'UA460',
        totalTime: '2h 18m',
        stops: stops.nonStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 450, firstClass: 1000 }
      },
      {
        depart: '06:00',
        arrive: '12:21',
        airline: 'Delta Airlines',
        airlineCode: 'DL2494',
        totalTime: '6h 21m',
        viaAirlineCode: 'SLC',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 500, business: 988 }
      },
      {
        depart: '06:00',
        arrive: '14:25',
        airline: 'Southwest Airlines',
        airlineCode: 'WN831',
        totalTime: '8h 25m',
        viaAirlineCode: 'LAX',
        stops: stops.oneStop,
        runsOn: new Set(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']),
        priceByClass: { economy: 455, business: 955 }
      },
      {
        depart: '06:25',
        arrive: '10:31',
        airline: 'United Airlines',
        airlineCode: 'UA780',
        totalTime: '4h 06m',
        viaAirlineCode: 'SEA',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 450, firstClass: 1000 }
      },
      {
        depart: '06:35',
        arrive: '10:36',
        airline: 'Delta Airlines',
        airlineCode: 'DL1687',
        totalTime: '4h 01m',
        viaAirlineCode: 'SEA',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 500, business: 988 }
      },
      {
        depart: '07:00',
        arrive: '11:48',
        airline: 'Alaska Airlines',
        airlineCode: 'AS367',
        totalTime: '4h 48m',
        viaAirlineCode: 'PDX',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 350, business: 800 }
      },
      {
        depart: '07:00',
        arrive: '13:27',
        airline: 'Alaska Airlines',
        airlineCode: 'AS1922',
        totalTime: '6h 27m',
        viaAirlineCode: 'LAX',
        stops: stops.oneStop,
        runsOn: new Set(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
        priceByClass: { economy: 350, business: 800 }
      }
    ]
  }
};
