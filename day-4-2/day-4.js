const fs = require('fs');
let input = fs.readFileSync('./input', {encoding: 'utf8', flag: 'r'});
let passports = input.split('\n\n');
let count = 0;
for(let i=0; i<passports.length; i++) {
	let passport = passports[i].replace(/ /g, '???');
	passport = passport.replace(/\n/g, '???');
	passport = passport.split('???');

	if(passports[i].includes('byr:') && passports[i].includes('iyr:') && passports[i].includes('eyr:') && passports[i].includes('hgt:')
		&& passports[i].includes('hcl:') && passports[i].includes('ecl:') && passports[i].includes('pid:')) {
		let result = true;
		for(let j=0; j<passport.length; j++){
			let type = passport[j].split(':')[0];
			let value=passport[j].split(':')[1];
			switch(type){
				case 'byr':
					if(value>2002||value<1920){
						console.log(passport+" "+value);
						result=false;
					}
					break;
				case 'iyr':
					if(value>2020||value<2010){result=false;}
					break;
				case 'eyr':
					if(value>2030||value<2020){
						result=false;
					}
					break;
				case 'hgt':
					if(value.slice(-2)==='cm') {
						if(value.split('cm')[0]<150||value.split('cm')[0]>193){
							result = false;
							break;
						}
						break;
					} else if(value.slice(-2)==='in') {
						if(value.split('in')[0]<59||value.split('in')[0]>76){
							result = false;
							break;
						}
						break;
					}
					result = false;
					break;
				case 'hcl':
					let validValues=['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
					if(value.length!==7||value[0]!=='#'){
						result=false;
					} else {
						for(let k=1; k<value.length; k++){
							if(!validValues.includes(value[k])){
								result=false;
							}
						}
					}
					break;
				case 'ecl':
					let validEyes=['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
					if(!validEyes.includes(value)){
						result=false;
					}
					break;
				case 'pid':
					if(value.length!==9){
						result=false;
						break;
					}
					break;
				default:
					break;
			}
		}
		if(result){count=count+1;}
	}
}
	console.log(count);