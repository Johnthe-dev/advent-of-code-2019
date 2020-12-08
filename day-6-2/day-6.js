const fs = require('fs');
let input = fs.readFileSync('./input', {encoding: 'utf8', flag: 'r'});
let groups = input.split('\n\n');
let count = 0;
const unique = (array)=> {
	let arr = [];
	for (let i = 0; i < array.length; i++) {
		if (!arr.includes(array[i])&&array[i]!=='\n') {
			arr.push(array[i]);
		}
	}
	return arr;
}
const allSaidYes=(array)=>{
	let groupMembers=array.split('\n');
	let arr=groupMembers[0];
	for(let i=0; i<groupMembers.length; i++){
		for(let j=0; j<arr.length; j++)
			if(!groupMembers[i].includes(arr[j])){
				arr.remove(j);
			}
	}
	return arr.length;
}
let allAnswered = 0;
for(let i=0; i<groups.length; i++){
	let answers=unique(groups[i].split(''));
	count=count+answers.length;
	allAnswered+=allSaidYes(groups[i])
}
console.log(count);

console.log('second Solution= '+allAnswered);