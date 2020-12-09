const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let lines = input.split('\n');
console.log(lines);
let numOfPrev = 25;
let twentyFivePrev = lines.slice(0, numOfPrev-1);
let broken=false;
let i=numOfPrev;
while (broken!==true){
    broken=true;
 for(let j =0; j<numOfPrev; j++){
     for(let k = 0;k<numOfPrev; k++){
         if(j!==k){
             if(parseInt(twentyFivePrev[j], 10)+parseInt(twentyFivePrev[k], 10)===parseInt(lines[i], 10)){
                 broken=false;
             }
         }
     }
 }
 twentyFivePrev.push(lines[i]);
 twentyFivePrev.shift();
 i++;
}
console.log(lines[i]);