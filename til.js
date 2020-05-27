//Functions - Default values

const sum = (a, b) => a + b;
console.log(sum(1)); //Result: NaN

const sumDefault = (a = 2, b = 15) => a + b;
console.log(sumDefault(1)); //Result: 16
console.log(sumDefault());//Result: 17