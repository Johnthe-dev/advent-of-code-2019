const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let bagRules = input.split('\n');

let bags = ['shiny gold'];
for(let y = 0; y < 2000; y++) {
    for (let i = 0; i < bagRules.length; i++) {
        for (let j = 0; j < bags.length; j++) {
            if (bagRules[i].includes(bags[j])) {
                if (!bags.includes(bagRules[i].split(' ')[0] + ' ' + bagRules[i].split(' ')[1])) {
                    bags.push(bagRules[i].split(' ')[0] + ' ' + bagRules[i].split(' ')[1]);
                }
            }
        }
    }
    bagRules.filter(e=>!bags.includes(e.split(' ')[0] + ' ' + e.split(' ')[1]));
}
console.log(bags);
console.log(bags.length);