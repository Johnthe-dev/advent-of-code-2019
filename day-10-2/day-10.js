const fs = require('fs');
let input = fs.readFileSync('./input', {encoding: 'utf8', flag: 'r'});
// input='28\n' +
// 	'33\n' +
// 	'18\n' +
// 	'42\n' +
// 	'31\n' +
// 	'14\n' +
// 	'46\n' +
// 	'20\n' +
// 	'48\n' +
// 	'47\n' +
// 	'24\n' +
// 	'23\n' +
// 	'49\n' +
// 	'45\n' +
// 	'19\n' +
// 	'38\n' +
// 	'39\n' +
// 	'11\n' +
// 	'1\n' +
// 	'32\n' +
// 	'25\n' +
// 	'35\n' +
// 	'8\n' +
// 	'17\n' +
// 	'7\n' +
// 	'9\n' +
// 	'4\n' +
// 	'2\n' +
// 	'34\n' +
// 	'10\n' +
// 	'3'
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
let arrangements = 1;
lines.sort(function(a,b) {return a - b});
lines.push(lines[lines.length - 1] + 3);
let tribonacci = [0,1,2,4,7,13,24];
for (let i = 7; i < 80; i++) {
	let newElem = tribonacci[i-1] + tribonacci[i-2] + tribonacci[i-3];
	tribonacci.push(newElem);
}
let oneJoltDifferences = 0;
for (let i = 0; i < lines.length; i++) {
	let diff = ( i === 0 ? (lines[i] - 0) : (lines[i] - lines[i-1]) );
	if (diff === 1) {
		oneJoltDifferences++;
	} else {
		if(oneJoltDifferences > 0) {
			arrangements*=tribonacci[oneJoltDifferences];
			oneJoltDifferences = 0;
		}
	}
}
console.log(arrangements);