//First challenge of the Advent of Code 2019.
//Problem may be found at https://adventofcode.com/2019/day/4
//solution by John Johnson-Rodgers <john@johnthe.dev>

let startValue = 246515;
let endValue = 739105;
function createArrayOfNonDescendingDigits(start, end) {
	let arrayOfNonDescend = [];

	let firstValidNumber = start.toString().split("");
	for (let j=0; j<6; j++) {
		for(let i = 0; i < 6; i++) {
			while(parseInt(firstValidNumber[i])> parseInt(firstValidNumber[i+1])) {
				firstValidNumber[i+1] = parseInt(firstValidNumber[i+1]) + 1;
			}
		}
	}
	firstValidNumber = parseInt(firstValidNumber.join(""));
	let testValue = firstValidNumber;
while (testValue<end) {
	let testArray = testValue.toString().split("");
	if (!(testArray[0]!==testArray[1] && testArray[1]!==testArray[2] && testArray[2]!==testArray[3] &&
		testArray[3]!==testArray[4] && testArray[4]!==testArray[5]) && (parseInt(testArray[0])<= parseInt(testArray[1])
		&& parseInt(testArray[1])<= parseInt(testArray[2]) && parseInt(testArray[2])<= parseInt(testArray[3]) &&
		parseInt(testArray[3])<= parseInt(testArray[4]) && parseInt(testArray[4])<= parseInt(testArray[5]))) {
		arrayOfNonDescend.push(testValue);
	}
	testValue = testValue + 1
}
return (arrayOfNonDescend);
}

console.log(createArrayOfNonDescendingDigits(startValue,endValue).length);