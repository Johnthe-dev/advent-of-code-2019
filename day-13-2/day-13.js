const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let timeStamp = Number(input.split('\n')[0]);
let buses = input.split('\n')[1].split(',');
console.log(buses);
let useableBuses=buses.filter(bus=>bus!=='x');
console.log(useableBuses);
let stopTimes = useableBuses.map(bus=>{let stopTime = Number(bus); while (stopTime<timeStamp){stopTime+=Number(bus)} return({busId:bus, soonestDeparture:stopTime})});

stopTimes = stopTimes.sort((a,b)=>{return a.soonestDeparture-b.soonestDeparture})
console.log((stopTimes[0].soonestDeparture-timeStamp)*Number(stopTimes[0].busId));