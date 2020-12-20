const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let instructions = input.split('\n');
for(let i = 0; i<instructions.length;i++){
    if(instructions[i][1]==='a'){
        instructions[i]={type:'mask', value:instructions[i].split('= ')[1]}
    } else if (instructions[i][1]==='e'){
        instructions[i]={type:'memory', address:Number(instructions[i].split('[')[1].split(']')[0]), addressTwo:('000000000000000000000000000000000000'+Number(Number(instructions[i].split('[')[1].split(']')[0])).toString(2)).slice(-36).split(''), value:('000000000000000000000000000000000000'+Number(instructions[i].split('= ')[1]).toString(2)).slice(-36), valueTwo:instructions[i].split('= ')[1]}
    } else{
        console.log('error');
    }
}
const solutionOne = (array)=>{
    let values = [];
    let mask=array[0].value;
    for(let i = 1; i<array.length;i++){
        if(array[i].type==='mask'){
            mask=array[i].value;
        } else if(array[i].type==='memory'){
            array[i].value = array[i].value.split('');
            for(let j=0; j<36;j++){
                if(mask[j]!=='X'){
                    array[i].value[j] = mask[j];
                }
            }
            if(!Number.isInteger(parseInt(array[i].value.join('')))){
                console.log('Error');
            }
            values[array[i].address] =array[i].value.join('');
        }
    }
    let total = 0;
    for(let i=0; i<values.length; i++){
        if(Number.isInteger(parseInt(values[i], 2))){
            total = total+parseInt(values[i], 2);
        }
    }
    return total;
}
const solutionTwo = (array)=>{
    let values = [];
    let mask=array[0].value;
    let numberOfXs = 0;
    for(let i = 1; i<array.length;i++){
        if(array[i].type==='mask'){
            mask=array[i].value;
            numberOfXs+=array[i].value.split('').filter(x=>x==='X').length;
        } else if(array[i].type==='memory'){
            for(let j=0; j<36;j++){
                switch (mask[j]){
                    case 'X':
                    case '1':
                        array[i].addressTwo[j] = mask[j];
                        break;
                    case '0':
                        break;
                    default:
                        console.log('error'+mask[j]);
                        break;
                }
            }
            let addresses=[0];
            for(let l = 0; l<=35; l++){
                switch(array[i].addressTwo[l]){
                    case 'X':
                        addresses.forEach((x, position)=>{
                            addresses.push(x);
                            addresses[position]= x+Math.pow(2, 35-l);
                        }
                        );
                        break;
                    case '1':
                        addresses.forEach((x, position)=>addresses[position]= x+Math.pow(2, 35-l));
                        break;
                    case '0':
                        break;
                    default:
                        console.log('error2'+array[i].addressTwo[l]);
                        break;
                }
            }
            for(let m = 0; m<addresses.length; m++){
                values[addresses[m].toString()] =Number(array[i].valueTwo);
            }
        }
    }
    let total = 0;
    let numberOfRowsAddedTogether = 0;
    console.log('Rows in array: '+values.length);
    values.forEach(value=> {total = total+value; numberOfRowsAddedTogether++;});
    console.log('Rows counted: '+numberOfRowsAddedTogether)
    return total;
}
// console.log(solutionOne(instructions));
console.log(solutionTwo(instructions));
