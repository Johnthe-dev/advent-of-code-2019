const fs = require('fs');
let input = fs.readFileSync('./input', {encoding: 'utf8', flag: 'r'});
let coordinates = input.split('\n');
// let coordinates = ['BBFFBFFLLL']
let rows = [];
for(let j = 0; j < 128; j++) {
	rows.push(j);
}
let columns = [];
for(let l = 0; l < 8; l++) {
	columns.push(l);
}
let maxSeat=0;
let minSeat=10000;
let takenSeats=[]
for(let k = 0; k < coordinates.length; k++) {
	let coordinate=coordinates[k];
	let itemRow = rows;
	for(let i = 0; i < 7; i++) {
		let half = Math.ceil(itemRow.length / 2);
		if(coordinate[i] === 'F') {
			itemRow = itemRow.slice(0, half);
		} else {
			itemRow = itemRow.slice(half, itemRow.length);
		}
	}
	let row = itemRow[0];
	let itemColumn = columns;
	for(let i = 7; i < 10; i++) {
		let half = Math.ceil(itemColumn.length / 2);
		if(coordinate[i] === 'L') {
			itemColumn = itemColumn.slice(0, half);
		} else {
			itemColumn = itemColumn.slice(half, itemColumn.length);
		}
	}
	let column = itemColumn[0];
	let seat=row*8 + column;
	if (seat>maxSeat){
		maxSeat=seat;
	}
	if (seat<minSeat){
		minSeat=seat;
	}
	takenSeats.push(seat);
}
for(let ans=minSeat;ans<maxSeat;ans++){
	if(!takenSeats.includes(ans)){
		console.log(ans);
	}
}
