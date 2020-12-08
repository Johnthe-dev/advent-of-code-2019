const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let bagRules = input.split('\n');

// for(let y = 0; y < 2000; y++) {
//     for (let i = 0; i < bagRules.length; i++) {
//         for (let j = 0; j < bags.length; j++) {
//             if (bags[j].includes(bagRules[i])) {
//                 if (!bags.includes(bagRules[i].split(' ')[0] + ' ' + bagRules[i].split(' ')[1])) {
//                     bags.push(bagRules[i].split(' ')[0] + ' ' + bagRules[i].split(' ')[1]);
//                     console.log(bagRules[i]);
//                 }
//             }
//         }
//     }
//     bagRules.filter(e=>!bags.includes(e.split(' ')[0] + ' ' + e.split(' ')[1]));
// }
let bagMap=[];
for(let j = 0; j<5; j++){
    console.log(bagRules[j]);
let bagRule=bagRules[j].split(' ');
    let containedBags = [];
for(let i = 0; i < bagRule.length; i++){

    if(!isNaN(parseInt(bagRule[i], 10))){
        containedBags[bagRule[i+1]+' '+bagRule[i+2]]=bagRule[i];
    }

}
    bagMap[bagRule[0]+' '+bagRule[1]]=containedBags;
}
console.log(bagMap);