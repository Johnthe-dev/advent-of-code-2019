const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let timeStamp = Number(input.split('\n')[0]);
let buses = input.split('\n')[1].split(',');
buses = buses.map(x=>x==='x'?'x':Number(x));
let useableBuses=buses.filter(bus=>bus!=='x');
let stopTimes = useableBuses.map(bus=>{let stopTime = bus; while (stopTime<timeStamp){stopTime+=bus} return({busId:bus, soonestDeparture:stopTime})});

stopTimes = stopTimes.sort((a,b)=>{return a.soonestDeparture-b.soonestDeparture})
console.log((stopTimes[0].soonestDeparture-timeStamp)*stopTimes[0].busId);

const secondSolution = (array)=>{
    let step = 0;
    let block = array[0];
    let time = 0;
    for(let i = 1; i<array.length; i++){
        step = step+1;
        if(array[i]!=='x'){
            while((time+step)%array[i]!==0){
                time = time+block;
            }
            block = block*array[i];
        }
    }
    console.log(time);
}
let testArr1=[7,13,'x','x',59,'x',31,19];

let testArr2=[17,'x',13,19];

let testArr3=[67,7,'x',59,61];

let testArr4=[1789,37,47,1889];
secondSolution(testArr1);
secondSolution(testArr2);
secondSolution(testArr3);
secondSolution(testArr4);
secondSolution(buses);