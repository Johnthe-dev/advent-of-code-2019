const fs = require('fs');
let input = fs.readFileSync('./input', {encoding: 'utf8', flag: 'r'});
let groups = input.split('\r\n\r\n');
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
	let arraySplit = array.split('\r\n');
	let answers = arraySplit[0].split('');
	arraySplit.forEach(person=>{
		for(let i = 0; i<arraySplit[0].split('').length; i++){
			if (!person.split('').includes(arraySplit[0].split('')[i])){
				answers = answers.filter(e=>e!==arraySplit[0].split('')[i]);
				console.log(answers);
				console.log(person);
			}
		}
	});
	console.log(answers.length);
	return answers;
}

let allAnswered = 0;
for(let i=0; i<groups.length; i++){
	let answers=unique(groups[i].split(''));
	count=count+answers.length;
	allAnswered+=allSaidYes(groups[i]).length
	console.log(allAnswered);
}