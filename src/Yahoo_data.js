import { YahooFinance } from 'yahoo-finance-api';

const earnings = await YahooFinance.getEarnings(new Date('2020-06-16')); // default new Date()
console.log(earnings);
// Upcoming Earning
[{ 
    epsEstimate: 1.17,
    epsReported: undefined,
    epsSurprise: undefined,
    reportDate: '2020-06-16',
    symbol: 'ORCL',
    company: 'Oracle Corp',
    announceTime: 'After Market Close',
    epsSurpriseDollar: undefined
}]
// Previous Earning
[{
    epsEstimate: 2.33,
    epsReported: 2.45,
    epsSurprise: 5.15,
    reportDate: '2020-06-11',
    symbol: 'ADBE',
    company: 'Adobe Inc.',
    announceTime: 'Time Not Supplied',
    epsSurpriseDollar: 0.12
}]