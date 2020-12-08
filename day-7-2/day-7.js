const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let bagRules = input.split('\n');

const map = new Map();

function containsBag(color) {
    if(color === 'shiny gold') return true;
    if(!map.has(color)) return false;

    const bagsIn = map.get(color);
    for (const {color: bag} of bagsIn) {
        if(containsBag(bag)) {
            return true;
        }
    }
    return false;
}

for (const line of bagRules) {
    const [bag, bags] = line.split(' bags contain ');

    bags.replace(/\./, '').split(', ').map(txt => {
        const {groups} = /((?<number>\d+) )?(?<color>.*)/.exec(txt.replace(/ bags?/, ''));
        if(!map.has(bag)) {
            map.set(bag, []);
        }
        if(!groups.number) groups.number = 0;
        map.set(bag, [...map.get(bag), groups]);
    })
}

const colors = map.keys();
let total = 0;

for (const color of colors) {
    if(containsBag(color) && color !== 'shiny gold') {
        total++;
    }
}

console.log(total);

// part 2

function sumBags(topBag) {
    if(topBag.number === 0) return 0;

    const bagsIn = map.get(topBag.color);
    let sum = 1;
    for (const bag of bagsIn) {
        sum += bag.number * sumBags(bag);
    }
    return sum;
}

console.log(sumBags({number: 1, color: 'shiny gold'})-1);

// console.log(bagMap);