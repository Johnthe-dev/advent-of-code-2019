const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
// input = '..##.......\n' +
// 	'#...#...#..\n' +
// 	'.#....#..#.\n' +
// 	'..#.#...#.#\n' +
// 	'.#...##..#.\n' +
// 	'..#.##.....\n' +
// 	'.#.#.#....#\n' +
// 	'.#........#\n' +
// 	'#.##...#...\n' +
// 	'#...##....#\n' +
// 	'.#..#...#.#'
input = input.split('\n');
function countTrees(xSlope, ySlope) {
	let xPosition = 0;
	let yPosition = 0;
	let treesHit = 0;

	for(yPosition; yPosition < (input.length); yPosition = yPosition + ySlope) {
		(input[yPosition][xPosition] === '#') && (treesHit = treesHit + 1);
		xPosition = xPosition + xSlope;
		(xPosition >= input[yPosition].length) && (xPosition = xPosition - input[yPosition].length);
	}
	return (treesHit);
}

console.log(countTrees(1, 1) * countTrees(3, 1) * countTrees(5, 1) * countTrees(7, 1) * countTrees(1, 2));
console.log(countTrees(1, 1) +" "+ countTrees(3, 1)+" "+  countTrees(5, 1) +" "+  countTrees(7, 1) +" "+  countTrees(1, 2));