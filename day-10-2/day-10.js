const fs = require('fs');
let input = fs.readFileSync('./input', {encoding: 'utf8', flag: 'r'});
let lines = input.split('\n');
lines.sort((a, b)=> {
	return a - b;});
let ones = 0;
let twos = 0;
let threes = 0;
for(let i=0; i<lines.length-1;i++){
	switch(lines[i+1]-lines[i]){
		case 1:
			ones++
			break;
		case 2:
			twos++;
			break;
		case 3:
			threes++;
			break;
		default:
			console.log('invalid');
	}
}
threes++;
console.log(ones*threes);