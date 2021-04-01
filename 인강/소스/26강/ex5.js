const array = [1,2,3,4,5];
const squared = [];

for(let i=0;i<array.length;i++){
    squared.push(array[i]*array[i]);
}

// 같음

const square = n => n*n;
const squared2 = array.map(square);

console.log(squared);
console.log(squared2);