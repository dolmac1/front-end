const alphabets = ['a','a','b','b','b','c'];

const a = alphabets.reduce((acc,current) => {
  if(acc[current]){
    acc[current]++;
  }
  else{
    acc[current] = 1;
  }
  return acc;
},{});

console.log(a);
