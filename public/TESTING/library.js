let bigNum = 10000;
let divNum = 10;

let array1 = [];
let conditionalArr = []

function prog(val) {
    for (let i = 1; i <= val; i++) {
        array1.push(i)
    }
}
prog(divNum);


function conditionals(N) {
    for (let j = 2; j < array1.length; j++) {
        const z = (`&& ${N}%${j} === 0 `)

        conditionalArr.push(z)
    }
}

conditionals(bigNum);

const conStat = (conditionalArr.join(''));


// for(let k = 0; k<bigNum; k++){
//     if(bigNum%1===0 && conStat && bigNum%divNum===0){

//     }
// }

let a
const somn = `${a%2===0}`;

console.log(somn)


for (let a = 0; a < 10; a++) {
    if (a > 5 && somn) {
        console.log(a)
    }
}