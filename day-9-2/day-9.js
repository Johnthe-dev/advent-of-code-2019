const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let lines = input.split('\n');
let numOfPrev = 25;
let twentyFivePrev = lines.slice(0, numOfPrev);
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
console.log('first Answer: '+parseInt(lines[i-1], 10));
let breakpoint = parseInt(lines[i-1], 10);
let summed = false;
let start = 0;
while (!summed){
    let under = true;
    while(under){
        let sum = 0
        for(let j =start; j<lines.length; j++){
            sum=sum+parseInt(lines[j], 10);
            if(sum>breakpoint){
                j = lines.length;
                under=false;
            } else if(sum===breakpoint){
                let smallest = 1000000000000;
                let largest = 0;
                for(i=start; i<j; i++){
                    if(parseInt(lines[i], 10)<smallest){
                        smallest=parseInt(lines[i], 10);
                    }
                    if(parseInt(lines[i], 10)>largest){
                        largest = parseInt(lines[i], 10);
                    }
                }
                console.log('second answer: '+(smallest+largest));
                summed=true;
            }
        }
    }
    start++;

}
