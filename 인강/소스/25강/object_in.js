//표준 내장 객체 array

const a = new Array('red','black','blue');

console.log(a, typeof a);
console.log(a instanceof Array);
console.log(a instanceof Object);

const b = ['red','green','blue'];
console.log(b,typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

console.log(b.slice(0,1)); //프로토타입 체이닝에 의해서 array가 만들어놓은 함수 사용 가능