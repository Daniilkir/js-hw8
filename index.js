// 1
let number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}
// 2
for (let i = 2; i <= 20; i += 2) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(i);
  }
//   3
const seven = 7 
for(let i = 1; i <= 10; i++){
    const result = seven * i
    console.log(`${number} x ${i} = ${result}`) 

}
// 4
const numberarray =[1, 2, 3, 4, 5]

let arrayindex = 0;
while (arrayindex < numberarray.length) {
    console.log(numberarray[arrayindex]);
    arrayindex++;
}
// 5

const numbersarray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

for (let i = 0; i < numbersarray.length; i++) {
    if (numbersarray[i] === 7) {
        break;
    }
    console.log(numbersarray[i]);
}
// 6
const n = 13


for(let i = 0; i < n; i++){
    console.log(i)
if(i>=n){
    break
}
}
// 7 
let b = 1;

while (b <= 20) {
    if (b % 3 === 0) {
        b++;
        continue;
    }
    console.log(b);
    b++;
}
