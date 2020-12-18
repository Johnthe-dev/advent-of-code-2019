const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let instructions = input.split('\n');
for(let i = 0; i<instructions.length;i++){
    if(instructions[i][1]==='a'){
        instructions[i]={type:'mask', value:instructions[i].split('= ')[1]}
    } else if (instructions[i][1]==='e'){
        instructions[i]={type:'memory', address:Number(instructions[i].split('[')[1].split(']')[0]), value:('000000000000000000000000000000000000'+Number(instructions[i].split('= ')[1]).toString(2)).slice(-36)}
    } else{
        console.log('error');
    }
}
let values = [];
let mask=instructions[0].value;
for(let i = 1; i<instructions.length;i++){
    if(instructions[i].type==='mask'){
        mask=instructions[i].value;
    } else if(instructions[i].type==='memory'){
        for(let j=0; j<36;j++){
            if(mask[j]!=='X'){
                instructions[i].value[j] = mask[j];
            }
        }
        values[instructions[i].address] = instructions[i].value;
    }
}
console.log(values);