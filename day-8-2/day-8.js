const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let steps = input.split('\n');
let parsedSteps=[];

steps.forEach(step=>{
	let splitted = step.split('');
	let type=splitted[0];
	let direction=splitted[4];
	let quantity = step.split(direction)[1];
	parsedSteps.push({'type':type, 'direction':direction, 'quantity':parseInt(quantity, 10)})
	}
)
let j = 0;
let final = false
while (final !== true) {
	let repeat=false;
	let stepsTaken=[];
	let i = 0;
	let acc = 0;
	while (repeat !== true) {
		if (i === parsedSteps.length) {
			final = true;
			repeat=true;
			console.log(acc);
		} else {
			stepsTaken.push(i);

			switch (parsedSteps[i].type) {
				case 'j':
					if (i === j) {
						i++;
					} else if (parsedSteps[i].direction === '+') {
						i += parsedSteps[i].quantity;
					} else {
						i -= parsedSteps[i].quantity;
					}
					break;
				case 'a':
					if (parsedSteps[i].direction === '+') {
						acc = acc + parsedSteps[i].quantity;
					} else {
						acc -= parsedSteps[i].quantity;
					}
					i++;
					break;
				case 'n':
					if (i === j) {
						if (parsedSteps[i].direction === '+') {
							i += parsedSteps[i].quantity;
						} else {
							i -= parsedSteps[i].quantity;
						}
					} else {
						i++;
					}
					break;
				default:
					break;
			}
			if (stepsTaken.includes(i)) {
				repeat = true;
			}
		}
	}
	j++;
}