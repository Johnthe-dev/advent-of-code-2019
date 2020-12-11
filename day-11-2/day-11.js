const fs = require('fs');
let input = fs.readFileSync('./input', {encoding: 'utf8', flag: 'r'});
// let input = 'L.LL.LL.LL\n' +
// 	'LLLLLLL.LL\n' +
// 	'L.L.L..L..\n' +
// 	'LLLL.LL.LL\n' +
// 	'L.LL.LL.LL\n' +
// 	'L.LLLLL.LL\n' +
// 	'..L.L.....\n' +
// 	'LLLLLLLLLL\n' +
// 	'L.LLLLLL.L\n' +
// 	'L.LLLLL.LL'
let seatRows = input.split('\n');
for(let i = 0; i < seatRows.length; i++) {
	seatRows[i] = seatRows[i].split('');
}
const deepCopy = (arr) => {
	let copy = [];
	arr.forEach(elem => {
		if(Array.isArray(elem)) {
			copy.push(deepCopy(elem))
		} else {
			if(typeof elem === 'object') {
				copy.push(deepCopyObject(elem))
			} else {
				copy.push(elem)
			}
		}
	})
	return copy;
}
let seatRowsTwo = deepCopy(seatRows);
let different = true;
while(different === true) {
	let priorSeatsArrangement = deepCopy(seatRows);
	const valuesAroundPoint = (i, j) => {
		return ([[i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
			[i, j - 1], [i, j + 1],
			[i + 1, j - 1], [i + 1, j], [i + 1, j + 1]].map(coordinates => {
			return (priorSeatsArrangement[coordinates[0]] ? priorSeatsArrangement[coordinates[0]][coordinates[1]] : undefined);
		}));
	};
	for(let i = 0; i < seatRows.length; i++) {
		for(let j = 0; j < seatRows[0].length; j++) {
			if(priorSeatsArrangement[i][j] === 'L') {
				if(!valuesAroundPoint(i, j).includes('#')) {
					seatRows[i][j] = '#';
				}
			} else if(priorSeatsArrangement[i][j] === '#') {
				if(valuesAroundPoint(i, j).filter(item => item === '#').length > 3) {
					seatRows[i][j] = 'L';
				}
			}
		}
	}

	if(JSON.stringify(priorSeatsArrangement) === JSON.stringify(seatRows)) {
		different = false;
	}
}
seatRows = seatRows.join();
let seats = seatRows.split('');
let seatsCount = seats.filter(item => item === '#').length;
console.log(seatsCount);


different = true;
while(different === true) {
	let priorSeatsArrangement = deepCopy(seatRowsTwo);
	const valuesAroundPoint = (i, j) => {
		return ([[-1, -1], [-1, 0], [-1, 1],
			[0, -1], [0, 1],
			[1, -1], [1, 0], [1, 1]].map(coordinates => {
				let iC = i;
				let jC = j;
			if(priorSeatsArrangement[coordinates[0]+iC]) {
				while(priorSeatsArrangement[coordinates[0]+iC]&&priorSeatsArrangement[coordinates[0]+iC][coordinates[1]+jC] === '.') {
					iC=iC+coordinates[0];
					jC=jC+coordinates[1];
				}
				return (priorSeatsArrangement[coordinates[0]+iC]?priorSeatsArrangement[coordinates[0]+iC][coordinates[1]+jC]:undefined);
			} else{
				return undefined;
			}
		}));
	};
	for(let i = 0; i < seatRowsTwo.length; i++) {
		for(let j = 0; j < seatRowsTwo[0].length; j++) {
			if(priorSeatsArrangement[i][j] === 'L') {
				if(!valuesAroundPoint(i, j).includes('#')) {
					seatRowsTwo[i][j] = '#';
				}
			} else if(priorSeatsArrangement[i][j] === '#') {
				if(valuesAroundPoint(i, j).filter(item => item === '#').length > 4) {
					seatRowsTwo[i][j] = 'L';
				}
			}
		}
	}

	if(JSON.stringify(priorSeatsArrangement) === JSON.stringify(seatRowsTwo)) {
		different = false;
	}
}
seatRowsTwo = seatRowsTwo.join();
seats = seatRowsTwo.split('');
seatsCount = seats.filter(item => item === '#').length;
console.log(seatsCount);